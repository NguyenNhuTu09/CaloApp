import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Common/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import CreateFood from './Components/CreateFood/CreateFood';
import Home from './Pages/Home/Home';
import User from './Pages/User/User';
import Discover from './Components/Discover/Discover';
import DetailFood from './Components/DetailFood/DetailFood';
import Menu from './Pages/Menu/Menu';
import SearchUser from './Components/SearchUser/SearchUser';
import CreatePlan from './Components/CreatePlan/CreatePlan';
import CreatePlanTwo from './Components/CreatePlanTwo/CreatePlanTwo';

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
              <Route path='user/createfood' element={<CreateFood/>}/>
              <Route path='detailplan/detailfood' element={<DetailFood/>}/>

              {/* <Route path='user/:id/plan' element={<Plan/>}/> */}
              {/* <Route path='user/:id/plan/:id' element={<Plan/>}/> */}

              <Route path='user/plan' element={<CreatePlan/>}/>
              <Route path='user/plan/create/:id' element={<CreatePlanTwo/>}/>


              <Route path='menu' element={<Menu/>}/>
              <Route path='menu/:id' element={<DetailFood/>}/>
              <Route path='users/:id' element={<SearchUser/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App


