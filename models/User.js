// model for User
// creating the Schema for the User Model
// destructure Schema and model from mongoose
const { Schema, mode } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            
        }
    }
)