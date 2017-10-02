module.exports = {
    
    ticker: function(req, res) {
        console.log("death is inevitable");
        var ticker = req.params.ticker;
        res.render("stocks/stocks.html", {title:"Lookup", ticker: ticker});
    }
};