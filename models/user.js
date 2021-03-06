var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    user_id: {type: String, key: true, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    user_group: {type: Schema.ObjectId, ref: 'UserGroup', required: true},
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
  return '/data/user/' + this._id;
});

//Export model
module.exports = mongoose.model('user', UserSchema);
