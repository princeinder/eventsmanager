module.exports = (db) => {
    var eventSchema = db.mongoose.Schema({  
    eventid:{type:db.mongoose.Schema.Types.ObjectId,ref:'Event'},
    userid:{type:db.mongoose.Schema.Types.ObjectId,ref:'User'},
    booked:Boolean,
    payment_mode:String,
    payment_status:Boolean
    }, {
        timestamps: true
    });
     db.mongoose.model('Booking', eventSchema);
    }