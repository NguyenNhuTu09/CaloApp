import React from 'react'
import './navbarTwo.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import userIcons from '../../assets/User.png'
import { AuthContext } from '../../Context/AuthContext'
const NavbarTwo = () => {
     const {user, dispatch} = useContext(AuthContext) 
  return (
     <div className='test-nav d-flex flex-rows justify-content-between'>
          {/* <p>ok</p> */}
          <div className='input-search d-flex flex-rows align-items-center'>
               <input type='text' placeholder='Tìm kiếm'>
               </input>
               <span class="material-symbols-outlined">search</span>
          </div>

          <div className='icons d-flex flex-rows align-items-center'>
               <div className='list-icons d-flex flex-row'>
                    <span class="material-symbols-outlined">mail</span>
                    <span class="material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#chat">send</span>
                    <span class="material-symbols-outlined">notifications</span>
               </div>
               
               
               <div class="list-setting dropdown">
                    
                    <img src={user.avatar} href="#" id="dropdownMenuLink" data-bs-toggle="dropdown"/>
                    <ul class="dropdown-menu">
                         {/* <li><a class="dropdown-item" href="#">Hồ sơ</a></li>
                         <li><a class="dropdown-item" href="#">Cài đặt</a></li>
                         <li><a class="dropdown-item" href="#">Đăng xuất</a></li> */}
                         <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">account_circle</span>Hồ sơ</p>
                         <Link className='link-logout' to='/login'>
                              <p className='d-flex flex-row align-items-center'>

                              <span class="material-symbols-outlined">logout</span>Đăng xuất
                              </p>
                         </Link>
                    </ul>

                    {/* <Link className='Logout d-flex flex-row align-items-center' to='/login'>
                         <p>Đăng xuất</p>
                         <span class="material-symbols-outlined">logout</span>
                    </Link> */}
               </div>
          </div>


          {/* Modal Chat */}
          <div class="modal fade"  id="chat" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
               <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                         <div className='nav-chat d-flex flex-row justify-content-between'>
                              <p className='title-chat'>Tin nhắn</p>
                              <span class="material-symbols-outlined" data-bs-dismiss="modal">close</span>
                         </div>
                         <div class="body-chat d-flex flex-row justify-content-between">
                              <div className='user-chat d-flex flex-column'>
                                   <div className='user-chat-items d-flex flex-row justify-content-between'>
                                        <img src={userIcons}/>
                                        <div className='infor-user d-flex flex-column'>
                                             <p className='name-user'>Nguyễn Như Từ</p>
                                             <p>6 ngày nữa kìa</p>
                                        </div>    
                                   </div>
                              </div>

                              <div className='infor-chat d-flex flex-column'>

                              </div>
                         </div>
                    </div>
               </div>
          </div>

          {/* t rat muon nhin thay m luc hoan thanh, nhung t khong du ban linh, khong du manh me ......... */}
          
   </div>
  )
}
export default NavbarTwo
