import User from '../models/User.js'

// create new user
export const createUser = async(req, res) => {
     const newUser = new User(req.body)
     try{
          const savedUser = await newUser.save()
          res.status(200).json({
               success: true, 
               message: 'Successfully created',
               data: savedUser})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to create. Try again'})
     }
}

// update user
export const updateUser = async (req, res) => {
     const id = req.params.id
     try{
          const updatedUser = await User.findByIdAndUpdate(id, {
               $set: req.body
          }, {new:true})

          res.status(200).json({
               success: true, 
               message: 'Successfully updatesd',
               data: updatedUser})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to update'})
     }
}
// delete user
export const deleteUser = async (req, res) => {
     const id = req.params.id
     try{
          await User.findByIdAndDelete(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully deleted'})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to delete'})
     }
}
// get single user
export const getSingleUser = async (req, res) => {
     const id = req.params.id
     try{
          const user = await User.findById(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully ',
               data: user})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     }
}
// get All user
export const getAllUser = async (req, res) => {
     
     try{
          const users = await User.find({})
          res.status(200).json({
               success: true, 
               message: 'Successfully ',
               data: users})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     } 
}

// getBySearchUser 
export const getUserBySearch = async(req, res) => {
     const userName = new RegExp(req.query.userName, 'i')
     try {
          const users = await User.find({userName})
          res.status(200).json({
               success: true, 
               message: 'Successfully ',
               data: users})
     } catch (error) {
          console.log(error)
          res.status(404).json({
               success: false, 
               message: 'not found'})
     }
}


export const batchRequest = async (req, res) => {
     try {
       const { userIDs } = req.query;
   
       // Lấy thông tin người dùng dựa trên userIDs
       const userDataPromises = userIDs.map(async (userID) => {
         const userRes = await fetch(`${BASE_URL}/users/${userID}`);
         return userRes.json();
       });
   
       const userDataArray = await Promise.all(userDataPromises);
   
       // Trả về thông tin người dùng
       res.json({ data: userDataArray });
     } catch (error) {
       console.error('Error fetching user data:', error);
       res.status(500).json({ error: 'Internal Server Error' });
     }
}