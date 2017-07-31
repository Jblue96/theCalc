//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var solution = require('./calculate');
var superAnswer = '';

// GLOBALS

var port = 3001;

//USES
//Too Use multiple Static assets dirs, call express.static middleware
//function multiple times
app.use(express.static('public')); //dir Pub available
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


//spin up server
var server = app.listen( port, function(){
  console.log( 'server up on:', port );
});

// base URL
app.get('/', function(req, res) {
  console.log( 'base index page' );

  //sendFile 	Send a file as an octet stream.
  res.sendFile(path.resolve( 'public/index.html'));

 });

   //invokes the callback function fn(err) when the transfer
   // is complete or when an error occurs.
  app.post('/calcdat', function(req, res) {
    console.log('in calcdat.html POST', req.body);
    //	Set the response status code and send its
    // string representation as the response body.

  setTimeout(function(){
  superAnswer = solution(req.body.x,req.body.y,req.body.type);
  console.log(superAnswer);
  res.sendStatus(200);
}, port);
});

  //clientS get request
app.get('/solution', function (req, res){
  console.log ('/solution hit');
//solution send to superAnswer
  var responseObj = ({
    totalSum: superAnswer
  });
  res.send(responseObj); //responseObj to resutls
  console.log(responseObj);
});

                // //dont really need below
                //   app.get( '/nums', function( req, res ) {

module.exports = server;
