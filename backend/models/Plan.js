import mongoose from "mongoose";

import DayPlan from "./DayPlan.js";

const PlanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    namePlan: {
      type: String,
      required: true,
      unique: true
    },
    startPlan: {
      type: String,
      required: true
    },
    endPlan: {
      type: String,
      required: true
    },
    dayPlan: [ 
      {
        type: mongoose.Types.ObjectId,
        ref: "DayPlan"
      }
    ],
    author:{
      type: String,
      required: true
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
 ],
  },
  { timestamps: true }

  
);

export default mongoose.model("Plan", PlanSchema);
