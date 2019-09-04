import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  public name: string = 'HUMAN';
  public balance: number = 0.00;
  public rate: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
