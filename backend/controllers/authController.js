import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import express from 'express'

// user regiatration
// export const register = async(req, res) => {
//      try{
//           const salt = bcrypt.genSaltSync(10)
//           const hash = bcrypt.hashSync(req.body.password, salt)
     
//           const newUser = new User({
//                lastFirstName: req.body.lastFirstName,
//                email: req.body.email,
//                password: hash,
//                userName: req.body.userName,
//                date: req.body.date,
//                phonenumber: req.body.phonenumber,
//                location: req.body.location,
//                photo: req.body.photo,
//           })
//           await newUser.save() // shut down register

//           res.status(200).json({success: true, message: 'Successfuly created'})
//      }catch(err){
//           res.status(500).json({success: false, message: 'Failed to create. Try again'})
//           console.log(err)
//      }
// }

// ChatGPT demo

export const register = async(req, res) => {
     try{
          const {lastFirstName, email, password, userName, date, phonenumber, gender, location, photo} = req.body;
          let user = await User.findOne({email})
          if(user){
               return res.status(400).json({message: 'Email đăng nhập đã tồn tại'})
          }
          user = new User({lastFirstName, email, password, userName, date, phonenumber, gender, location, photo})
          const salt = await bcrypt.genSalt(10)
          user.password = await bcrypt.hash(password, salt)
          await user.save()
          const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY)
          res.json({token})

          
     }catch(error){
          console.log(error)
          res.status(500).json({message: 'Server Error'})
     }
}

// user login
export const login = async(req, res) => {
     const email = req.body.email
     try{
          const user = await User.findOne({email})
          
          // id user doesnt exist
          if(!user){
               return res.status(404).json({susccess: false, message: 'Người dùng không tồn tại'})
          }
          // if user is exisst then check the password or compare the password
          const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

          // if(checkCorrectPassword == req.body.password){
          //      return res.status(200).json({susccess: true, message: 'Login successfully'})
          // }

          // console.log('Login successfully')

          // if password is incorrect
          if(!checkCorrectPassword){
               return res.status(401).json({success: false, message: "Sai mật khẩu"})
          }

          const {password, role, ...rest} = user._doc

          //create jwt token
          const token = jwt.sign(
               {id:user._id, role:user.role}, 
               process.env.JWT_SECRET_KEY, 
               {expiresIn: '15d'}
          )

          // set token in the browser cookies and sed the response top the client
          res.cookie('accessToken', token, {
               httpOnly: true,
               expires: token.expiresIn
          })
          .status(200)
          .json({
               token, 
               data:{...rest},
               role,})

     }catch(err){
          res.status(500).json({success: false, message: 'Đăng nhập thất bại.'})  
     }
}