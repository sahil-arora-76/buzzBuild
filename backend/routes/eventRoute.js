import express from "express"
import { addEvent, listEvent, removeEvent } from "../controllers/eventController.js"
import multer from "multer"

const eventRouter = express.Router();

//image storage engine




eventRouter.post("/add",  addEvent)
eventRouter.get("/list", listEvent)
eventRouter.post("/delete", removeEvent)



export default eventRouter;