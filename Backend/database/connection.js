import mongoose from "mongoose";


const URI = process.env.MONGO_URI

export const connection = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://abhishekkumarshrivastav61:abhishekkumar@cluster0.iwp2itg.mongodb.net/AUCTION_APPLICATION");
    console.log(`\n MongoDB connected !!${conn.connection.host}`)
  } catch (error) {
    console.log("MONGO_URI =", process.env.MONGO_URI);

    console.log(`MongoDB connection error: ${error}`);
  }
};
