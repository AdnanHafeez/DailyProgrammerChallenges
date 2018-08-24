const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));

//set body-parser for processing GET route
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/data', function(req, res) {
  try {
        console.log("Get Request Recevied");
        GetAusPlaneData(function(planedata){
          console.log("Getting Data");
          res.send(planedata);
        });
      }
      catch(e) {
      res.send('[Error in GET request function]' + e + '/n');
  }
})

app.get('/', function(req, res){

  res.sendFile('D:/DailyProgrammer/nearstplane/html/index.html');
})

var server = app.listen(8080, () => {console.log("Server Working")});

function GetAusPlaneData(callback) {
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
        callback(info);
        //for(let values of info.states){
        //  if(values[2] === 'Australia') AusData.push(values);
        //}
        console.log("returning data");
        //callback(AusData);
      });
    });


}
