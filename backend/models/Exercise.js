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
          time: {type: Number, required: true},
          difficulty: {type: String, required: true},
          targerAudience: {type: String, required: true},
          descExer:{ type: String,required: true},
          processing:[{
               imageProcess:{type: String},
               descProcess:{type: String}
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
exerciseSchema.index({ '$**': 'text' });

export default mongoose.model('Exercise', exerciseSchema)