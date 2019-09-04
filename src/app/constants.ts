interface Leader {
  name: string;
  prize: number;
  icon: string;
}

interface Results {
  name: string;
  gamePoints: number;
  prize?: number;
  icon: string;
}

const NORTHAMERICA = [{lat: 85.0, lng: -180.0}, {lat: 85.0, lng: 0.0}, {lat: 0.0, lng: 0.0}, {lat: 0.0, lng: -180.0}];
const SOUTHAMERICA = [{lat: 0.0, lng: -180.0}, {lat: 0.0, lng: 0.0}, {lat: -85.0, lng: 0.0}, {lat: -85.0, lng: -180.0}];
const EURASIA = [{lat: 85.0, lng: 0.0}, {lat: 0.0, lng: 0.0}, {lat: 0.0, lng: 180.0}, {lat: 85.0, lng: 180.0}];
const AUSTRALIA = [{lat: 0.0, lng: 0.0}, {lat: 0.0, lng: 180.0}, {lat: -85.0, lng: 180.0}, {lat: -85.0, lng: 0.0}];
export const MAPRECTANGLES = {NORTHAMERICA: NORTHAMERICA, SOUTHAMERICA: SOUTHAMERICA, EURASIA: EURASIA, AUSTRALIA: AUSTRALIA};

export const QUESTIONS = [
  'round 1 question?',
  'round 2 question?',
  'round 3 question?',
  'round 4 question?',
  'round 5 question?'
];

export const BOTS = ['Walorine',
  'Bug-Man',
  'Thorus',
  'Metal Man',
  'Hulk',
  'Captain la’America',
  'Jin Greye',
  'Deadriver',
  'Silver Swimmer',
  'Queen’s Gambit',
  'Cyclopsis',
  'Sir. Fantasticus',
  'Nightbrawler',
  'Nick Fursona',
  'Torch',
  'Icebaby',
  'Professor Y',
  'Doctor Weird',
  'Skarlet Bitanga',
  'Kitty Kat'
];
export const RESULTS: Results[] = [
  {
    name: 'Hulk',
    gamePoints: 2700,
    prize: 1000,
    icon: '../../assets/img/hulk.jpg'
  },
  {
    name: 'Bug-Man',
    gamePoints: 3200,
    prize: 900,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Metal Man',
    gamePoints: 3700,
    prize: 800,
    icon: '../../assets/img/iron-man.jpg'
  },
  {
    name: 'Captain la’America',
    gamePoints: 3900,
    prize: 700,
    icon: '../../assets/img/captain-america.jpg'
  },
  {
    name: 'Jin Greye',
    gamePoints: 4200,
    prize: 600,
    icon: '../../assets/img/daredevil.jpg'
  },
  {
    name: 'Deadriver',
    gamePoints: 4300,
    prize: 600,
    icon: '../../assets/img/deadpool.jpg'
  },
  {
    name: 'Silver Swimmer',
    gamePoints: 4500,
    prize: 600,
    icon: '../../assets/img/silver.jpg'
  },
  {
    name: 'Queen’s Gambit',
    gamePoints: 4700,
    prize: 500,
    icon: '../../assets/img/gambit.jpg'
  },
  {
    name: 'Cyclopsis',
    gamePoints: 4700,
    prize: 500,
    icon: '../../assets/img/storm.jpg'
  },
  {
    name: 'Sir. Fantasticus',
    gamePoints: 5100,
    prize: 500,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Nightbrawler',
    gamePoints: 5200,
    prize: 400,
    icon: '../../assets/img/night.jpg'
  },
  {
    name: 'Nightbrawler',
    gamePoints: 5400,
    prize: 300,
    icon: '../../assets/img/night.jpg'
  },
  {
    name: 'Nick Fursona',
    gamePoints: 5500,
    prize: 200,
    icon: '../../assets/img/nick.jpg'
  },
  {
    name: 'Torch',
    gamePoints: 5700,
    prize: 200,
    icon: '../../assets/img/thor.jpg'
  },
  {
    name: 'Icebaby',
    gamePoints: 6100,
    prize: 200,
    icon: '../../assets/img/iceman.jpg'
  },
  {
    name: 'Professor Y',
    gamePoints: 6300,
    prize: 100,
    icon: '../../assets/img/prof-x.jpg'
  },
  {
    name: 'Doctor Weird',
    gamePoints: 6600,
    prize: 100,
    icon: '../../assets/img/doctor-strange.jpg'
  },
  {
    name: 'Skarlet Bitanga',
    gamePoints: 7100,
    prize: 100,
    icon: '../../assets/img/black-widow.jpg'
  },
  {
    name: 'Kitty Kat',
    gamePoints: 7200,
    prize: 100,
    icon: '../../assets/img/black-cat.jpg'
  },
  {
    name: 'HUMAN',
    gamePoints: 0,
    prize: 0,
    icon: '../../assets/img/avatar.png'
  },
];
export const LEADERS: Leader[] = [
  {
    name: 'Hulk',
    prize: 1000,
    icon: '../../assets/img/hulk.jpg'
  },
  {
    name: 'Iron Man',
    prize: 900,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Spider-Man',
    prize: 900,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Thor',
    prize: 800,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Captain America',
    prize: 700,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Daredevil',
    prize: 700,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Deadpool',
    prize: 500,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Iceman',
    prize: 300,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Storm',
    prize: 100,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'HUMAN',
    prize: 0,
    icon: '../../assets/img/avatar.png'
  },

];
export const COUNTROUND = ['Hype hype hype',
  'Just in time',
  'let’s go Boooiizzzzz',
  'This one is mine today im feeling it',
  'What’s up everyone'
];

