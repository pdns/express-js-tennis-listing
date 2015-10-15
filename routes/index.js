var express = require('express');
var router = express.Router();

var index = function(req, res) {
  //res.render('index', { title: 'Express' });
  res.redirect('/tennis');
};

router.get('/', index);

module.exports = router;
