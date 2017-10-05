var request = require('request');
var results = {};
module.exports = {
    
    lookup: function(req, res) {
        console.log("death is inevitable");
        var ticker = req.params.ticker;
        

    request('https://www.alphavantage.co/query?function=SMA&symbol=' + ticker + '&interval=daily&time_period=10&series_type=open&apikey=365B4T6IUY7YO4D7', function (error, response, body) {
    var rawReturned = JSON.parse(body);
    var result = rawReturned["Technical Analysis: SMA"]["2017-10-04"].SMA;
      results.body = JSON.stringify(result);
      console.log(results.body);

    });
    
        res.render("stocks/lookup.html", {title:"Lookup", ticker: ticker, results: results.body });
    }
};