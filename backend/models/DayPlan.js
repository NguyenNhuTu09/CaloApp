import mongoose from "mongoose";

const DayPlanSchema = new mongoose.Schema(
  {
    dayPlanID: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    nameDayPlan:{
      type: String,
      // required: true
    },
    dayFoods: [
      {
        type: mongoose.Types.ObjectId,
        ref: "DayFood"
      }
    ],
    dayExercises: [
      {
        type: mongoose.Types.ObjectId,
        ref: "DayExercise"
      }
    ],
    noteDayPlan:{
      type: String,
      // required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("DayPlan", DayPlanSchema);
