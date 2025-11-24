import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.config.js"

import authRoutes from "./routes/auth.routes.js"


dotenv.config()
const PORT = process.env.PORT

const app = express()

//connecting db
connectDB()

//middleware
app.use(express.json())

//using routes
app.use('/api/auth',authRoutes)



//error handling middlerweare
app.use((error,req,res,next)=>{
    const message = error?.message || "Something went wrong";
    res.status(500).json({
        message:message,
        status:'error',
        success:false,
        data: null
    })
})

app.listen(8000,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})