const { fetchBreedDescription } = require('./breedFetcher');

// command line bind
const [,,breedName] = process.argv;

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error("Error:", error);
    return;
  } // implicit else case
  console.log(description);
});