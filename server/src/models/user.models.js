import mongoose, { Schema } from "mongoose";
import { USER_ROLES,ROLE_VALUES } from "../constants/enums.constants.js";

const userSchema = new mongoose.Schema({
   first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ROLE_VALUES,
        default: USER_ROLES.USER
    },
    profile_image:{
        type:{
            path: String,
            public_id: String
        }
    }

})
const User = mongoose.model('User', userSchema)
export default User