
import User from "../models/user.models.js";

//Get all users
export const getAllUser = async(req,res,next)=>{
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        next(error)
    }
}


//get all user by id
export const getById = async(req,res,next)=>{
   try {
    const {id} = req.params 
    const user = await User.findById(id).select('-password')
    if(!user){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    res.status(200).json({
        success: true,
        message: 'User fetched successfully',
        data: user
    })
   } catch (error) {
    next(error)
   }
}

//updating the users
export const updateuser = async(req,res,next)=>{
    try {
        const {id} = req.params
        const {first_name,last_name,phone,gender} = req.body

        const user = await User.findByIdAndUpdate(id,{first_name,last_name,phone,gender},{new:true})

        if(!user){
            throw new Error('User not found')
        }
        res.status(200).json({
            message:'profile updated',
            data: user
        })
    } catch (error) {
        next(error)
    }
}

