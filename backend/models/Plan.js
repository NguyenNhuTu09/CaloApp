import mongoose from "mongoose";

import DayPlan from "./DayPlan.js";

const PlanSchema = new mongoose.Schema(
  {
    userId: {type: mongoose.Types.ObjectId, ref: "User",},
    planName: {type: String,required: true,unique: true},
    dayStart: {type: String,required: true},
    dayEnd: {type: String,required: true},
    descPlan: {type: String,required: true},
    planState:{type: String,required: true},
  },
  { timestamps: true }

  
);

export default mongoose.model("Plan", PlanSchema);
