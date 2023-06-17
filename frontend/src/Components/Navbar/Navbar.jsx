import React, {useState} from 'react'
import {NavLink, Link, useNavigate, Outlet} from 'react-router-dom';
import {Form, FormGroup} from 'reactstrap'
import './navbar.css'

import ichome from '../../assets/newHome.png'
import icuser from '../../assets/newUser.png'
import logo from '../../assets/LogoFinal.png'
import login from '../../assets/Continue.png'

import menu from '../../assets/newMenu.png'
import menu2 from '../../assets/newMenu.png'
import logout from '../../assets/Logout.png'
import discover from '../../assets/newDiscover.jpg'

import newPlan from '../../assets/newPlan.png'
import newExercise from '../../assets/newExericse.png'





import {BiLogOut} from 'react-icons/bi';


const nav_link = [
  {
    path: '/app/home',
    icon: <img src={ichome}/>
  },
  {
    path: '/app/menu',
    icon: <img src={menu2}/>
  },
  {
    path: '/app/discover',
    icon: <img src={discover}/>
  },
  {
    path: '/app/user',
    icon: <img src={icuser}/>
  },
  {
    path: '/app/plan',
    icon: <img src={newPlan}/>
  }

]


const Navbar = () => {
  return (
    <>

    <div className='Navbar d-flex flex-column align-items-center justify-content-between'>
        <div className='nav-menu d-flex flex-column align-items-center'>
          <img className='logo' src={logo}/>
          {
            nav_link.map((item, index) => (
              <li className='nav_item' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link' : ""}><a>{item.icon}</a></NavLink>
              </li>
            ))
          }
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
