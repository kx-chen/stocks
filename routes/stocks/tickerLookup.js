module.exports = {
    ticker: function(req, res) {
        console.log("death is inevitable");
        res.render("stocks/stocks.html", {title:"Lookup"});
    }
};