import mongoose from "mongoose";

const DayFoodSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    username: {
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
