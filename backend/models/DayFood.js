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
      { // Khi Food được tạo bên trong một DayFood thì ID này sẽ tự được MongoDB khởi tạo
        type: mongoose.Types.ObjectId,
        ref: "Food",
        // type: String,
        required: true,
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.model("DayFood", DayFoodSchema);
