import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
     {
          userID: {type: mongoose.Types.ObjectId, ref: "User"},
          nameFood:{type: String,required: true,},
          typeFood:{type: String,required: true,},
          imageFood: {type: String,required: true},
          support: {type: String,required: true},
          ration:{ type: Number,required: true},
          calo:{type: Number,required: true},
          mainMaterial: { type: String,required: true},
          auxiliaryMaterials: {type: String,required: true},
          additives: {type: String,required: true,},
          cookingMethod: { type: String,required: true,},
          descFood:{type: String,required: true},
          country: {type: String},
          preparationMethods:[{
               imageCook:{type: String},
               descCook:{type: String}
          }],
          likes: [
               {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
               },
          ],
          saves: [
               {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
               },
          ],
     },
     {timestamps: true}
)

foodSchema.index({ '$**': 'text' });

export default mongoose.model('Food', foodSchema)

