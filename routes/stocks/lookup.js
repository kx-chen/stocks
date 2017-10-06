var request = require('request');
var results = [];

// TODO: put this function elsewhere
// function convertToInt(string) {
//     return parseFloat(string)
// }
function parseJson(rawReturned, res, ticker) {
    var keys = Object.keys(rawReturned["Technical Analysis: SMA"]);
    
         for (var i = 0; i < Object.keys(rawReturned["Technical Analysis: SMA"]).length; i++){

            results.push(rawReturned["Technical Analysis: SMA"][keys[i]].SMA);
            
            if (i == Object.keys(rawReturned["Technical Analysis: SMA"]).length) {
                console.log(results)
                return results
             }
        
        }
      
}
    
module.exports = {
    
   
    lookup: function(req, res) {

        var ticker = req.params.ticker;

    request('https://www.alphavantage.co/query?function=SMA&symbol=' + ticker + '&interval=15min&time_period=10&series_type=close&apikey=365B4T6IUY7YO4D7&outputsize=compact', function (error, response, body) {
        var rawReturned = JSON.parse(body);
        parseJson(rawReturned, res, ticker);
        res.render("stocks/lookup.html", {title:"Lookup", ticker: ticker, results: results});
        
    });
    

    }
};