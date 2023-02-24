const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null); // error value
      return;
    }

    if (response.statusCode !== 200) {
      callback(`Unexpected status code: ${response.statusCode}`, null); // error value
      return;
    }

    const data = JSON.parse(body);
    
    if (data.length === 0) {
      callback("Sorry, this breed does not exist on our database", null); // error value
      return;
    }

    callback(null, data[0]["description"]); // null for error value, description value
  });
};

module.exports = { fetchBreedDescription };