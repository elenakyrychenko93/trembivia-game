import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LEADERS, RESULTS} from '../users_questions';

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
