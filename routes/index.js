//The landing points
var tree = require('../models/tree');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	//when get(/), do function()
	//Then the server gives back the information to the web browser

	tree.find({}, 'tree_label longitude latitude')
	.populate()
  .exec(function (err, list_trees) {
    if (err) { return next(err); }
    //Successful, so render
		list_trees = JSON.stringify(list_trees);
		list_trees = JSON.parse(list_trees);
		res.render('home', {title: "Wake Forest Tree Map", tree_list: list_trees});
  });
});

module.exports = router;
