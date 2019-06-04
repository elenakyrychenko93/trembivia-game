import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BOTS, BEFOREROUND, ROUND1, ROUND2, ROUND3, ROUND4, ROUND5} from '../../users_questions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, OnChanges {
  @Input() isChatActive: string;
  @Input() round: number;
  comment = new FormControl('');
  comments = [];
  bots = BOTS;
  beforeRound = BEFOREROUND;
  round1 = ROUND1;
  round2: any = ROUND2;
  round3: any = ROUND3;
  round4: any = ROUND4;
  round5: any = ROUND5;

  constructor() {
  }

  ngOnChanges() {
    this.defineRound(this.round);
  }

  ngOnInit() {
    this.defineRound(this.round);
  }

  defineRound(round) {
    switch (round) {
      case 0:
        this.startChatting(this.beforeRound);
        break;
      case 1:
        this.startChatting(this.round1);
        break;
      case 2:
        this.startChatting(this.round2);
        break;
      case 3:
        this.startChatting(this.round3);
        break;
      case 4:
        this.startChatting(this.round4);
        break;
      case 5:
        this.startChatting(this.round5);
        break;

      default:
        console.log('no rounds');
        break;
    }
  }

  startChatting(roundPhrases) {
    const iteration = (i) => {
      setTimeout(() => {
        this.comments.push(
          {
            name: this.bots[i],
            text: roundPhrases[i],
            date: new Date().toLocaleString('en-GB', {timeZone: 'UTC'})
          });
      }, 1200 * i);
    };
    for (let i = 0; i < roundPhrases.length; i++) {
      iteration(i);
    }
  }

  addComment() {
    this.comments.push(
      {
        name: 'HUMAN',
        text: this.comment.value,
        date: new Date().toLocaleString('en-GB', {timeZone: 'UTC'})
      });
  }

  // startChatting(roundPhrases) {
  //   for (let i = 0; i < roundPhrases.length; i++) {
  //     this.comments.push({name:  this.bots[i], text: roundPhrases[i], date: new Date()});
  //     console.log( this.bots[i], roundPhrases[i]);
  //   }
  // }

}
