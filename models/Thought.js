// model for Thought
// must also import for Reaction model
// creating the schema for the Thought model
const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
         // Must be between 1 and 280 characters
            maxLength: 280,
            minLength: 1
        },
        createdAt: {
            type: Date,
            // Set default value to the current timestamp --> then use getter method to format the timestamp on query
            default: Date.now
        },
        username: { // the user that created this thought 
            type: String,
            required: true
        },
        reactions: [Reaction] // like replies  --> array of nested documents created with the reactionSchema (models/Reaction.js)
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Schema settings --> create virtual reactionCount that retrieves the length of the thoughts reaction arary field on query

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })

    const Thought = model('thought', thoughtSchema);


    module.exports = Thought;
