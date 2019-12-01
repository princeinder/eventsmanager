const event=require('../../models/event');

exports.create = (req, res) => {
      if(!req.body) {
        return res.json({
            success: false,
			code:201,
            message: "Events can not be empty"
        });
    }
    const Event = new event({
        name:req.body.name,
        description:req.body.description,
        status:req.body.status
    });

    Event.save()
    .then(data => {
        res.json({
			success: true,
			code:200,
			message:"The event added successfully",
			data:data});
    }).catch(err => {
        res.json({
			success: false,
			code:500,
            message: err.message || "Something wrong while creating the event."
        });
    });
};

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



 