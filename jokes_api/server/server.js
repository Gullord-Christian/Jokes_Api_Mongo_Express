// importing express by declaring function
const express = require("express");
// calls on the function express (does not need to be called app)
const app = express();

// this is how we connect to the config file
require('./config/mongoose.config')

// express configuration - allows POST -- needs to be above all routes and methods
app.use( express.json() );
// recognizes json
app.use( express.urlencoded({ extended: true }) );


// getting the routes
const Routes = require('./routes/joke.routes')
Routes(app)

// telling the server that we are running on a certain port, this will go at the bottom of the app
app.listen(8000, () => console.log("Listening to port :8000"))