import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public round = new BehaviorSubject(null);
  public isHostTalking = new BehaviorSubject(false);
  public sectorBoost = new BehaviorSubject(false);
  public distanceBoost = new BehaviorSubject(false);
  public isRoundRun = new BehaviorSubject(false);

  constructor() {
  }

  getRound(): Observable<number> {
    return this.round.asObservable();
  }

  setRound(round) {
    console.log('round', round);
    this.round.next(round);
  }

  getIsRoundRun(): Observable<boolean> {
    return this.isRoundRun.asObservable();
  }

  setIsRoundRun(round) {
    this.isRoundRun.next(round);
  }


  getIsHostTalking(): Observable<boolean> {
    return this.isHostTalking.asObservable();
  }

  setIsHostTalking(isHostTalking) {
    this.isHostTalking.next(isHostTalking);
  }

  getSectorBoost(): Observable<boolean> {
    return this.sectorBoost.asObservable();
  }

  setSectorBoost(sectorBoost) {
    this.sectorBoost.next(sectorBoost);
  }

  getDistanceBoost(): Observable<boolean> {
    return this.distanceBoost.asObservable();
  }

  setDistanceBoost(distanceBoost) {
    this.distanceBoost.next(distanceBoost);
  }
}
