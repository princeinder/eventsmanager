module.exports = (db,crypto,jwt,constant) => {
var userSchema = db.mongoose.Schema({  
    firstname:String,
    lastname:String,
    email:String,
    hash : String, 
    salt : String, 
    dob:Date,
    status:{type:Boolean,default:true},
}, {
    timestamps: true
});

userSchema.methods.setPassword = function(password) { 
       this.salt = crypto.randomBytes(16).toString('hex'); 
       this.hash = crypto.pbkdf2Sync(password, this.salt,  
       1000, 64, 'sha512').toString('hex'); 
       }; 

userSchema.methods.validPassword = function(password) { 
    var hash = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.hash === hash; 
};

userSchema.methods.getToken = function(user) { 
    var token = jwt.sign(user.toJSON(), constant.secret);
    return token; 
}; 


module.exports = db.mongoose.model('User', userSchema);

}