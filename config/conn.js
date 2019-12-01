var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var url= 'mongodb+srv://event:CXqfk1sGLA39f0pX@cluster0-bqzhq.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

module.exports = {mongoose,bcrypt};
