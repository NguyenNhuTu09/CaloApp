import React from 'react'
import './menu.css'

import {AiFillStar} from 'react-icons/ai'
import arrow from '../../assets/Arrow.png'

const Food = ({food}) => {

     const {_id, imageFood, Type, totalCalories   } = food
return (
     <div key={_id} className='food-menu'>
          <div className='image-food position-relative'>
               {imageFood}
          </div>
          <div className='detail-food'>
               <p className='caterogy d-flex flex-row justify-content-end'><span><AiFillStar/></span></p>
               <p className='caterogy d-flex flex-row justify-content-end'>{Type}</p>
               <p className='food-name fw-bold fs-6 d-flex flex-row justify-content-between'>{nameFoodDetail}<span>{gam}</span></p>
               <p className='calo d-flex flex-row justify-content-between'>{totalCalories} Calo<span>Chi tiết <img src={arrow}/></span></p>
          </div>
   </div>
  )
}

export default Food
