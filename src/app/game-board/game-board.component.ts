import {Component, OnDestroy, OnInit} from '@angular/core';
import {QUESTIONS} from '../users_questions';

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
  answerMarker = {};
  correctMarker = {};
  map;

  time: number = 0;
  interval;

  humanPoints = 0;

  constructor() {
  }

  ngOnInit() {
    this.startGame();
    this.initMap();
    this.answer = {lat: 50.431782, lon: 30.516382};
  }

  ngOnDestroy() {
    this.map.remove();
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
      this.hostStartTalk();
    } else if (this.round === 5) {
      this.round = ++this.round;
    }
  }

  hostStartTalk() {
    setTimeout(() => {
      this.calculateHumanPoints();
      this.clearMarkers();
      this.isHostTalking = true;
      console.log('before', this.isHostTalking);
      this.hostStopTalk();
    }, 20000);
  }

  hostStopTalk() {
    setTimeout(() => {
      this.isHostTalking = false;
      console.log('after', this.isHostTalking);
      this.startRounds();
    }, 5000);

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
    console.log(earthRadiusKm * c);
    return earthRadiusKm * c;
  };

  calculateHumanPoints() {
    console.log(this.answerMarker._latlng);
    let points = this.calculateDistance(this.answerMarker._latlng.lat, this.answerMarker._latlng.lng, this.answer.lat, this.answer.lon);
    this.humanPoints = this.humanPoints + points;
    console.log(this.humanPoints);
  };

  startTimer(seconds) {
    this.time = seconds;
    this.interval = setInterval(() => {
      this.time--;
      if (this.time < 1) {
        this.correctMarker = L.marker([this.answer.lat, this.answer.lon]).addTo(this.map);
        clearInterval(this.interval);
      }
      ;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
