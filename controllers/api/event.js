const event=require('../../models/event');

exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.json({
            message: "Events can not be empty"
        });
    }
    // Create a Product
    const Event = new event({
        name:req.body.name,
        description:req.body.description,
        status:req.body.status
    });

    // Save Product in the database
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
