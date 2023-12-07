import mongoose from "mongoose";

const DayPlanSchema = new mongoose.Schema(
  {
    planID: {type: mongoose.Types.ObjectId,ref: "Plan",},
    dayName:{type: String},
    note:{type: String,},
    caloIn:{type: Number, required: true},
    caloOut:{type: Number, required: true},
    dayPlanState: {type: String}
  },
  { timestamps: true }
);

export default mongoose.model("DayPlan", DayPlanSchema);
