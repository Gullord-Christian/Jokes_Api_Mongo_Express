// importing the controller
const JokeController = require('./../controllers/joke.controller')

// exporting the app and joke controller
module.exports = (app) => {
    app.get("/api/jokes", JokeController.allJokes )    // get all
    app.get("/api/jokes/:id", JokeController.oneJoke)  // get one
    app.get("/api/jokes/random", JokeController.oneJoke)  // get one
    app.post("/api/jokes/new", JokeController.addJoke )    // create
    app.put("/api/jokes/:id", JokeController.updateJoke )    // update
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke ) // delete
}
