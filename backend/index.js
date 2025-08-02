import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

let port = process.env.PORT || 6000

let app = express();

//middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);


app.listen(port, ()=>{
    console.log("Hello From Server");
    connectDb();
})

