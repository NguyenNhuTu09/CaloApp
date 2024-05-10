
import React, {useEffect, useState, useContext} from 'react'
import {NavLink, Link, useNavigate, Outlet, useParams} from 'react-router-dom';
import {Form, FormGroup} from 'reactstrap'
import './navbar.css'

import logo from '../../assets/LogoTHF.png'

import { BASE_URL } from '../Utils/config.js';
import { AuthContext } from '../../Context/AuthContext';

const nav_link1 = [
  {
    path: '/app/home',
    icon: <span class="material-symbols-outlined">grid_view</span>,
    text: <a>Trang chủ</a>
  },
  {
    path: '/app/menu',
    icon: <span class="material-symbols-outlined">lunch_dining</span>,
    text: <a>Thực đơn</a>
  },
  {
    path: '/app/exercise',
    icon:<span class="material-symbols-outlined">exercise</span>,
    text: <a>Bài tập</a>
  },
]

const nav_link2 = [
  {
    path: '/app/discover',
    icon: <span class="material-symbols-outlined">insert_chart</span>,
    text: <a>Theo dõi</a>
  },
]

const Navbar = () => {

  const {user, dispatch} = useContext(AuthContext)

  return (
    <>
    <div className='Navbar d-flex flex-column align-items-center justify-content-between'>
     <div className='nav-1 d-flex flex-column'>
 
        <div className='logo d-flex flex-column align-items-center'>
          <div className='d-flex flex-rows align-items-center'>
            <img className='' src={logo}/>
            <p className='logo_name'>TITFitness</p> 
          </div>
        </div>
        <div className='create d-flex flex-column' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <div className='d-flex flex-rows align-items-center'>

            <span class="material-symbols-outlined">add</span>
            <p>Tải lên</p>
          </div>
          
        </div>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <Link className='link'><a class="dropdown-item" href="#">Kế hoạch</a></Link>
            <Link className='link' to={`user/${user._id}/createfood`}><a class="dropdown-item" href="#">Món ăn</a></Link>
            <Link className='link' to={`user/${user._id}/createExer`}><a class="dropdown-item" href="#">Bài tập</a></Link>
          </ul>
        <div className='nav-menu d-flex flex-column align-items-center'>


          
          
          {
            nav_link1.map((item, index) => (
              <li className='nav_item' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row'}>{item.icon} <p>{item.text}</p></NavLink>
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

          {/* <hr/> */}
          <li className='nav_item'>
            <NavLink className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row'} 
                to={`/app/user/${user.id}`}><span class="material-symbols-outlined">account_circle
                </span><p>Hồ sơ</p></NavLink>
          </li>
          <li className='nav_item'>
            <NavLink className={navClass => navClass.isActive ? 'active_link d-flex flex-row' : 'd-flex flex-row'} 
                to={`/app/user/plan`}><span class="material-symbols-outlined">new_window
                </span><p>Kế hoạch</p></NavLink>
          </li>

          

        </div>
     </div>

        <div className='item-other d-flex flex-column align-items-center'>
          <p className='help d-flex flex-row align-items-center'><span class="material-symbols-outlined">help</span>Trợ giúp</p>
        </div>
    </div>
    
    <Outlet/>
    </>
  )
}
export default Navbar
