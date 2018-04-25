var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SpeciesSchema = new Schema(
  {
    common_name: {type: String, required: true},
    scientific_name: {type: String, required: true},
    family: {type: String},
    order: {type: String},
    type: {type: String},
  }
);

// Virtual for author's full name
SpeciesSchema
.virtual('name')
.get(function () {
  return this.scientific_name + " (" + this.common_name + ")";
});

// Virtual for author's URL
SpeciesSchema
.virtual('url')
.get(function () {
  return '/data/species/' + this._id;
});

//Export model
module.exports = mongoose.model('species', SpeciesSchema);
