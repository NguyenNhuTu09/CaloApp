import mongoose from "mongoose";

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
    dayPlan: [ 
      {
        type: mongoose.Types.ObjectId,
        ref: "DayPlan"
      }
    ],
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
