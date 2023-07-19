import React, {useEffect, useState, useContext} from 'react'
import {NavLink, Link, useNavigate, Outlet, useParams} from 'react-router-dom';
import {Form, FormGroup} from 'reactstrap'
import './navbar.css'

import ichome from '../../assets/newHome.png'
import icuser from '../../assets/newUser.png'
import logo from '../../assets/LogoTHF.png'
import login from '../../assets/Continue.png'

import menu from '../../assets/newMenu.png'
import menu2 from '../../assets/newMenu.png'
import logout from '../../assets/Logout.png'
import discover from '../../assets/newDiscover.jpg'

import newPlan from '../../assets/newPlan.png'
import newExercise from '../../assets/newExericse.png'

import Muctieu from '../../assets/Muctieu.png'
import Tapluyen from '../../assets/Tapluyen.png'






import {BiLogOut} from 'react-icons/bi';
import {AiOutlineHome} from 'react-icons/ai'

import { BASE_URL } from '../Utils/config.js';
import { AuthContext } from '../../Context/AuthContext';





const nav_link1 = [
  {
    path: '/app/home',
    icon: <img src={ichome}/>,
    text: <p>Trang chủ</p>
  },
  {
    path: '/app/menu',
    icon: <img src={menu2}/>,
    text: <p>Thực đơn</p>
  },
  {
    path: '/app/exercise',
    icon: <img src={Tapluyen}/>,
    text: <p>Bài tập</p>
  },
]

const nav_link2 = [
  {
    path: '/app/discover',
    icon: <img src={Muctieu}/>,
    text: <p>Kế hoạch</p>
  },
  // {
  //   path: '/app/user',
  //   icon: <img src={icuser}/>,
  //   text: <p>Cài đặt</p>
  // },
  // {
  //   path: '/app/plan',
  //   icon: <img src={newPlan}/>,
  // }
]


const Navbar = () => {

  const {user, dispatch} = useContext(AuthContext)
  // console.log(user._id)
  

  
  return (
    <>
    <div className='Navbar d-flex flex-column align-items-center justify-content-between'>
        <div className='nav-menu d-flex flex-column align-items-center'>
          <img className='logo' src={logo}/>
          <p className=' name-web fs-5 fw-bold'>T.H.F</p>
          {
            nav_link1.map((item, index) => (
              <li className='nav_item d-flex flex-row' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row'}><a>{item.icon} </a>  </NavLink>
                    {/* <a>{item.text}</a> */}
              </li>
            ))
          }
          
          {
            nav_link2.map((item, index) => (
              <li className='nav_item' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row'}><a>{item.icon} </a> </NavLink>
              </li>
            ))
          }
          <li className='nav_item'>

            <NavLink className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row'} to={`/app/user/${user._id}`}><a><img src={icuser}/></a></NavLink>
          </li>
          <li className='nav_item'>

            <NavLink className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row'} to={`/app/user/${user._id}/plan`}><a><img src={newPlan}/></a></NavLink>
          </li>
          

          {/* <Link to={'/app/plan'}><img className='create' src={newPlan}/></Link> */}
        </div>

      <p>
      <hr/>
       <Link to='/login'><img src={logout}/></Link>
      </p>
    </div>
    <Outlet/>
    </>
  )
}
export default Navbar
