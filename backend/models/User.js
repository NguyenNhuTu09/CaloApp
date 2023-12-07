import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    lastFirstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { 
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: String,
      required: true,
    },
    phone:{
      type: String,
      required: true,
    },
    gender:{
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true
    },
    role:{
      type: String,
      default: "User"
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
