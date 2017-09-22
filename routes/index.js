var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.locals.activeLinkText1 = "active" 
  res.render('public/index.html', { title: 'Express'});
});

module.exports = router;
