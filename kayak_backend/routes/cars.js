var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.get('/searchcars', function(req, res, next) {
  kafka.make_request('car_search',{"Node":"Node Message"}, function(err,result){
    res.status(201).json(result);
  });
});

module.exports = router;
