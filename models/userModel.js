import mongoose, { Mongoose } from "mongoose";
import validator from "validator";
// user schema
const userSchema = new mongoose.Schema({
    // u_id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    u_name: {
        type: String,
        required: [true,"Name is required!"]
    },
    u_pwd: {
        type: String,
        required: [true,"Password is required!"]
    },
    u_u_email: {
        type: String,
        required: [true,"Email is required!"],
        unique: true,
        validate: validator.isEmail
    },
    u_addr: String,
    u_u_contact: {
        type: String,
        validate: validator.isMobilePhone
    }
})

export default mongoose.model("users",userSchema);