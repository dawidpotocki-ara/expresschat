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

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/app', function(req, res, next) {
  res.render('app');
});

module.exports = router;
