var tree = require('../models/tree');
var async = require('async');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// exports.index = function(req, res) {
//     res.send('NOT IMPLEMENTED: Site Home Page');
// };

// Display list of all trees.
exports.tree_list = function(req, res) {
  tree.find({}, 'tree_label longitude latitude')
  .populate()
  .exec(function (err, list_trees) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('tree_list', { title: 'Tree List', tree_list: list_trees });
  });
};

// Display detail page for a specific tree.
exports.tree_detail = function(req, res, next) {
  async.parallel({
    tree: function(callback) {
      tree.findById(req.params.id)
          .exec(callback);
    },
    },
    function(err, results) {
      if (err) {return next(err);}
      if (results.tree==null) { // No results.
          var err = new Error('Tree not found');
          err.status = 404;
          return next(err);
      }
        // Successful, so render.
      res.render('treeDetail', { title: 'Tree Detail',
                                 tree_label: results.tree.tree_label,
                                 common_name: results.tree.common_name,
                                 DBH: results.tree.DBH,
                                 height: results.tree.height} );
    });
};

exports.tree_info = function(req, res, next){
  console.log(req.params.id);
  async.parallel({
    tree: function(callback) {
      tree.findById(req.params.id)
          .exec(callback);
    },
    },
    function(err, results) {
      if (err) {return next(err);}
      if (results.tree==null) { // No results.
          var err = new Error('Tree not found');
          err.status = 404;
          return next(err);
      }
        // Successful, so render.
      res.send("<h2>" + results.tree.common_name + "<br> </h2>");
    });
}

// Display tree create form on GET.
exports.tree_create_get = function(req, res) {
  res.render(
    'addTree',
    { title: 'Add Tree' }
  );
};

// Handle tree create on POST.
exports.tree_create_post =   [
    // Validate that the name, label, longitude, latitude and collector field is not empty.
    body('common_name', 'Tree name required').isLength({ min: 1 }).trim(),
    body('tree_label', 'Tree Label required').isLength({ min: 1 }).trim(),
    body('longitude', 'Longitude required').isLength({ min: 1 }).trim(),
    body('latitude', 'Latitude required').isLength({ min: 1 }).trim(),
    body('collector', 'Collector required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('common_name').trim().escape(),
    sanitizeBody('tree_label').trim().escape(),
    sanitizeBody('longitude').trim().escape(),
    sanitizeBody('latitude').trim().escape(),
    sanitizeBody('collector').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var new_tree = new tree(
          {   tree_label: req.body.tree_label,
              longitude: req.body.longitude,
              latitude: req.body.latitude,
              common_name: req.body.common_name,
              date_collected: req.body.date_collected,
              height: req.body.height,
              DBH: req.body.DBH,
              "Branch 1 (cm)": req.body.Branch_1,
              "Branch 2 (cm)": req.body.Branch_2,
              "Branch 3 (cm)": req.body.Branch_3,
              "Branch 4 (cm)": req.body.Branch_4,
              first: req.body.first,
              collector: req.body.collector,
              datum: req.body.datum
            }
        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            console.log(errors.array());
            res.render('addTree', { title: 'Add Tree', errors: errors.array()});
        return;
        }
        else {
            // Data from form is valid.
            // Check if Genre with same name already exists.
            tree.findOne({ 'tree_label': req.body.tree_label })
            .exec( function(err, found_tree) {
                 if (err) { return next(err); }

                 if (found_tree) {
                     // Genre exists, redirect to its detail page.
                     res.redirect(found_tree.url);
                 }
                 else {

                     new_tree.save(function (err) {
                       if (err) { return next(err); }
                       // Genre saved. Redirect to genre detail page.
                       res.redirect(new_tree.url);
                     });

                 }

             });
        }
    }
];
  // let test = new tree({
  //   tree_label: "test_tree",
  //   longitude: "0",
  //   latitude: "0",
  //   common_name: "a random tree",
  //   date_collected: "pretty much just now",
  //   height: "1",
  //   DBH: "1",
  //   first: "1",
  //   collector: "Alex",
  //   datum: "Alex"
  // });
  // console.log(test);
  // test.save();

// Display tree delete form on GET.
exports.tree_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: tree delete GET');
};

// Handle tree delete on POST.
exports.tree_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: tree delete POST');
};

// Display tree update form on GET.
exports.tree_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: tree update GET');
};

// Handle tree update on POST.
exports.tree_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: tree update POST');
};
