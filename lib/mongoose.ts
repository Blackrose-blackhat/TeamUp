"use server";
import mongoose from "mongoose";

let isConnected = false;
const MONGODB_URL =
  "mongodb+srv://musharafz2k3:parwez123@teamup.3jo3dhl.mongodb.net/?retryWrites=true&w=majority";
export const connectToDB = async () => {
  // mongoose.set('strictQuery',true);

  if (!MONGODB_URL) return;

  if (isConnected) return ;

  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    
  } catch (error) {
    
  }
};
