// Importing mongoose using the require statement
const mongoose = require('mongoose');

// this creates a new schema instance from the object constructor, this will define how each new document put into the collection will be formatted
const JokeSchema = new mongoose.Schema({
    setup: {
// we can add validations directly here when creating the documents
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Must be 10 characters."]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength: [3, "punchline must be at least 3 characters"]
    }
}, {timestamps: true})

// mongoose.model take the blueprint above and creates the database collection out of the model. We create a new 'joke' variable to export and set it's returned value of mongoose.model
module.exports = mongoose.model('Joke', JokeSchema)
