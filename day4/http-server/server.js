//include the http and url module
var http = require('http')
var url = require('url')
var path = require('path')
var fileSystem = require('fs')

//create the http server accepting requests to port 3000
http.createServer(function (req, res) {

      // Phase 1

      // res.writeHead(200, { 'Content-Type': 'text/html' });
      // res.write('<h1>Hello World!</h1>');
      // res.end();

      // Phase 2
      // let filePath = path.resolve('index.html')
      // let stat = fileSystem.statSync(filePath);

      // res.writeHead(200, {
      //       'Content-Type': 'text/html',
      //       'Content-Length': stat.size
      // });


      // let readStream = fileSystem.createReadStream(filePath);
      // readStream.pipe(res);

      // Phase 3

      var urlParts = url.parse(req.url)
      console.log(req.url, urlParts)
      console.log(urlParts.query)
      //direct the request to appropriate function to be processed based on the url pathname
      switch (urlParts.pathname) {
            case "/":
                  homepage(req, res);
                  break;
            case "/read":
                  read(req, res);
                  break;
            case "/svc/update":
                  update(req, res);
                  break;
            default:
                  homepage(req, res);
                  break;
      }
}).listen(3000);
console.log("Server running at http://localhost:3000/");

//functions to process incoming requests
function homepage(req, res) {
    res.end("Hello, this is the home page :)"); 
}

function read(req, res) {
    res.end("Hello, there is no data for reading yet.");    
}

function update(req, res) {
    res.end("Hello, there is no data to update.");  
}