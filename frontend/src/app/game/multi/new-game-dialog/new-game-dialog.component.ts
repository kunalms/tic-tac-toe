import {Component, OnInit} from '@angular/core';

export class GameConfig {
  mode: string;
  gameCode: number;
}

@Component({
  selector: 'app-new-game-dialog',
  templateUrl: './new-game-dialog.component.html',
  styleUrls: ['./new-game-dialog.component.scss']
})
export class NewGameDialogComponent implements OnInit {
  userSelection: GameConfig = new GameConfig();
  modes: any[] = [
    {
      placeHolder: 'Create a new game !',
      value: 'createGame'
    },
    {
      placeHolder: 'Join a Game',
      value: 'joinGame'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

  isOkBtnDisabled() {
    if (this.userSelection.mode === 'joinGame') {
      return this.userSelection.gameCode === undefined;
    }
    return this.userSelection.mode === undefined;
  }
}
