var request = require('request');
// var results = [];

// TODO: put this function elsewhere
// function convertToInt(string) {
//     return parseFloat(string)
// }
function parseJson(rawReturned, req, res, ticker) {
    
    var keys = Object.keys(rawReturned["Time Series (Daily)"]);
    req.results = [];
         for (var i = 0; i < Object.keys(rawReturned["Time Series (Daily)"]).length; i++){

            req.results.push(rawReturned["Time Series (Daily)"][keys[i]]["4. close"]);

            if (i == Object.keys(rawReturned["Time Series (Daily)"]).length - 1) {
                req.results = req.results.reverse();
                res.render("stocks/lookup.html", {title:"Lookup", ticker: ticker, results: req.results});
             }
        
        }
      
}

function lookUpDaily(ticker, req, res) {
    
    // Shows daily results for past 100 days
    request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + ticker + '&apikey=365B4T6IUY7YO4D7&outputsize=compact', function (error, response, body) {
        var rawReturned = JSON.parse(body);
        
        if (rawReturned["Error Message"]) {
            res.render("public/error.html", {message: "Could not find specified stock. Try again."});
            
        } else {
            parseJson(rawReturned, req, res, ticker);
        }
        
        
    });
        
}
    
module.exports = {
    
   
    lookup: function(req, res) {

        var ticker = req.params.ticker;
        lookUpDaily(ticker, req, res);
        
        // Clear the results array for the next request
        results = [];
    }
};