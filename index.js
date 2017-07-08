const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'f558a0d1c9364bdd9bda4c7e659caaf0';
let city = argv.c || 'Jaipur';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degree Celsius in ${weather.name}!`;
	console.log("\nWelcome to my weather app. Made by Rahul Bhatia. Enjoy\n")
    console.log(message);
  }
});