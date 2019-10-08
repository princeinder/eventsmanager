var db=require('../config/db');
var eventSchema = db.mongoose.Schema({  
    name: String,
    description:String,
    url:String,
    start:Date,
    end:Date,
    changed:Date,
    published:Date,
    status:String,
    currency:String,
    online_event:Boolean,
    hide_start_date:Boolean,
    hide_end_date:Boolean
}, {
    timestamps: true
});

module.exports = db.mongoose.model('events', eventSchema);