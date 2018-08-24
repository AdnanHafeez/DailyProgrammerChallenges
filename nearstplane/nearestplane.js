const https = require('http');
const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));

//set body-parser for processing POST route
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/data', function(req, res) {
  try {
        let data = GetAusPlaneData();
        console.log("Getting Data");
        res.send(data);
      }
      catch(e) {
      res.send('[Error in GET request function]' + e + '/n');
  }
})




http.createServer(function(req,res) {
  fs.readFile('./html/index.html',function (err,data) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

function GetAusPlaneData() {
  https.get('https://opensky-network.org/api/states/all', (resp) => {
    let data = '';

    // A chunck of data has been received
    resp.on('data', (chunck) => {
      data += chunck;
    });

    // The whole response has been recived. Print out the result
    resp.on('end', () => {

        let AusData = [];
        let info = JSON.parse(data);
        for(let values of info.states){
          if(values[2] === 'Australia') AusData.push(values);
        }
      });
    });

    return AusData;
}
