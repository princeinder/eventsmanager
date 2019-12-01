const user=require('../../models/user');


exports.create = (req, res) => {
    console.log(req.body)  
    if(!req.body.firstname && !req.body.lastname && !req.body.email && !req.body.password  ) {
      res.json({
            success: false,
			code:201,
            message: "Users can not be empty"
        });
    }
    else{
    const User = new user({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        dob:req.body.dob,
    });
    user.findOne({email:req.body.email}).then(chk=>{
if(chk){
    res.json({
        success: false,
        code:201,
        message: "Email exists already"
    });
}
else{
    
    User.setPassword(req.body.password)
    User.save()
    .then(data => {
        res.json({
			success: true,
			code:200,
			message:"The user registered successfully",
			data:data});
    }).catch(err => {
        res.json({
			success: false,
			code:500,
            message: err.message || "Something wrong while creating the user."
        });
    });
}
});
    
};}


exports.login = function(req, res) {
	user.findOne({
		email: req.body.email
	  }, function(err, user) {
		if (err) throw err;
		if (!user) {
		  res.send({code:201,success: false, message: 'Authentication failed. Wrong username or password.'});
		} else {
			
			if (user.validPassword(req.body.password)) {
			  // if user is found and password is right create a token
			  var token =user.getToken(user);
			  // return the information including token as JSON
			  res.json({code:200,success: true, message: 'user logged in successfully',data:user,token:token});
			} else {
			  res.send({code:201,success: false, message: 'Authentication failed. Wrong username or password.'});
			}
		}
	  });

	
}


exports.get = (req,res) => {
    event.find()
    .then(data => {
        res.json({
			success: true,
			code:200,
			message:"The events list",
			data:data});
    }).catch(err => {
        res.json({
			success: false,
			code:500,
            message: err.message || "Something wrong while getting the event."
        });
    });
};



 