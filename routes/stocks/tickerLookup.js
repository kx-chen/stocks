var express = require('express');
var router = express.Router();

router.get('/ticker', function(req, res) {
    
    console.log("tickerLookup");
    res.render('stocks/stocks.html', {title: "test"});
});

module.exports = router;