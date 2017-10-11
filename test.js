const request = require('request');


request("https://www.quandl.com/api/v3/datasets/WIKI/goog/data.json?api_key=VLTxWTE1vKYjmxBWTiF3&rows=100", function(error, response, body){
    
    body = JSON.parse(body);

    let results = body["dataset_data"].data;

    loopThroughAndParseResults(results)
});

function loopThroughAndParseResults(results) {
    console.log(results[1]);

    let dates = [];
    results.forEach(function(value, index){
        value = value.slice(0,5);
        dates.push(value);
    });

    console.log(dates);

    return dates
}
// testArray = testArray.slice(0, 2);

// console.log(testArray);