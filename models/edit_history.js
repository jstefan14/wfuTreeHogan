var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EditHistorySchema = new Schema(
  {
    edit_number: {type: Number, required: true},
    tree_label: {type: String, required: true},
    edit_field: {type: String, required: true},
    old_value: {type: String, required: true},
    new_value: {type: String, required: true},
    edit_user: {type: String, required: true},
    edit_date: {type: String, required: true, default: (Date.now).toString()},
  }
);

// Virtual for author's URL
EditHistorySchema
.virtual('url')
.get(function () {
  return '/data/EditHistory/' + this._id;
});

//Export model
module.exports = mongoose.model('EditHistory', EditHistorySchema);
