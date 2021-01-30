import { milesToCalifornia } from './consts.js';

function getAverageMilesPerDay () {
  const startDate = new Date('1841-05-19');
  const endDate = new Date('1841-11-05');
  const durationInMS = endDate - startDate;
  const durationInDays = durationInMS / 1000 / 60 / 60 / 24;
  const averageMilesPerDay = Math.round(milesToCalifornia / durationInDays);
  return averageMilesPerDay;
};

export { getAverageMilesPerDay };
