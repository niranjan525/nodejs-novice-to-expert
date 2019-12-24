var http = require('http');
var fs = require('fs');
const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

http.get(weatherUrl, (res) => {

    let data = '';

    res.on('data', (chunk) => {
        data = data + chunk;
    });
    /// Buffer -> string -> parse (JS object) -> string prettified
    res.on('end', () => {
        fs.writeFile('weather.json', JSON.stringify(JSON.parse(data.toString()), null, 4),  (err) => {
            if(err) {
                console.log("Error: ", err);
            }
            else {
                console.log("weather.json written successfully");
            }
        });
    });

})