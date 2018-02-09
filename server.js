const express = require('express'); // Import express
const app = express(); // create app
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const storage = {
  cnt: 0
};

app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.use('/static', express.static('static'));

app.get('/demo', function(req, res){
  storage.cnt++;
  res.render('demo', storage);
});

app.delete('/demo', function(req, res){
  storage.cnt = 0;
  res.json({
    message: "counter has been reset"
  });
});

app.listen(8080, function(){ // Set app to listen for requests on port 3000
    console.log('Listening on port 8080!'); // Output message to indicate server is listening
});
