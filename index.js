import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import tpsRoute from "./routes/tp.js";
import tpsNoteRoute from "./routes/tpNote.js";
import testRoute from "./routes/test.js";
import coursRoute from "./routes/cours.js"
import abnmRoute from "./routes/abonnement.js"
import QuestionRoute from "./routes/question.js"
import uploadRoute from "./routes/upload.js"
import reservationRoute from "./routes/reservation.js"
import cookieParser from "cookie-parser";
import cors from 'cors'
import fileUpload from "express-fileupload";

const app = express()
dotenv.config()
app.use(fileUpload())
const connect =async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB")  
    } catch (error) {
        throw error
      }
};
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected!")
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/uploads",express.static("uploads"))

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/cours",coursRoute);
app.use("/api/tp",tpsRoute);
app.use("/api/tpNote",tpsNoteRoute);
app.use("/api/abnm",abnmRoute);
app.use("/api/question",QuestionRoute);
app.use("/api/test",testRoute);
app.use("/api/reservation",reservationRoute);
app.use("/api/upload",uploadRoute);




app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(8800,()=>{
    connect()
    console.log("connected to backend")
})
