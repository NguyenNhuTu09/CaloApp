import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    username: {
      type: String,
      required: true,
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
