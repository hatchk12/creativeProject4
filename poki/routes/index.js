var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/libz', function(req, res,next) {
  console.log("In libz");
  var madlibz = "http://madlibz.herokuapp.com/api/random";
  console.log(madlibz);
  request(madlibz).pipe(res);
});


module.exports = router;
