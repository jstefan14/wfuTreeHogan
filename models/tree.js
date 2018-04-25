var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TreeSchema = new Schema(
  {
    tree_label: {type: String, required: true},
    longitude: {type: String, required: true},
    latitude: {type: String, required: true},
    common_name: {type: String, required: true},
    date_collected: {type: String, default: (Date.now).toString()},
    height: {type: String},
    DBH: {type: String},
    first: {type: String},
    collector: {type: String, required: true},
    datum: {type: String}
  }
);

// Virtual for author's full name
TreeSchema
.virtual('common')
.get(function () {
  return this.common_name;
});

// Virtual for author's URL
TreeSchema
.virtual('url')
.get(function () {
  return '/data/tree/' + this._id;
});

//Export model
module.exports = mongoose.model('tree', TreeSchema);
