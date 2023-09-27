import React from 'react'
import './menu.css'
import { Card, CardBody } from 'reactstrap'

import {AiFillStar} from 'react-icons/ai'
import arrow from '../../assets/Arrow.png'

import calculateAvgRating from '../Utils/avgRating'
// import demoFood from '../../../public/Food/Bach-tuoc.jpg'


const Food = ({food}) => {

     const {_id, imageFood, Type, ration, nameFood, totalCalories, reviews} = food

     const {totalRating, avgRating}  = calculateAvgRating(reviews)
     return(
          <div key={_id} className='food-menu'>
            <div className='image-food position-relative'>  
              <img  src={imageFood}/>
            </div>
            <div className='detail-food'>
              <p className='caterogy d-flex flex-row justify-content-end'>
               {avgRating === 0 ? null : avgRating}
               {totalRating === 0 ? (
               'Not rated'
               ) : (
                    <span>({reviews.length})</span>
                    )}
                    <AiFillStar/>
               </p>
              <p className='caterogy d-flex flex-row justify-content-end'>{Type}</p>
              <p className='food-name fw-bold fs-6 d-flex flex-row justify-content-between'>{nameFood} <span>{ration} g</span></p>
              <p className='calo d-flex flex-row justify-content-between'>{totalCalories} Calo<span>
              <Link to={`/foods/${_id}`}>
                Chi tiết <img src={arrow}/>
              </Link>
              </span></p>
            </div>
          </div>
  )
}

export default Food
