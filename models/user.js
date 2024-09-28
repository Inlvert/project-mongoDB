const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9]{1,32}@[a-zA-Z]{2,8}\.[a-zA-Z]{2,8}$/, 'Enter valid email']
  },
  password: {
    type: String,
    required: true
  },
  isOnline: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

const User = model("User", userSchema);

module.exports = User;
