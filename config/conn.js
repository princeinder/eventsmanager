var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var url= 'mongodb://localhost:27017/eventsmanagment';

mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

module.exports = {mongoose,bcrypt};
