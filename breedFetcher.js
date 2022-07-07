const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URI = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URI, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0]) {
        callback(null, data[0].description);
      } else {
        callback("No breed with that name found", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };