import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.config.js"



dotenv.config()
const PORT = process.env.PORT

const app = express()

//connecting db
connectDB()




app.listen(8000,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})