import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name: string = 'Human';
  isHostTalking: any = false;
  round;
  isRoundRun: boolean = false;
  sectorBoost: boolean = false;
  distanceBoost: boolean = false;

  constructor(private gameService: GameService,
              private router: Router) {
    this.gameService.getIsHostTalking().subscribe(value => {
      this.isHostTalking = value;
    });

    this.gameService.getRound().subscribe(value => {
      this.round = value;
    });

    this.gameService.getIsRoundRun().subscribe(value => {
      this.isRoundRun = value;
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

  redirectToMain() {
    this.router.navigate(['/main']);
  }

}
