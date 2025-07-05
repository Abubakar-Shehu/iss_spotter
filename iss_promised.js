const needle = require('needle');

const fetchMyIP = () => {
  const needleResponse = needle('get', 'https://api.ipify.org?format=json')
    .then((response) => {
      return response.body.ip
    })
    .catch((error) => {
      const msgErr = 'Not good, Didn\'t work' 
      throw new Error(`${msgErr} ${error}`)
    })

  return needleResponse;
  
}

// iss_promised.js: 

// ...

/* 
 * Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
 * Input: IP address as a string
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = (ip) => {
const needleResponse2 = needle('get', `http://ipwho.is/${ip}`)
  .then((response) => {
    const location = {
      latitude: response.body.latitude,
      longitude: response.body.longitude
    }
    //console.log(location)
    return location;
  })
  .catch((error) => {
    const msgErr = 'Not good, Didn\'t work' 
    throw new Error(`${msgErr} ${error}`)
  })

  return needleResponse2
};

const fetchISSFlyOverTimes = (location) => {
const needleResponse3 = needle('get', `https://iss-flyover.herokuapp.com/json/?lat=${location.latitude}&lon=${location.longitude}`)
  .then ((response) => {
    return response.body.response
  })
  .catch((error) => {
    const msgErr = 'Not good, Didn\'t work' 
    throw new Error(`${msgErr} ${error}`)
  })

  return needleResponse3
}

const nextISSTimesForMyLocation = () => {
  const result = 
  fetchMyIP()
  .then((response) => {
    return fetchCoordsByIP(response);
  })
  .then((response) => {
    return fetchISSFlyOverTimes(response)
  })

  return result  
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };
