var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserGroupSchema = new Schema(
  {
    group_name: {type: String, required: true},
    privilege: {type: Array, required: true}
  }
);

// Virtual for author's full name
UserGroupSchema
.virtual('name')
.get(function () {
  return this.group_name;
});

// Virtual for author's URL
UserGroupSchema
.virtual('url')
.get(function () {
  return '/data/UserGroup/' + this._id;
});

//Export model
module.exports = mongoose.model('UserGroup', UserGroupSchema);
