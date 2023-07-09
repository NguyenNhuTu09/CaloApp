import mongoose from "mongoose";

const DayPlanSchema = new mongoose.Schema(
  {
    dayPlanId: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    dayFood: [
      {
        type: mongoose.Types.ObjectId,
        ref: "DayFood"
      }
    ],
    dayExercise: [
      {
        type: mongoose.Types.ObjectId,
        ref: "DayExercise"
      }
    ],
    noteDayPlan:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("DayPlan", DayPlanSchema);
