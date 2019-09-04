import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalComponent} from '../modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private router: Router,
              private _modalService: NgbModal) { }

  ngOnInit() {
  }

  callAlert() {
    const modalRef = this._modalService.open(ModalComponent);
    modalRef.componentInstance.message = 'Add payment system first!';
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
