var express = require('express');
var router = express.Router();
var mc = require('mongodb').MongoClient;

var connectToDBs = function(callback, args) {
  mc.connect('mongodb://localhost:27777/tennis-db', function(err, db) {
    if (err) {
        throw err;
    }
    var tennisCollection = db.collection('tennis-col');

    callback(tennisCollection, args);
  });
}

var index = function(req, res) {
  var args = {};
  args.req = req;
  args.res = res;
  connectToDBs(handleData, args);
  //res.render('tennis', { title: 'Express' });
};

var handleData = function(coll, args) {
  fields = {
    "OBJECTID":"ID",
    "ADDRESS":"Address",
    "PARKNAME":"Park Name",
    "COURT_TYPE":"Court Type",
    "OUTDOOR_COURT":"# Outdoor Courts",
    "INDOOR_COURT":"# Indoor Courts",
    "CLUB":"Club",
    "LIGHTS":"Lights",
    "CLUBHOUSE":"Clubhouse",
    "BENCHES":"Benches",
    "FENCE":"Fence",
    "PRACTICE_COURT":"Practice Court",
    "BACKWALL":"Backwall",
  };
  coll.find().toArray(function(err, docs) {
    if (err) return;
    args.res.render('tennis', {list: docs , title: "", fields: fields});

  });
}

router.get('/', index);

module.exports = router;
