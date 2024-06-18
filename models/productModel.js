import mongoose, { Mongoose } from "mongoose";
// Product schema
const productSchema = new mongoose.Schema({
    p_id:Number,
    p_name: String,
    p_description: String,
    p_cat: String,
    p_url: String,
    p_cost: Number
})
export default mongoose.model("products",productSchema);