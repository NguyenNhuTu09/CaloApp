import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'
const swaggerJSDocs = YAML.load("./api.yaml")

import { notFound } from './middleware/not-found.js';
import { errorHandlerMiddleware } from './middleware/error-handler.js';




import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import foodRoute from './routes/foods.js'
import exerciseRoute from './routes/exercise.js'
import dayFoodRoute from './routes/dayFood.js'
import DayExerciseRoute from './routes/dayExercise.js'
import dayPlanRoute from './routes/dayPlan.js'
import planRoute from './routes/plan.js'
import YAML from 'yamljs';



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
app.use(fileUpload());


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));
app.use('/auth', authRoute )
app.use('/users', userRoute )
app.use('/foods', foodRoute)
app.use('/exercise', exerciseRoute)
app.use('/dayfood', dayFoodRoute)
app.use('/dayexercise', DayExerciseRoute)
app.use('/dayplan', dayPlanRoute)
app.use('/plan', planRoute)

app.use(notFound);
app.use(errorHandlerMiddleware);


app.listen(port, ()=>{
     connect()
     console.log('server listening on port: ', port)
})


