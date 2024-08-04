import usermodel from "../models/usermodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { KEY } from "../config/key.js";


// login user
const loginUser = async (req,res) => {
const {email,password}=req.body;
try {
    const user = await usermodel.findOne({email});
   
    if (!user) {
        return res.status(404).json({success:false,message:"User Doesn't exist"})
    }

 const isMatch = await bcrypt.compare(password,user.password);

 if (!isMatch) {
    return res.status(404).json({success:false,message:"Invalid credentials"})   
 }

 const token = createToken(user._id);
 res.json({success:true,token, user})

} catch (error) {
   console.log (error);
   res.jason({success:false,message:"Error"})
}
}

const createToken = (id) => {
    return jwt.sign({id}, KEY)
}

// register user 
const registerUser = async (req,res) => {
 const {name,password,email} = req.body;
 try {
    // checking is user already exists
    const exists = await usermodel.findOne({email});
    if (exists){
        return res.status(404).json({success:false,message:"User already exists"})
    }

    // validating email format & strong password
  if (!validator.isEmail(email)){
    return res.status(404).json({success:false,message:"Please enter a valid email"})
  }

  if(password.length<3){
    return res.status(404).json({success:false,message :"Please enter strong password"}) 
  }

  // hashing user password 
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password,salt);

  const newUser = new usermodel({
    name:name,
    email:email,
    password:hashedPassword
 })

const user = await newUser.save()
const token = createToken(user._id)
res.status(200).json({success:true,token, user});
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
 }
}

export {loginUser,registerUser}

