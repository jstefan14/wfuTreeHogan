var express = require('express');
var tree = require('../models/tree');
var species = require('../models/species');
var async = require('async');
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
  var query = {};
  var search_attribute = req.body.search_attribute;
  query[search_attribute] = new RegExp(req.body.search_key, "i");

  async.parallel({
  tree: function(callback) {
    // tree.findById(req.params.id)
    tree.aggregate([
      // simulating a natural join query
      { $lookup:
         {
           from: 'species',
           localField: 'common_name',
           foreignField: 'common_name',
           as: 'species'
         }
      }
      ,
      // simulating a where query
      { $match: query }
    ])
    .exec(callback);
  },
  },
  function(err, list_trees) {
    if (err) {return next(err);}
    // Successful, so render.
		list_trees = JSON.stringify(list_trees);
		list_trees = JSON.parse(list_trees);
		res.render('home', {title: "Wake Forest Tree Map", tree_list: list_trees.tree});
  });
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
