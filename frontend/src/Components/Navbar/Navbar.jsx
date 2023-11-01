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
    // icon: <img src={ichome}/>,
    icon: <span class="material-symbols-outlined">
    Home
    </span>,
    text: <a>Trang chủ</a>
  },
  {
    path: '/app/menu',
    // icon: <img src={menu2}/>,
    icon: <span class="material-symbols-outlined">
    restaurant_menu
    </span>,
    text: <a>Thực đơn</a>
  },
  {
    path: '/app/exercise',
    // icon: <img src={Tapluyen}/>,
    icon:<span class="material-symbols-outlined">
    exercise
    </span>,
    text: <a>Bài tập</a>
  },
]

const nav_link2 = [
  {
    path: '/app/discover',
    // icon: <img src={Muctieu}/>,
    icon: <span class="material-symbols-outlined">
    monitoring
    </span>,
    text: <a>Theo dõi</a>
  },
]


const Navbar = () => {

  const {user, dispatch} = useContext(AuthContext)

  
  return (
    <>
    <div className='Navbar d-flex flex-column align-items-center justify-content-between'>
        <div className='nav-menu d-flex flex-column align-items-center'>



          <div className='logo d-flex flex-column align-items-center'>
            <img src={logo}/>
            <p className='logo_name fs-5 fw-bold'>TITFitness</p>
          </div>
          {
            nav_link1.map((item, index) => (
              <li className='nav_item d-flex flex-row jusitfy-content-between' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link d-flex flex-row ' : 'd-flex flex-row'}>{item.icon} <p>{item.text}</p></NavLink>
              </li>
            ))
          }
          
          {
            nav_link2.map((item, index) => (
              <li className='nav_item' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row'}>{item.icon} <p>{item.text}</p></NavLink>
              </li>
            ))
          }

          <hr/>
          <li className='nav_item'>

            <NavLink className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row '} to={`/app/user/${user._id}`}><span class="material-symbols-outlined">account_circle
</span><p>Tài khoản</p></NavLink>
          </li>
          <li className='nav_item'>
            <NavLink className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row'} to={`/app/user/${user._id}/plan`}><span class="material-symbols-outlined">
new_window
</span><p>Kế hoạch</p></NavLink>
          </li>
          

        </div>

      <hr/>
       <Link className='Logout d-flex flex-row align-items-center' to='/login'>
            <p>Đăng xuất</p>
            <span class="material-symbols-outlined">
logout
</span>
       </Link>
    </div>

    
    <Outlet/>
    </>
  )
}
export default Navbar
