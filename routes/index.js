var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var jsonParser = bodyParser.json();
var unenParser = bodyParser.urlencoded();
var AWS = require('aws-sdk');
var translate = new AWS.Translate();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


////send form to be parsed
router.post('/sendit',jsonParser,function(req,res){
  var target = req.body.target;
  var text = req.body.text;
  
  var params = {
    SourceLanguageCode: 'auto', /* required */
    TargetLanguageCode: req.body.target, /* required */
    Text: req.body.text /* required */
  };

  translate.translateText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });

// Instantiates a client


//calls the translate.translate function and returns the results array

});

module.exports = router;
