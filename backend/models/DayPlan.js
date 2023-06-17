import mongoose from "mongoose";

const DayPlanSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    username: {
      type: String,
      required: true,
      unique: true
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
    ]
  },
  { timestamps: true }
);

export default mongoose.model("DayPlan", DayPlanSchema);
