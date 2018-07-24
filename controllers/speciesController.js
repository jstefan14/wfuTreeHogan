var species = require('../models/species');

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
exports.species_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: species create POST');
};

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
