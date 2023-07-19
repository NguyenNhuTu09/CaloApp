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
// PlanSchema.pre('save', async function (next) {
//   // Nếu Plan chưa có DayPlan, tạo một DayPlan mới và đẩy vào mảng dayPlan của Plan
//   if (this.isNew && !this.dayPlan.length) {
//     try {
//       const dayPlan = await DayPlan.create({
//       });
//       this.dayPlan.push(dayPlan);
//       next();
//     } catch (err) {
//       next(err);
//     }
//   } else {
//     next();
//   }
// });

export default mongoose.model("Plan", PlanSchema);
