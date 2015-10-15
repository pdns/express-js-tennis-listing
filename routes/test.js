
var express = require('express');
var router = express.Router();

//router.get('/thing', function(req, res) {
//  res.render('index', { title: 'Thing' });
//});

var thing = function(req, res) {
  res.render('index', {title: 'Thing'});
};

router.get('/thing', thing);

module.exports = router;
