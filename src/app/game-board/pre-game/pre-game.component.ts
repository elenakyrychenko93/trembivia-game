import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.css']
})
export class PreGameComponent implements OnInit {

  public count: number;
  constructor() { }

  ngOnInit() {
    this.count = 5;

    const animation = setInterval(() => {
      if(this.count > 0) {
        this.count = this.count - 1;
      } else {
        clearInterval(animation);
      }
  }, 1000);

  }
}
