const request = require("request");
const fs = require("fs");

const url = process.argv.slice(2)[0];
const filePath = process.argv.slice(2)[1];

request( url, (error, response, body) => {
  // console.log("error:", error); // Print the error if one occurred
  // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log("body:", body); // Print the HTML for the Google homepage.
  
  if (response.statusCode === 200) {
    fs.writeFile(filePath, body, function(err) {
      if (err) throw err;
      console.log("File written!");
    });
  } else {
    console.log("Incorrect URL!!");
  }
});