import mongoose from "mongoose";

const DayExerciseSchema = new mongoose.Schema(
  {
    dayExerciseID: {
      type: mongoose.Types.ObjectId,
      ref: "Exercise",
    },
    nameExercises: {
      type: String,
      required: true,
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
