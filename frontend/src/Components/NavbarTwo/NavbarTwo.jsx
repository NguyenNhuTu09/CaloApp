import React from 'react'
import './navbarTwo.css'
const NavbarTwo = () => {
  return (
     <div className='test-nav d-flex flex-rows justify-content-between'>
          {/* <p>ok</p> */}
          <div className='input-search d-flex flex-rows align-items-center'>
               <input type='text' placeholder='Tìm kiếm'>
               </input>
               <span class="material-symbols-outlined">search</span>
          </div>

          <div className='icons d-flex flex-rows align-items-center'>
               <span class="material-symbols-outlined">mail</span>
               <span class="material-symbols-outlined">send</span>
               <span class="material-symbols-outlined">notifications</span>
               <span class="material-symbols-outlined">account_circle</span>
          </div>
   </div>
  )
}
export default NavbarTwo
