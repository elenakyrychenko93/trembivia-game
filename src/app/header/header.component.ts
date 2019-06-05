import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name: string = 'HUMAN';
  isHostTalking: any = false;
  round;
  sectorBoost: boolean = false;
  distanceBoost: boolean = false;

  constructor(private gameService: GameService) {
    this.gameService.getIsHostTalking().subscribe(value => {
      this.isHostTalking = value;
    });

    this.gameService.getRound().subscribe(value => {
      this.round = value;
    });
  }

  onSectorBoost() {
    this.gameService.setSectorBoost(true);
    this.sectorBoost = true;
  };

  onDistanceBoost() {
    this.gameService.setDistanceBoost(true);
    this.distanceBoost = true;
  }

  ngOnInit() {
  }

}
