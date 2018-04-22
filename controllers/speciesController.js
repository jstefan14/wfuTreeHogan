var species = require('../models/species');

// Display list of all speciess.
exports.species_list = function(req, res) {
    res.send('NOT IMPLEMENTED: species list');
};

// Display detail page for a specific species.
exports.species_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: species detail: ' + req.params.id);
};

// Display species create form on GET.
exports.species_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: species create GET');
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
