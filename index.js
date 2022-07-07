const args = process.argv.slice(2);
const { fetchBreedDescription } = require('./breedFetcher');
const breedName = args[0];

fetchBreedDescription(breedName,  (error, desc) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(desc);
  }
});