import mongoose from "mongoose";


const eventSchema = new mongoose.Schema({
    name:{type:String, required:true},
    date:{type:String, required:true},
    description: {type: String, required: true}, 
    venue: {type: String, required: true}, 
    type: {type: String, required: true },
    bookingLink: {type: String, required: true},
    imageLink: { type: String, required: true},
    userId: {type: mongoose.Types.ObjectId, required: true, ref: 'user'}

})

const eventModel = mongoose.model("Event",eventSchema);

export default eventModel;