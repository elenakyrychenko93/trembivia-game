import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RESULTS} from '../constants';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  public balance: number = 0;
  leaders = RESULTS;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  redirectMainMenu() {
    this.router.navigate(['/main']);
  }

}
