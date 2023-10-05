"use server";
import mongoose from "mongoose";

let isConnected = false;
const MONGODB_URL =
  "mongodb+srv://musharafz2k3:parwez123@teamup.3jo3dhl.mongodb.net/?retryWrites=true&w=majority";
export const connectToDB = async () => {
  // mongoose.set('strictQuery',true);

  if (!MONGODB_URL) return console.log("MONGODB_URL not found");

  if (isConnected) return console.log("already connected to MongoDB");

  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};
