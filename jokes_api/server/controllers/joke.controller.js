// connecting to joke model
const Joke = require("./../models/joke.model")

module.exports.testApi = (req, res) => {
    res.json({status: "ok"})
}

// Get all
module.exports.allJokes = (req, res) => {
    Joke.find() // We are expecting a response, need to do something with it
    .then(jokes => res.json(jokes)) // param inside .then as whatever fits
    .catch(err => res.json(err)) //
}

// Get One
module.exports.oneJoke = (req, res) => {
    // get joke by id. req.params.id comes   from the routes '/:id'
    // _id comes from the database, as that is how mongo stores ids.
        const idFromParams = req.params.id // destructuring - not necessary
        Joke.findOne({_id: idFromParams})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err))
}

// Create
module.exports.addJoke = (req, res) => {
const newJoke = req.body  // destructuring the req.body as newjoke
Joke.create(newJoke)      // using method 'create' to create new joke
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

// Update -- getOne + create
module.exports.updateJoke = (req, res) => {
const idFromParams = req.params.id  // info comes from req.params.id
const updatedValue = req.body  
Joke.findOneAndUpdate(          // update: criteria, updated value, options
    {_id : idFromParams},
    updatedValue,                // grabbing the value, from req.body
    {new: true, runValidators: true} //ensure we get the updated item
)
    .then(updatedJoke => res.json(updatedJoke))
    .catch(err => res.json(err))
}

// Delete
module.exports.deleteJoke = (req, res) => {
Joke.deleteOne({_id : req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}
