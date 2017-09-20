var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("stocks/stocks.html", {title: "Stocks Lookup", activeLinkText2: "active"});
});

module.exports = router;
