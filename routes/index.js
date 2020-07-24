var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/features', function(req, res, next) {
  res.render('features');
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome');
});

router.get('/app', function(req, res, next) {
  res.render('app');
});

module.exports = router;
