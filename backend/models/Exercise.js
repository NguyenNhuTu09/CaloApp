import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
     {
          nameExercise: { // tên bài tập
               type: String,
               required: true,
               unique: true,
          },
          Type:{
               type: String, // loại bài tập
               required: true,
          },
          imageExercise: { // ảnh đaị diện
               type: String,
               required: true
          },
          support: { // hỗ trợ cho cái gì
               type: String,
               required: true
          },
          ration:{ // mức calo đốt cháy trên một đơn vị thời gian
               type: Number,
               required: true
          },
          totalCalories:{ // tổng calo đốt cháy theo hệ thống đề xuất
               type: Number,
               required: true
          },
          description:{ // mô tả
               type: String,
               required: true
          },
          reviews: [
               {
                 type: mongoose.Types.ObjectId,
                 ref: "Review",
               },
          ],
          author: [
               {
                    type: mongoose.Types.ObjectId,
                    ref: "User",
                  },
          ]
     },
     {timestamps: true}
)

export default mongoose.model('Exercise', exerciseSchema)