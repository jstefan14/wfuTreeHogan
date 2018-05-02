var express = require('express');
var tree = require('../models/tree');
var router = express.Router();
// Load the data model

//*************************************************//
// All of these routes are relative to /users      //
//*************************************************//

// GET to Add Character page
router.get('/addTree', addTree);

// SEARCH function
router.post('/search', search_tree);

// RESET function
router.post('/reset', reset_home_page);
//
// Functions responding to HTTP requests
//


function addTree(req, res, next) {
	// parameters for res.render(par1, par2)
	// par1 : a view in the views folder
	// par2 : data to be used when rendering the view
  res.render(
  	'addTree',
  	{ title: 'Add Tree' }
  	);
}


function search_tree(req, res, next) {
	tree.find({"common_name": new RegExp(req.body.search_key, "i")}, 'tree_label longitude latitude')
  .exec(function (err, list_trees) {
    if (err) { return next(err); }
    //Successful, so render
		list_trees = JSON.stringify(list_trees);
		list_trees = JSON.parse(list_trees);
		res.render('home', {title: "Wake Forest Tree Map", tree_list: list_trees});
  });
	// res.redirect('/');	// reload the page
}

function reset_home_page(req, res, next) {
  tree.find({}, 'tree_label longitude latitude')
  .populate()
  .exec(function (err, list_trees) {
    if (err) { return next(err); }
    //Successful, so render
  	list_trees = JSON.stringify(list_trees);
  	list_trees = JSON.parse(list_trees);
  	res.render('home', {title: "Wake Forest Tree Map", tree_list: list_trees});
  });
}

// Export the router, required in app.js
module.exports = router;
