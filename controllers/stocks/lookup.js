var request = require('request');
var results = [];

// TODO: put this function elsewhere
// function convertToInt(string) {
//     return parseFloat(string)
// }
function parseJson(rawReturned, res, ticker) {
    
    var keys = Object.keys(rawReturned["Time Series (Daily)"]);
    
         for (var i = 0; i < Object.keys(rawReturned["Time Series (Daily)"]).length; i++){

            results.push(rawReturned["Time Series (Daily)"][keys[i]]["4. close"]);

            
            if (i == Object.keys(rawReturned["Time Series (Daily)"]).length - 1) {
                console.log("hey");
                res.render("stocks/lookup.html", {title:"Lookup", ticker: ticker, results: results});
             }
        
        }
      
}

function lookUpDaily(ticker, req, res) {
    request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + ticker + '&apikey=365B4T6IUY7YO4D7&outputsize=compact', function (error, response, body) {
        var rawReturned = JSON.parse(body);
        
        if (rawReturned["Error Message"]) {
            res.render("public/error.html", {message: "Could not find specified stock. Try again."});
            
        } else {
            parseJson(rawReturned, res, ticker);
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