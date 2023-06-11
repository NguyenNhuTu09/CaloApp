import React from 'react'
import {Routes, Route} from 'react-router'
import { Navigate } from 'react-router'
import '../App.css'

import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import User from '../Components/User/User'
import Plan from '../Components/Plan/Plan'
import DetailPlan from '../Components/DetailPlan/DetailPlan'
import Menu from '../Components/Menu/Menu'
import Discover from '../Components/Discover/Discover'
import DetailFood from '../Components/DetailFood/DetailFood'
import CreateExercise from '../Components/CreateExercise/CreateExercise'
import CreateFood from '../Components/CreateFood/CreateFood'
import Navbar from '../Components/Navbar/Navbar'

const Routers = () => {
  return (
    <Routes>
          <Route path='' element={<Navigate to='home'/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>

          <Route path='app' element={<Navbar/>}>
            
            <Route path='user' element={<User/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='createfood' element={<CreateFood/>}/>
            <Route path='createexercise' element={<CreateExercise/>}/>
            <Route path='detailplan' element={<DetailPlan/>}/>
            <Route path='detailplan/detailfood' element={<DetailFood/>}/>
            <Route path='plan' element={<Plan/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='discover' element={<Discover/>}/>
        </Route>
    </Routes>

  )
}
export default Routers
