// Controller for /stocks

var express = require('express');
var router = express.Router();
var tickerLookup = require('./tickerLookup');

/* GET request for stocks listing. */
router.get('/', function(req, res, next) {
  res.render("stocks/stocks.html", {title: "Stocks Lookup"});
});

router.get('/:ticker', tickerLookup.ticker);


module.exports = router;
