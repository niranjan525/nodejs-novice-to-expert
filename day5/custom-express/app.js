// Import and create ExpressJS app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.use((req, res)=>{
      res.send('requested API/page not found')
})
// Express route
app.get('/', (req, res) => {
      res.send('Welcome to Express app <a href="/page"> Click here for /page </a>');
});

app.get('/page', (req, res) => {
      res.send('Welcome to Express app new page');
});

app.post('/data', (req, res) => {
      const body = req.body
      console.log(body)
      res.json(body)
})

app.get('/city/:cityname', (req, res) => {
      switch(req.params.cityname.toLowerCase()) {
            case 'bengaluru': {
                  res.send("Welcome to Silicon Valley of India!")
            }
            case 'mumbai': {
                  res.send("Welcome to Finincial Capital of India!")
            }
            case 'delhi': {
                  res.send("Welcome to Capital of India!")
            }
            default: {
                  res.send("Oops! City not found!")

            }
      }
})


//Start server
app.listen(8080);
console.log("Server started on port 8080");