import mongoose from "mongoose";

const stepFoodSchema = new mongoose.Schema(
  {
    stepId: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    imageStep: {
      type: String,
      required: true,
    },
    descriptionStep: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("StepFood", stepFoodSchema);
