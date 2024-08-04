import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import eventRouter from './routes/eventRoute.js' 
import userRouter  from './routes/userroute.js'
import { addEvent, listEvent } from "./controllers/eventController.js"
import { loginUser, registerUser } from "./controllers/usercontroller.js"

//app config
const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();


//api endpoint
app.post('/api/user/login', loginUser);
app.post('/api/user/register', registerUser);
app.use("/api/event",eventRouter)
app.post('/user/add', addEvent);
app.get('/user/list', listEvent);


app.use("/images",express.static('uploads'))


app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})