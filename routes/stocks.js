// Stocks "controller"

var express = require('express');
var router = express.Router();

/* GET request for stocks listing. */
router.get('/', function(req, res, next) {
  res.render("stocks/stocks.html", {title: "Stocks Lookup"});
});

module.exports = router;
