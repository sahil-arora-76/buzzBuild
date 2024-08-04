import eventModel from "../models/EventModel.js";
import fs from 'fs'


//add event item


const addEvent = async(req,res)=>{

    const {name, venue, date, description, type, imageLink, bookingLink, userId} = req.body; 


    const event = new eventModel({
        name,
        description, 
        venue, date, 
        type,
        imageLink, 
        bookingLink,
        userId: userId
    })

    try {
        await event.save();
        res.status(200).json({success:true, message:"Event added!"})

    } catch(error){
        console.log(error)
        res.status(500).json({success:false,message:"Ooops!Error"})
    }
}

//all event list
const listEvent = async (req,res)=>{
    try{
        const events = await eventModel.find({});
        res.json({success:true,data:events})
    }catch(error) {
        console.log(error);
        res.json({success:false,message:"Ooops!Error"})

    }

}

//remove event item
const removeEvent = async (req,res)=>{
    try{    
        const eventId = req.body.eventId;
        if (!eventId) return res.status(400).json({ message: 'Invalid event'});
        const event = await eventModel.findById(eventId);
        if (!event) return res.status(400).json({ message: 'Invalid event'});
        await eventModel.findByIdAndDelete(eventId);
        res.json({success:true,message:"Event removed!"})
    }catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error"})
    }
    
}



        


export {addEvent,listEvent,removeEvent}