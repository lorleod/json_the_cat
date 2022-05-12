const request = require("request");
const args = process.argv.slice(2);
const URI = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(URI, (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log("No breed with that name found");
    } else {
      console.log(``, data[0].description);
    }
  }
});
