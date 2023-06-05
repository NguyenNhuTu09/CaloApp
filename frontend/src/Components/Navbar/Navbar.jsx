import React, {useState} from 'react'
import {NavLink, Link, useNavigate} from 'react-router-dom';
import {Form, FormGroup} from 'reactstrap'
import './navbar.css'

import ichome from '../../assets/Home.png'
import icuser from '../../assets/User.png'
import logo from '../../assets/Logo.png'
import login from '../../assets/Continue.png'

import menu from '../../assets/Menu.png'
import menu2 from '../../assets/Menu 2.png'
import logout from '../../assets/Logout.png'
import discover from '../../assets/discover.png'

import {BiLogOut} from 'react-icons/bi';


const nav_link = [
  {
    path: '/home',
    icon: <img src={ichome}/>
  },
  {
    path: '/menu',
    icon: <img src={menu2}/>
  },
  {
    path: '/discover',
    icon: <img src={discover}/>
  },
  {
    path: '/user',
    icon: <img src={icuser}/>
  },

]


const Navbar = () => {
  return (
    <div className='Navbar d-flex flex-column align-items-center justify-content-between'>
        <div className='nav-menu'>
        {
          nav_link.map((item, index) => (
            <li key={index} to={item.path} className={navClass => navClass.isActive ? 'active_link' : ""} >
                  <Link className='icon' to={item.path}><a>{item.icon}</a></Link>
            </li>
          ))
        }
      </div>
      <p><img src={logout}/></p>
    </div>
  )
}
export default Navbar
