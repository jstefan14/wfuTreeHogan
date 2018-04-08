//The landing points

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	//when get(/), do function()
	//Then the server gives back the information to the web browser
	res.render('home',
		{title: "Wake Forest Tree Map"});
});

module.exports = router;
