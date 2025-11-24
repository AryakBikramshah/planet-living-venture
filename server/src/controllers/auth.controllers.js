import { USER_ROLES } from "../constants/enums.constants.js"
import User from "../models/user.models.js"

//register user
export const register = async(req,res,next)=>{
    try {
        const{first_name,last_name,email,password,phone_number,gender} = req.body

        const user = await User.create({first_name,last_name,email,password,phone_number,gender,role:USER_ROLES.USER})
         
        res.status(200).json({
            message:"Account Created",
            status: "success",
            data: user
        })
    } catch (error) {
        next(error)
    }
}

//login 
export const login = async(req,res,next)=>{
    try {
        const {email,password} = req.body
        if(!email){
            const error = new Error('Email is required')
            next(error)
        }
        if(!password){
            const error = new Error('Passowrd is required')
            throw error
        }
        const user = await User.findOne({email})
        if(!user){
            const error = new Error("Credentials does not match")
            throw error
        }
        const isMatch = password === user.password
        if(!isMatch){
            const error = new Error("Credintials does not match")
            throw error
        }
        res.status(201).json({
            message:"login success",
            data: user
        })
    } catch (error) {
        next(error)
    }
}
