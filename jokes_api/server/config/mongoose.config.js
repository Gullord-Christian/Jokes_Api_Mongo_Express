 // Mongoose config
const mongoose = require('mongoose')

 // using mongoose to connect to mongoDB with the method .connect
 // this will create the database as well.. Make sure to change name
mongoose.connect('mongodb://localhost/jokes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));