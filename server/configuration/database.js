import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MODEL_URI);
    console.log("MongoDB connected successfully");
    } catch (error) {
     console.log(error)
    }
}