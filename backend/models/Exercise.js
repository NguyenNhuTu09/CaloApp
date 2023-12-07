import mongoose, { Types } from "mongoose";

const exerciseSchema = new mongoose.Schema(
     {
          userID:{type: mongoose.Types.ObjectId, required: true},
          nameExer: { type: String,required: true,unique: true,},
          typeExer:{type: String,required: true,},
          imageExer: {type: String,required: true},
          support: { type: String,required: true},
          ration:{ type: Number,required: true},
          calo:{ type: Number,required: true},
          descExer:{ type: String,required: true},
          processing:[{
               imageProcess:{type: String},
               descProcess:{type: String}
          }]
     },
     {timestamps: true}
)

export default mongoose.model('Exercise', exerciseSchema)