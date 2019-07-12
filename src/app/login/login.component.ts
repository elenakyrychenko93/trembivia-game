import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name: string = 'Human';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onJoin() {
    this.router.navigate(['/main']);
  }
}
