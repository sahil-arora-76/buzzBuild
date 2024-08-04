import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://niharikashekar14:kZskHbXSeLghchp6@cluster0.racb7co.mongodb.net/');
    console.log('db connected   ')

}
