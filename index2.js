// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');
// const { printPassTimes } = require('./index');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
// fetchMyIP()
//   .then((response) => {
//     return fetchCoordsByIP(response);
//   })
//   .then((response) => {
//     // console.log(response)
//     return fetchISSFlyOverTimes(response)
//   })
//   .then((response) => {
//     console.log(response)
//   })

nextISSTimesForMyLocation()
  .then((response) => {
      printPassTimes(response)
  })
// console.log(fetchISSFlyOverTimes())