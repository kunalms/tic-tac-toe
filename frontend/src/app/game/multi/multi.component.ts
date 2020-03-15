import {Component, OnInit} from '@angular/core';
import Minimax from 'tic-tac-toe-minimax';
import {MatDialog} from '@angular/material/dialog';
import {GameConfig, NewGameDialogComponent} from './new-game-dialog/new-game-dialog.component';
import {UserService} from '../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Socket} from 'ngx-socket-io';
import {GameState} from '../../models/game-state';

const {GameStep} = Minimax;

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss']
})
export class MultiComponent implements OnInit {

  public currUserName: string;
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
    this.userService.getUserInfo().subscribe(user => {
      this.currUserName = user.firstname || user.username;
    });
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
      console.log(result.mode, data);
      this.socket.emit(result.mode, data);
    });

    this.socket.on('newGame', (data) => {
      this.roomId = data.room;
      const message = 'Hello ' + this.currUserName + '. Please ask your friend to enter Game ID:' + this.roomId + '.';
      this.snackBar.open(message, 'dismiss');
      this.lastStatus = 'Waiting for Player 2...';
    });

    this.socket.on('playerJoined', (data) => {
      this.opponentName = data.name;
      const message = this.opponentName + ' Has joined.';
      this.snackBar.open(message, 'dismiss', {duration: 3000});

      const gameState: GameState = new GameState();
      gameState.gameState = this.gameState;
      gameState.playerOne = this.currUserName;
      gameState.playerTwo = this.opponentName;
      gameState.room = this.roomId;
      this.socket.emit('gameSetup', {gameState});
      this.lastStatus = 'your turn';
    });

    this.socket.on('setupComplete', (data: GameState) => {
      console.log('setupComplete', data);
      this.currUserName = data.playerTwo;
      this.opponentName = data.playerOne;
      this.gameState = data.gameState;
      this.roomId = data.room;
      this.lastStatus = this.opponentName + ' is playing';
    });

    /**
     * End the game on any err event.
     */
    this.socket.on('err', (data) => {
      console.log(data);
      this.snackBar.open(data.message, 'dismiss');
    });
  }

  makeOpponentMove() {
    const symbols = {
      currPlayer: 'X',
      opponentPlayer: 'O'
    };

    const winnerMapping = {
      currPlayer: this.currUserName + ' Wins!',
      opponentPlayer: this.opponentName + ' Wins!',
      draw: 'It\'s a Draw!'
    };

    const result = GameStep(this.gameState, symbols);
    this.gameState = result.board;

    if (result.winner) {
      this.winner = winnerMapping[result.winner];
    }
  }

  makeUserMove(field: number) {
    if (typeof this.gameState[field] !== 'number') {
      return;
    }

    this.gameState[field] = this.isPlayerOne ? 'X' : 'O';
    this.socket.emit('playerTurn', {gameState: this.gameState});
  }

  getTurnsCount() {
    return this.gameState.filter(val => typeof val === 'string').length;
  }
}
