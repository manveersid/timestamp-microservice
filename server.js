// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//requests with no data
app.get('/api/', (req, res)=>{
  res.send('sending current time');
});

//handling real reqeust
app.get('/api/:input', (req, res)=> {
  let inputDate = req.params.input;
  if(!(inputDate.includes(',') || inputDate.includes('-'))) {
    inputDate = parseInt(inputDate);
  };
  
  let response = {
    'unix': '',
    'utc': ''
  };
  
  if(isNaN(inputDate)) {
    response.unix = Date.parse(inputDate);
    response.utc = (new Date(inputDate)).toUTCString();
  } else {
    response.unix = inputDate;
    response.utc = (new Date(inputDate)).toUTCString();
  }
  
  if(isNaN(response.unix)) {
    res.se
  }
  res.json(response);
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
