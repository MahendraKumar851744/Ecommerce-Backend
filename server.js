import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
// Dot ENV config
dotenv.config();
// mongodb connection
connectDB();
// REST object
const app = express();
//middlewares
app.use(express.json());
app.use(cors());
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/", productRoutes);
// port
const PORT = process.env.PORT;
// listen
app.listen(PORT, () => {
  console.log("Server started Successfully!".bgCyan.white);
});
