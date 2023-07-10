import mongoose from "mongoose";

const DayFoodSchema = new mongoose.Schema(
  {
    dayFoodID: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    nameFoods: {
      type: String,
      required: true,
    },
    foods: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Food"
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.model("DayFood", DayPlanSchema);
