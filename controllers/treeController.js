var tree = require('../models/tree');

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
exports.tree_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: tree detail: ' + req.params.id);
};

// Display tree create form on GET.
exports.tree_create_get = function(req, res) {
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
};

// Handle tree create on POST.
exports.tree_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: tree create POST');
};

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
