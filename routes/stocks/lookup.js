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
            
            console.log(Object.keys(rawReturned["Technical Analysis: SMA"]).length);
            console.log("==" + i);
            
            if (i == Object.keys(rawReturned["Technical Analysis: SMA"]).length - 1) {
                console.log("hey");
                res.render("stocks/lookup.html", {title:"Lookup", ticker: ticker, results: results});
             }
        
        }
      
}
    
module.exports = {
    
   
    lookup: function(req, res) {

        var ticker = req.params.ticker;

    request('https://www.alphavantage.co/query?function=SMA&symbol=' + ticker + '&interval=daily&time_period=10&series_type=close&apikey=365B4T6IUY7YO4D7&outputsize=compact', function (error, response, body) {
        var rawReturned = JSON.parse(body);
        parseJson(rawReturned, res, ticker);
    });
        
        
        results = [];
    }
};