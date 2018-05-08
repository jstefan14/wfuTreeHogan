var user = require('../models/user');
var mongoose = require('mongoose');

// Display list of all users.
exports.user_list = function(req, res) {
    res.send('NOT IMPLEMENTED: user list');
};

// Display detail page for a specific user.
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: user detail: ' + req.params.id);
};

// Display user create form on GET.
exports.user_create_get = function(req, res) {
  // let test = new user(
  //   {
  //     user_id: "lius214@wfu.edu",
  //     first_name: "Alex",
  //     last_name: "Liu",
  //     user_group: mongoose.Types.ObjectId("5af1f72419494510a4352250")
  //   }
  // );
  // test.save();
};

// Handle user create on POST.
exports.user_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: user create POST');
};

// Display user delete form on GET.
exports.user_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete GET');
};

// Handle user delete on POST.
exports.user_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete POST');
};

// Display user update form on GET.
exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: user update GET');
};

// Handle user update on POST.
exports.user_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: user update POST');
};
