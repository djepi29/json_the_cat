const request = require("request")
const [,,breedName] = process.argv; // good test chartreux //bad test megatron
const URL =  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
// console.log(request)// making sure request works
request(URL, (error, response, body) => {
  if (error) { // if the request format is not respected to the dot it will throw an error
    console.error("error while fetching data from server");
    console.error(error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error("Unexpected status code:", response.statusCode);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {    // checking if breed is not found;
    console.error("sorry, this breed does not exist on our database");
    return;
  }
  // console.log("connect to server");
  // console.log(typeof data);
  // console.log("JASON.parse(body):", data);
  console.log(data[0]["description"]);// 
})
