var request = require('request');

const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

request(weatherUrl, {json: true}, (err, res, body) => {
    console.log(body);
});