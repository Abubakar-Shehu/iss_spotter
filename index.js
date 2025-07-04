// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  fetchCoordsByIP(ip, (error, coordinate) => {
    if (error) {
      console.log(error);
    }
    console.log(coordinate);

    fetchISSFlyOverTimes(coordinate, (error, data) => {
      if (error) {
        console.log(error);
      }
      console.log(data);
      
    });
  });
});

