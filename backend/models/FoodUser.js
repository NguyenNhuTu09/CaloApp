import mongoose from "mongoose";

const foodUserSchema = new mongoose.Schema(
     {
          nameFood: {
               type: String,
               required: true,
               unique: true,
          },
          Type:{
               type: String,
               required: true,
          },
          imageFood: {
               type: String,
               required: true
          },
          support: {
               type: String,
               required: true
          },
          ration:{
               type: Number,
               required: true
          },
          totalCalories:{
               type: Number,
               required: true
          },
          mainMaterial: {
               type: String,
               required: true
          },
          auxiliaryMaterials: {
               type: String,
               required: true
          },
          Additives: {
               type: String,
               required: true,
          },
          processing: {
               type: String,
               required: true,
          },
          description:{
               type: String,
               required: true
          },
          reviews: [
               {
                 type: mongoose.Types.ObjectId,
                 ref: "Review",
               },
          ],
          // lấy chính xác trong database tên là author, còn user là tự tạo và tự insert vào MongoDB
          author: {
               type:String,
               required: true
          }
     },
     {timestamps: true}
)

export default mongoose.model('FoodUser', foodUserSchema)

