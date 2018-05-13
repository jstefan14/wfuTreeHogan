var user = require('../models/user');
var user_group = require('../models/user_group');
var mongoose = require('mongoose');
var async = require('async');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

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
  async.parallel({
        user_group: function(callback) {
            user_group.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        console.log(results.user_group);
        res.render('addUser', { title: 'Create User', user_group: results.user_group });
    });
};

// Handle user create on POST.
exports.user_create_post = [
    // Validate fields.
    body('email', 'ID must not be empty.').isLength({ min: 1 }).trim(),
    body('first_name', 'User first name must not be empty.').isLength({ min: 1 }).trim(),
    body('last_name', 'User last name must not be empty.').isLength({ min: 1 }).trim(),

    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),

    // Process request after validation and sanitization.

    (req, res, next) => {
      // Extract the validation errors from a request.
      const errors = validationResult(req);

      // Create a Book object with escaped and trimmed data.
      var new_user = new user(
        { user_id: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          user_group: req.body.user_group
         });
      console.log(new_user);

      if (!errors.isEmpty()) {
          // There are errors. Render form again with sanitized values/error messages.
          console.log(errors);
          // Get all authors and genres for form.
          async.parallel({
              user_group: function(callback) {
                  user_group.find(callback);
              },
          }, function(err, results) {
              if (err) { return next(err); }
              res.render('addUser', { title: 'Create User', user_group: results.user_group, errors: errors.array()});
          });
          return;
      }
      else {
          // Data from form is valid. Save book.
          new_user.save(function (err) {
              if (err) { return next(err); }
                 //successful - redirect to new book record.
                 res.redirect('/');
              });
      }
    }
];

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
