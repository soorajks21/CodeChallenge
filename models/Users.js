const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tone: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
