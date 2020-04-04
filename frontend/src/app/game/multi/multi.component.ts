import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {GameConfig, NewGameDialogComponent} from './new-game-dialog/new-game-dialog.component';
import {UserService} from '../../services/user.service';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import {Socket} from 'ngx-socket-io';
import {MultiPlayerHelperService} from './helpers/multi-player-helper.service';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss']
})
export class MultiComponent implements OnInit {

  public currUserName = 'Player 1';
  public opponentName: string;

  isPlayerOne = true;

  lastStatus = '';

  public gameState: Array<number | string> = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  public winner: string;
  private roomId: string;

  constructor(private dialog: MatDialog,
              private userService: UserService,
              private snackBar: MatSnackBar,
              private socket: Socket) {
  }

  ngOnInit() {
    const dialogRef = this.dialog.open(NewGameDialogComponent, {width: '310px', disableClose: true});
    dialogRef.afterClosed().subscribe((result: GameConfig) => {
      // if user has request for a new game emit a createGame event.

      const data: any = {
        name: this.currUserName
      };
      if (result.mode === 'joinGame') {
        this.isPlayerOne = false;
        data.room = result.gameCode;
      }
      this.socket.emit(result.mode, data);
    });

    this.socket.on('newGame', (data) => {
      this.roomId = data.room;
      const message = 'Hello ' + this.currUserName + '. Please ask your friend to enter Game ID:' + this.roomId + '.';
      const snackBarRef: MatSnackBarRef<any> = this.snackBar.open(message, 'copy');
      snackBarRef.afterDismissed().subscribe(() => {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.roomId;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
      });
      this.lastStatus = 'Waiting for Player 2...';
    });

    this.socket.on('playerJoined', (data) => {
      this.opponentName = data.name;
      const message = this.opponentName + ' Has joined.';
      this.snackBar.open(message, 'dismiss', {duration: 3000});

      this.socket.emit('gameSetup', {
        gameState: this.gameState,
        playerOne: this.currUserName,
        playerTwo: this.opponentName,
        room: this.roomId
      });
      this.lastStatus = 'your turn';
    });

    this.socket.on('setupComplete', (data: any) => {
      this.currUserName = data.playerTwo;
      this.opponentName = data.playerOne;
      this.gameState = data.gameState;
      this.roomId = data.room;
      this.lastStatus = this.opponentName + ' is playing';
    });

    this.socket.on('opponentMoved', (data) => {
      this.gameState = data.gameState;
      this.updateGame();
    });

    /**
     * End the game on any err event.
     */
    this.socket.on('err', (data) => {
      this.snackBar.open(data.message, 'dismiss');
    });
  }

  makeUserMove(field: number) {
    if (typeof this.gameState[field] !== 'number') {
      return;
    }
    if (this.isPlayerOne && this.getTurnsCount() % 2 === 0 || !this.isPlayerOne && this.getTurnsCount() % 2 === 1) {
      this.gameState[field] = this.isPlayerOne ? 'X' : 'O';
      this.socket.emit('playerTurn', {gameState: this.gameState, room: this.roomId});
      this.updateGame();
    }
    // false click do nothing
    return;
  }

  getTurnsCount() {
    return this.gameState.filter(val => typeof val === 'string').length;
  }

  updateGame() {
    const symbols = {
      huPlayer: 'X',
      aiPlayer: 'O'
    };

    if (MultiPlayerHelperService.isGameFinished(this.gameState, symbols)) {
      const playerOneWon = MultiPlayerHelperService.playerWon(this.gameState, symbols.huPlayer);
      const playerTwoWon = MultiPlayerHelperService.playerWon(this.gameState, symbols.aiPlayer);
      if (playerOneWon) {
        if (this.isPlayerOne) {
          this.lastStatus = 'Yay 🙌 You Win!';
          this.openRestartSnackBar();
        } else {
          this.lastStatus = this.opponentName + ' Won!';
        }
      } else if (playerTwoWon) {
        if (this.isPlayerOne) {
          this.lastStatus = this.opponentName + ' Won!';
          this.openRestartSnackBar();
        } else {
          this.lastStatus = 'Yay 🙌 You Win!';
        }
      } else {
        this.lastStatus = 'It\'s a draw!';
        if (this.isPlayerOne) {
          this.openRestartSnackBar();
        }
      }
    } else {
      this.updateStatus();
    }
  }

  openRestartSnackBar() {
    const snackBarRef = this.snackBar.open(this.lastStatus, 'restart');
    snackBarRef.afterDismissed().subscribe(() => {
      this.gameState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      this.socket.emit('playerTurn', {gameState: this.gameState, room: this.roomId});
      this.updateStatus();
    });
  }

  updateStatus() {
    if (this.isPlayerOne) {
      if (this.getTurnsCount() % 2 === 0) {
        this.lastStatus = 'your turn';
      } else {
        this.lastStatus = this.opponentName + '\'s turn';
      }
    } else {
      if (this.getTurnsCount() % 2 === 1) {
        this.lastStatus = 'your turn';
      } else {
        this.lastStatus = this.opponentName + '\'s turn...';
      }
    }
  }
}
