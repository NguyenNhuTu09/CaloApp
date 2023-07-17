import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from '../src/Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Menu from './Components/Menu/Menu'
import Plan from './Components/Plan/Plan'
import Routers from '../src/router/Routers'
import DetailFood from './Components/DetailFood/DetailFood'
import DetailPlan from './Components/DetailPlan/DetailPlan'
import CreateExercise from './Components/CreateExercise/CreateExercise'
import CreateFood from './Components/CreateFood/CreateFood'
import Discover from './Components/Discover/Discover'
import User from './Components/User/User'
import Exercise from './Components/Exercise/Exercise'
import Introduction from './Components/Introduction/Introduction'
import NavHome from './Components/NavHome/NavHome'


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
              {/* <Route path='home' element={<NavHome/>}>
                <Route path='page_01' element={<Home/>}/>
                <Route path='page_02' element={<Introduction/>}/>
              </Route> */}
              <Route path='home' element={<Home/>}/>
              <Route path="user/:id" element={<User/>}/>
              {/* <Route path="user/:id" element={<User/>}/> */}
              <Route path='createfood' element={<CreateFood/>}/>
              <Route path='user/:id/createfood' element={<CreateFood/>}/>
              <Route path='createexercise' element={<CreateExercise/>}/>
              <Route path='detailplan' element={<DetailPlan/>}/>
              <Route path='detailplan/detailfood' element={<DetailFood/>}/>
              <Route path='plan' element={<Plan/>}/>
              <Route path='menu' element={<Menu/>}/>
              <Route path='exercise' element={<Exercise/>}/>
              <Route path='menu/:id' element={<DetailFood/>}/>

              {/* <Route path='discover/:id' element={<Discover/>}/> */}
              <Route path='detailplan/:id' element={<DetailPlan/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App


