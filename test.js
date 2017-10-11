// const request = require('request');


// request("https://www.quandl.com/api/v3/datasets/WIKI/goog/data.json?api_key=VLTxWTE1vKYjmxBWTiF3&rows=100", function(error, response, body){
    
//     body = JSON.parse(body);
//     let results = body["dataset_data"].data;

//     parseResults(results)
// });

// function parseResults(results) {
//     let parsedData = [];
//     results.forEach(function(value, index){
//         value = value.slice(0,5);
//         parsedData.push(value);
//     });

//     console.log(parsedData);
//     return parsedData
// }
