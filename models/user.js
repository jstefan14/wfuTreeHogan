var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    user_id: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    user_group: {type: String},
  }
);

// Virtual for author's full name
UserSchema
.virtual('name')
.get(function () {
  return this.first_name + " " + this.last_name;
});

// Virtual for author's URL
UserSchema
.virtual('url')
.get(function () {
  return '/data/User/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);
