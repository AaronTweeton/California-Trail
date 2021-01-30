import { getAverageMilesPerDay } from './utilities.js';
import { milesToCalifornia } from './consts.js';

export default class Game {
  constructor (title) {
    this.title = title;
    this.currentDate = new Date('1841-05-19');
    this.averageMilesPerDay = getAverageMilesPerDay();
    this.turn = 0;
    this.progress = 0;
    this.milesTravelled = 0;
  }

  init () {
    this.refreshStats();
    document.getElementById('advance').onclick = event => {
      this.advanceTurn();
    };
  }

  advanceTurn () {
    if (this.progress < 100) {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
      this.turn++;
      this.milesTravelled += this.averageMilesPerDay;
      this.progress = Math.round((this.milesTravelled / milesToCalifornia) * 100);
      this.refreshStats();
    }
  }

  refreshStats () {
    this.updateCurrentDate();
    this.updateProgress();
    this.updateMilesTravelled();
    if (this.progress >= 100) {
      this.showWinnerModal();
    }
  }
  
  showWinnerModal () {
    const myModal = new bootstrap.Modal(document.getElementById('winnerModal'), {});
    myModal.show();
  }

  updateProgress () {
    const progressEl = document.getElementById('progress');
    progressEl.style.width = this.progress + '%';
    progressEl.textContent = this.progress + '%';
    if (this.progress >= 100) {
      progressEl.classList.add('bg-success');
    }
  }
  
  updateMilesTravelled () {
    const milesEl = document.getElementById('miles');
    milesEl.textContent = this.milesTravelled;
  }

  updateCurrentDate () {
    const dateEl = document.getElementById('date');
    dateEl.textContent = this.currentDate.toDateString();
  }
}
