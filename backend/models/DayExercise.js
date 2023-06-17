import mongoose from "mongoose";

const DayExerciseSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    exercises: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Exercise"
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("DayExercise", DayExerciseSchema);
