import mongoose from "mongoose";

const DayFoodSchema = new mongoose.Schema(
  {
    dayPlanID: {type: mongoose.Types.ObjectId,ref: "DayPlan",},
    foods: [{ 
        type: mongoose.Types.ObjectId,
        ref: "Food",
      }],
    totalCalo:{type: Number, required: true},
    dayFoodState: {type: String, required: true}
  },
  { timestamps: true }
);

export default mongoose.model("DayFood", DayFoodSchema);
