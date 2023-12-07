import mongoose from "mongoose";

const DayExerciseSchema = new mongoose.Schema(
  {
    dayPlanID: {type: mongoose.Types.ObjectId,ref: "DayPlan",},
    exercises: [{
        type: mongoose.Types.ObjectId,
        ref: "Exercise",
      }],
    totalCaloOut: {type: Number},
    dayExerState: {type: String, required: true}
  },
  { timestamps: true }
);

export default mongoose.model("DayExercise", DayExerciseSchema);
