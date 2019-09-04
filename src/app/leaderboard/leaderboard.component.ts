import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RESULTS} from '../constants';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  leaders = RESULTS;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  redirectGameBoard() {
    this.router.navigate(['/game-board']);
  }

  redirectLeaderboard() {
    this.router.navigate(['/leaderboard']);
  }

  redirectShop() {
    this.router.navigate(['/shop']);
  }

}
