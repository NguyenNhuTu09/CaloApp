import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Common/Navbar/Navbar';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register';
import CreateExercise from './Components/CreateExercise/CreateExercise';
import CreateFood from './Components/CreateFood/CreateFood';
import Home from './Pages/Home/Home';
import User from './Pages/User/User';
import Discover from './Components/Discover/Discover';
import DetailPlan from './Components/DetailPlan/DetailPlan';
import DetailFood from './Components/DetailFood/DetailFood';
import DetailExercise from './Components/DetailExercise/DetailExercise';
import Menu from './Pages/Menu/Menu';
import SearchUser from './Components/SearchUser/SearchUser';
import CreatePlan from './Components/CreatePlan/CreatePlan';
import CreatePlanTwo from './Components/CreatePlanTwo/CreatePlanTwo';
import Exercise from './Components/Exercise/Exercise'

const App = () => {
  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
            
            <Route index element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>

            <Route path='app' element={<Navbar/>}>
              <Route path='discover' element={<Discover/>}/>
              <Route path='home' element={<Home/>}/>
              <Route path="user/:id" element={<User/>}/>
              <Route path='createfood' element={<CreateFood/>}/>
              <Route path='user/:id/createfood' element={<CreateFood/>}/>
              <Route path='user/:id/createExer' element={<CreateExercise/>}/>
              <Route path='detailplan' element={<DetailPlan/>}/>
              <Route path='detailplan/detailfood' element={<DetailFood/>}/>

              {/* <Route path='user/:id/plan' element={<Plan/>}/> */}
              {/* <Route path='user/:id/plan/:id' element={<Plan/>}/> */}

              <Route path='user/plan' element={<CreatePlan/>}/>
              <Route path='user/plan/create/:id' element={<CreatePlanTwo/>}/>


              <Route path='menu' element={<Menu/>}/>
              <Route path='exercise' element={<Exercise/>}/>
              <Route path='menu/:id' element={<DetailFood/>}/>
              <Route path='exercise/:id' element={<DetailExercise/>}/>
              <Route path='users/:id' element={<SearchUser/>}/>

              <Route path='detailplan/:id' element={<DetailPlan/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App


