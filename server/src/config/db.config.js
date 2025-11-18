import mongoose from "mongoose";
import { MONGO_CONFIG } from "./config.js";

export const connectDB = async()=>{
    mongoose
    .connect(MONGO_CONFIG.uri,{
        dbName: MONGO_CONFIG.db_name,
        autoCreate: true
    })
    .then(()=>{
        console.log("Database connected successfully")
    }).catch((error)=>{
        console.log(error)
    })
}