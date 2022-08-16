// model for User
// creating the Schema for the User Model
// destructure Schema and model from mongoose
// No longer need to use ' new mongoose.Schema({}); after destructuring what we need
import { validateEmail } from "../utils/validation";
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // using regex to validate email
      validate: validateEmail,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    });

// Initializing model
const User = model('user', userSchema);

module.exports = User;