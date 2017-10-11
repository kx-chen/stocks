// Controller for /stocks


// https://www.quandl.com/api/v3/datasets/WIKI/goog/data.json?api_key=VLTxWTE1vKYjmxBWTiF3&rows=100
var express = require('express');
var router = express.Router();

var lookup = require('./lookup');

/* GET request for stocks listing. */
router.get('/', function(req, res, next) {
  res.render("stocks/stocks.html", {title: "Stocks Lookup"});
});

router.get('/:ticker', lookup.lookup);


module.exports = router;
