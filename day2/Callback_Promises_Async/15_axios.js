var axios = require('axios');

const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

axios.get(weatherUrl).then((res) => {
    console.log(res);
});
