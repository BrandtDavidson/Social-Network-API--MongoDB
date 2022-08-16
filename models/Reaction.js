// model for Reaction
// creating Schema for the Reaction model

const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            // Use mongoose's ObjectId data type
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), // Default value is set to a new ObjectId
        },
        responseBody: {
            type: String,
            required: true,
            maxLength: 280 // 280 Character maximum
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Data,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true, // not setting a virtual here --> importing for other model use
        },
        id: false,
    }
);

module.exports = reactionSchema;