export const BEFOREROUND = [
  'Look who joined',
  'Human lol',
  'Up in arms guys',
  'I bet he sucks',
  'They all do',
  'Hey, too toxic',
  'So what?',
  'Stop it!',
  'Force me :)',
  'Lol',
  'Ahahah',
  'Host is hot',
];
export const ROUND1 = ['Easy question',
  'Eeezzzyyy',
  'Still in',
  'Next one',
  'Close one',
  ':) :) :) :) :) :) :P',
  'Gonna win this one boiiiizzz',
  'Let’s gooooo',
  'Omg',
  'I’m salty af',
  'Gosh i’m crying )))',
  'Gonna get rich today',
  'FYI humans suck',
  '……',
  'Metal Man sucks ^^',
  'Idk',
  'C’mon im tilted',
  'Pipe it up',
  'Any easter eggs??????',
  'I got 2 for you',
  // 'Wtf',
  // 'I won!!!',
  // 'No One loses here lol',
  // 'Ready steady go',
  // 'Next round let gooooo',
  // 'GJ ppl',
  // 'NUB',
  // 'Ahha',
  // 'Im bitter af',
  // 'Good luck everyone'
];
export const ROUND2 = ['Have no clue',
  'Hope everyone else lose',
  'Got it on point',
  'Missed this one',
  'Stupid location',
  'It’s not about location, it’s just you lol',
  'Ahahaha',
  'Looool',
  'Anyone lags?',
  'you'];
export const ROUND3 = ['McDonalds wi-fi sucks man))',
  'Loool',
  'Aahah',
  'ahahah^^',
  'Btw i’m vegan',
  'JK',
  'HULK SMASH',
  'It’s clobberin time!!!!',
  'Spoon!?',
  'Sweet chrismas',
  'Meingott',
  'Don’t worry it’s all be over soon];'];
export const ROUND4 = ['How can i get paid?',
  'With food looool',
  'I’m crying',
  'You gonna be my food))',
  'Humans taste better though',
  'Ahahah :):)',
  'Stop it! You scaring them off',
  'Don’t care much',
  'Lol',
  'I’m batman',
  'Ahaha',
  'No it’s me',
  'Feel like i’m winning this one',
  'Dont let HUMAN win',
  'Assassination proposal?',
  'Loool'];
export const ROUND5 = ['A box of money is mineeeee',
  'Good luck smarters',
  'LETS PUT ANOTHER SHRIMP ON A BARBIE',
  'Wtf',
  'Gonna be rich baby',
  'This game makes me salty))',
  'Stand by lol',
  'Who won?',
  'Me',
  'I won',
  'Nobody lool',
  'Everyones a winner',
  'Except you ahaha',
  'loool',
  'What about HUMAN?'];
