const https = require('https');

https.get('https://opensky-network.org/api/states/all', (resp) => {
  let data = '';

  // A chunck of data has been received
  resp.on('data', (chunck) => {
    data += chunck;
  });

  // The whole response has been recived. Print out the result
  resp.on('end', () => {
    let info = JSON.parse(data);
     info = JSON.stringify(info);
    console.log(info[1]);
  });

});
