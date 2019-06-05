import {Component, Input, OnInit} from '@angular/core';
import {RESULTS} from '../../constants';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {
  users = RESULTS;
  @Input() humanPoints;

  constructor() {
  }

  ngOnInit() {
    this.users[19].gamePoints = this.humanPoints;
    this.users.sort(function (a, b) {
      return a.gamePoints - b.gamePoints;
    });
  }

}
