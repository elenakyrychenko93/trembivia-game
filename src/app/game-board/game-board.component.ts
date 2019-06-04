import {Component, OnDestroy, OnInit} from '@angular/core';
import {QUESTIONS} from '../users_questions';
import * as L from '../../assets/leaflet';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit, OnDestroy {
  rounds: any = [0, 1, 2, 3, 4, 5, 6];
  round: any;
  questions: any = QUESTIONS;
  question: string;
  isHostTalking: boolean;

  answer: any;
  answerMarker: any = {};
  prevAnswerMarker: any = {};
  correctMarker: any = {};
  map: any;
  polyline: any;

  time: number = 0;
  interval: number;

  humanPoints: number = 0;
  currentPoints: number = 0;

  constructor(private gameService: GameService) {
    this.gameService.getSectorBoost().subscribe(value => {
      if (value) {
        this.applySectorBoost();
      }
    });

    this.gameService.getDistanceBoost().subscribe(value => {
      if (value) {
        this.applyDistanceBoost();
      }
    });
  }

  ngOnInit() {
    this.startGame();
    this.initMap();
    this.answer = {lat: 50.431782, lon: 30.516382};
  }

  ngOnDestroy() {
    this.map.remove();
    this.endGame();
  }

  startGame() {
    setTimeout(() => {
      this.round = this.rounds[0];
      setTimeout(() => this.startRounds(), 5000);
    }, 5000);
  }

  startRounds() {
    if (this.round < 5) {
      this.startTimer(20);
      this.question = this.questions[this.round];
      this.round = ++this.round;
      this.gameService.setRound(this.round);
      this.calculateResult();
      this.hostStartTalk();
    } else if (this.round === 5) {
      this.round = ++this.round;
      this.gameService.setRound(this.round);
    }
  }

  calculateResult() {
    setTimeout(() => {
      this.calculateHumanPoints();
      this.prevAnswerMarker = this.answerMarker;
    }, 20000);
  }

  hostStartTalk() {
    setTimeout(() => {
      this.clearMarkers();
      this.clearPolyline();
      this.isHostTalking = true;
      this.gameService.setIsHostTalking(this.isHostTalking);
      this.hostStopTalk();
    }, 25000);
  }

  hostStopTalk() {
    setTimeout(() => {
      this.isHostTalking = false;
      this.gameService.setIsHostTalking(this.isHostTalking);
      this.startRounds();
    }, 10000);

  }

  endGame() {
    this.pauseTimer();
    this.round = 6;
  }

  initMap() {
    this.map = L.map('map', {
      center: [51.509, -0.08],
      zoom: 1
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    this.map.on('click', (e) => {
      let lat = e.latlng.lat;
      let lng = e.latlng.lng;
      console.log('You clicked the map at LAT: ' + lat + ' and LONG: ' + lng);

      if (this.answerMarker != undefined) {
        this.map.removeLayer(this.answerMarker);
      };

      this.answerMarker = L.marker([lat, lng]).addTo(this.map);
    });
  }

  clearMarkers() {
    this.map.removeLayer(this.answerMarker);
    this.map.removeLayer(this.correctMarker);
  };

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  calculateDistance = (lat1, lon1, lat2, lon2) => {
    const earthRadiusKm = 6371;

    let dLat = this.degreesToRadians(lat2 - lat1);
    let dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  };

  calculateHumanPoints() {
    this.correctMarker = L.marker([this.answer.lat, this.answer.lon]).addTo(this.map);

    if (!this.answerMarker._latlng || this.prevAnswerMarker._latlng == this.answerMarker._latlng) {
      this.currentPoints = 5000;
      // this.map.fitBounds([{lat: this.answer.lat, lng: this.answer.lon}], 5);
      this.map.setView(new L.LatLng(this.answer.lat, this.answer.lon), 5);
    } else {
      this.currentPoints = this.calculateDistance(this.answerMarker._latlng.lat, this.answerMarker._latlng.lng, this.answer.lat, this.answer.lon);
      this.addPolyline();
    }
    this.humanPoints = this.humanPoints + this.currentPoints;
    console.log(this.humanPoints);
  };

  addPolyline() {
    let latlngs = Array();
    latlngs.push(this.answerMarker._latlng);
    latlngs.push({lat: this.answer.lat, lng: this.answer.lon});
    this.polyline = L.polyline(latlngs, {color: 'red'}).addTo(this.map);
    this.map.fitBounds(this.polyline.getBounds());
  }

  clearPolyline() {
    if (this.polyline) {
      this.map.removeLayer(this.polyline);
    }
  }

  startTimer(seconds) {
    this.time = seconds;
    this.interval = setInterval(() => {
      this.time--;
      if (this.time < 1) {
        clearInterval(this.interval);
      }
      ;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  applyDistanceBoost() {
    this.humanPoints = this.humanPoints - this.currentPoints / 2;
    console.log(this.humanPoints);
  };

  applySectorBoost() {

  };

}
