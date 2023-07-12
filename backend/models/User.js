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
    phonenumber:{
      type: String,
      required: true,
    },
    gender:{
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true
    },
    foods: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Food",
      },
    ],
    exercises: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Exercise",
      }
    ],
    plans: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Plan"
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
