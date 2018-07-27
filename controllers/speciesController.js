var species = require('../models/species');
var user = require('../models/user');
var user_group = require('../models/user_group');
var mongoose = require('mongoose');
var async = require('async');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all speciess.
exports.species_list = function(req, res, next) {
  species.find({})
  .exec(function(err, list_species){
    if (err) { return next(err); }
      //Successful, so render
  	list_species = JSON.stringify(list_species);
    res.send(list_species);
  });
};

// Display detail page for a specific species.
exports.species_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: species detail: ' + req.params.id);
};

// Display species create form on GET.
exports.species_create_get = function(req, res) {
  res.render(
    'addSpecies',
    { title: 'Add Species' }
  );
};

// Handle species create on POST.
exports.species_create_post = [
    // Validate that the name, label, longitude, latitude and collector field is not empty.
    body('common_name', 'Tree name required').isLength({ min: 1 }).trim(),
    body('scientific_name', 'Scientific name required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('common_name').trim().escape(),
    sanitizeBody('scientific_name').trim().escape(),
    sanitizeBody('family').trim().escape(),
    sanitizeBody('order').trim().escape(),
    sanitizeBody('type').trim().escape(),


    // Process request after validation and sanitization.
    (req, res, next) => {
      user.findOne({"user_id" : req.body.email})
      .populate('user_group')
      .exec(function (err, result) {
        if (err) { return next(err); }
        //Successful, so render
        // console.log(req.body.email);
        if(!result || !result.user_group.privilege.includes("add")){
          res.render("noAccess");
        }
        else{
          // Extract the validation errors from a request.
          const errors = validationResult(req);

          // Create a genre object with escaped and trimmed data.
          var new_species = new species(
            {   common_name: req.body.common_name,
                scientific_name: req.body.scientific_name,
                family: req.body.family,
                order: req.body.order,
                type: req.body.type
              }
          );


          if (!errors.isEmpty()) {
              // There are errors. Render the form again with sanitized values/error messages.
              console.log(errors.array());
              res.render('addSpecies', { title: 'Add Species', errors: errors.array()});
              return;
          }
          else {
              // Data from form is valid.
              // Check if tree with same name already exists.
              species.findOne({ 'common_name': req.body.common_name })
              .exec( function(err, found_species) {
                   if (err) { return next(err); }

                   if (found_species) {
                       // Genre exists, redirect to its detail page.
                       res.redirect("/data/tree/create");
                   }
                   else {
                       new_species.save(function (err) {
                         if (err) { return next(err); }
                         // Genre saved. Redirect to genre detail page.
                         res.redirect("/data/tree/create");
                       });
                   }
               });
          }
        }
      });
    }
];

// Display species delete form on GET.
exports.species_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: species delete GET');
};

// Handle species delete on POST.
exports.species_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: species delete POST');
};

// Display species update form on GET.
exports.species_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: species update GET');
};

// Handle species update on POST.
exports.species_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: species update POST');
};
