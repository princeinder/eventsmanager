module.exports = (db) => {
var eventSchema = db.mongoose.Schema({  
    name: String,
    summary:String,
    url:String,
    start:Date,
    end:Date,
    changed:Date,
    published:Date,
    status:{type:Boolean,default:false},
    location:String,
    price:String
}, {
    timestamps: true
});
 db.mongoose.model('Event', eventSchema);
}