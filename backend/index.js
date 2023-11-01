import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors';
import cookieParser from 'cookie-parser';

import admin from 'firebase-admin'

// import serviceAccount from './titfitness-firebase-adminsdk-r6fgj-98913ea618.json' assert { type: 'json' };
// admin.initializeApp({
//      credential: admin.credential.cert(serviceAccount),
//      databaseURL: 'https://titfitness.firebaseio.com' // Thay thế bằng URL của dự án Firebase của bạn
// });

import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import foodRoute from './routes/foods.js'
import foodUserRoute from './routes/foodsUser.js'
import exerciseRoute from './routes/exercise.js'

import dayFoodRoute from './routes/dayFood.js'
import DayExerciseRoute from './routes/dayExercise.js'

import dayPlanRoute from './routes/dayPlan.js'
import planRoute from './routes/plan.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
     origin: true,
     credentials: true
}

// database connection
mongoose.set("strictQuery", false)
const connect = async() => {
     try{
          await mongoose.connect(process.env.MONGO_URI,{
               useNewUrlParser: true,
               useUnifiedTopology: true
          })
          console.log("MongoDB database connected")
     } catch(err){
          console.log('MongoDB database connection failed')
     }
}

// middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/auth', authRoute )
app.use('/users', userRoute )

app.use('/foods', foodRoute)
app.use('/foodsuser', foodUserRoute)

app.use('/exercise', exerciseRoute)
app.use('/dayfood', dayFoodRoute)
app.use('/dayexercise', DayExerciseRoute)

app.use('/dayplan', dayPlanRoute)
app.use('/plan', planRoute)


app.listen(port, ()=>{
     connect()
     console.log('server listening on port: ', port)
})


