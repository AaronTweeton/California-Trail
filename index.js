(function () {
  'use strict';

  const milesToCalifornia = 3000;
  const startDate = new Date('1841-05-19');
  const endDate = new Date('1841-11-05');
  const durationInMS = endDate - startDate;
  const durationInDays = durationInMS / 1000 / 60 / 60 / 24;
  const averageMilesPerDay = Math.round(milesToCalifornia / durationInDays);

  // Start date on departure date
  const currentDate = new Date('1841-05-19');
  
  let turn = 0;
  let milesTravelled = 0;
  
  startTurns();
  
  function startTurns () {
    refreshStats();
    document.getElementById('advance').onclick = function (event) {
      advanceTurn();
    };
  }

  function advanceTurn () {
    currentDate.setDate(currentDate.getDate() + 1);
    turn++;
    milesTravelled += averageMilesPerDay;
    refreshStats();
  }
  
  function refreshStats () {
    const milesEl = document.getElementById('miles');
    const turnEl = document.getElementById('turn');
    const dateEl = document.getElementById('date');
      
    milesEl.innerText = milesTravelled;
    turnEl.innerText = turn;
    dateEl.innerText = currentDate.toDateString();
  }
})();
