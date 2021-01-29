import { getAverageMilesPerDay } from './utilities.js';

export default class Game {
  constructor (title) {
    this.title = title;
    this.currentDate = new Date('1841-05-19');
    this.averageMilesPerDay = getAverageMilesPerDay();
    this.turn = 0;
    this.milesTravelled = 0;
  }

  init () {
    this.refreshStats();
    document.getElementById('advance').onclick = event => {
      this.advanceTurn();
    };
  }

  advanceTurn () {
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.turn++;
    this.milesTravelled += this.averageMilesPerDay;
    this.refreshStats();
  }

  refreshStats () {
    const milesEl = document.getElementById('miles');
    const turnEl = document.getElementById('turn');
    const dateEl = document.getElementById('date');
      
    milesEl.textContent = this.milesTravelled;
    turnEl.textContent = this.turn;
    dateEl.textContent = this.currentDate.toDateString();
  }
}
