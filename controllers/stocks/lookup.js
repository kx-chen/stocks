var request = require('request');

function lookUp(ticker, req, res) {
    request("https://www.quandl.com/api/v3/datasets/WIKI/" + ticker + "/data.json?api_key=VLTxWTE1vKYjmxBWTiF3&rows=100", function(error, response, body){
        
        body = JSON.parse(body);
        var results = body["dataset_data"].data;

        var final = parseResults(results);

        var final = results;

        final = '["' + final.join('", "') + '"]';
        console.log(final);
        res.render("stocks/lookup.html", {"ticker": ticker, "results": final, "title": "Lookup"});
    });
    
}

function parseResults(results) {
    let parsedData = [];
    results.forEach(function(value, index){
        value = value.slice(0,5);
        parsedData.push(value);
    });

    // console.log(parsedData);
    return parsedData
}

    
module.exports = {
    
   
    lookup: function(req, res) {

        var ticker = req.params.ticker;
        // lookUp also ends the request-response cycle
        lookUp(ticker, req, res);
    }
};