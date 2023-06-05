import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
     {
          nameFood: {
               type: String,
               required: true,
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
     },
     {timestamps: true}
)

export default mongoose.model('Food', foodSchema)