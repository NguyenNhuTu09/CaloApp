import React, {useState, useEffect, useContext} from 'react'
import './user.css'
import { Form, FormGroup, Row } from 'reactstrap'
import { Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

import {HiOutlineChevronRight} from 'react-icons/hi'
import {RiUserSettingsLine} from 'react-icons/ri'

import facebook from '../../assets/Facebook.png'
import google from '../../assets/Google.png'
import userImg from '../../assets/User.png'
import setting from '../../assets/Setting.png'
import settingUser from '../../assets/Setting-user.png';


import protein from '../../assets/Protein.png'
import Tinhbot from '../../assets/Tinh bot.png'
import Tinhbot2 from '../../assets/Tinh bot 2.png'
import Vitamin from '../../assets/Vitamin.png'
import Canxi from '../../assets/Canxi.png'
import Omega3 from '../../assets/Omega3.png';
import Kem from '../../assets/Zn.png';
import Chatxo from '../../assets/Chat xo.png'

import Chicken2 from '../../assets/Food/Chicken2.jpg'
import Ham from '../../assets/Food/Ham.jpg'
import Suachua from '../../assets/Food/Sua chua.jpg'
import Chuoi from '../../assets/Food/Chuoi.jpg'
import Catuyet from '../../assets/Food/Ca tuyet.jpg'
import Cangu from '../../assets/Food/Ca ngu.jpg'
import Cahoi from '../../assets/Food/Ca hoi.jpg'
import Thitbo from '../../assets/Food/Thit bo.jpg'
import Hanhnhan from '../../assets/Food/Hanh nhan.jpg'
import Khoailang from '../../assets/Food/Khoai lang.jpg'
import Carophi from '../../assets/Food/Ca ro phi.jpg'
import Bibau from '../../assets/Food/Bi bau.jpg'
import Bachtuoc from '../../assets/Food/Bach tuoc.jpg'



import jogging from '../../assets/Exercise/Chay bo.jpg'
import gapbung from '../../assets/Exercise/Gap bung.jpg'
import xadon from '../../assets/Exercise/Xa don.jpg'
import arrow from '../../assets/Arrow.png'

import add from '../../assets/addplan.png'

import {BsSearch} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

import { BASE_URL } from '../Utils/config.js'
import { AuthContext } from '../../Context/AuthContext'



const OptionsDetailFood = [
  {
    id: 1,
    imageFoodDetail: <img src={Chicken2}/>,
    type: 'Protein',
    star: '4.5',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Ức gà',
    gam: '400g',
    calories: '700 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 2,
    imageFoodDetail: <img src={Ham}/>,
    type: 'Protein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Giăm bông',
    gam: '300g',
    calories: '650 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 3,
    imageFoodDetail: <img src={Suachua}/>,
    type: 'Men',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Sữa chua',
    gam: '250g',
    calories: '150 Calo',
    description: '....',
    teps: 'Bước 1'
  },
]

const OptionsExercise = [
  {
    id: 1,
    imageExercise: <img src={jogging}/>,
    type: 'Thể dục nhẹ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameExercise: "Chạy bộ",
    minutes: '45m',
    calories: '600 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 2,
    imageExercise: <img src={gapbung}/>,
    type: 'Thể dục nhẹ',
    star: '4.7',
    icon: <AiFillStar/>,
    nameExercise: "Gập bụng",
    minutes: '45m',
    calories: '650 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 3,
    imageExercise: <img src={xadon}/>,
    type: 'Thể hình',
    star: '4.5',
    icon: <AiFillStar/>,
    nameExercise: "Gập bụng",
    minutes: '45m',
    calories: '750 Calo',
    description: '....',
    teps: 'Bước 1'
  }
]


const User = () => {
  const {id} = useParams()
  const {user, dispatch} = useContext(AuthContext)

  useEffect(() => {
  },[user])

  console.log(user.foods)

  return (
    <div className='User d-flex flex-column'>
      <div className='info d-flex flex-row'>
        <img src={userImg}/>
        <div className='title-info'>
          <p className='fs-4 fw-bold'>{user.lastFirstName}</p>
          <div className='setting-info d-flex flex-row'>
            <p className='text fs-6 fw-bold'>Sửa hồ sơ</p>
            <img src={settingUser}/>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className='title fs-6 fw-bold'>Kế hoạch của bạn:</p>
      <div className='plan d-flex flex-row'>
        <div className='plan-now d-flex flex-column'>
            <Link className='link' to='/app/detailplan'>
              <p className='fw-bold'>Giảm 10 cân</p>
              <p className='d-flex flex-row justify-content-between'>Bắt đầu<span>10/06/2023</span></p>
              <div className='status fw-bold'>
                Đang thực hiện
              </div>
            </Link>
          </div>
          <div className='Create-plan'>
            <Link to='/app/plan' className='link'>
              <div className='Add d-flex flex-column'>
                <img src={add}/>
                <p className='fs-6 fw-bold'>Tải lên</p>
              </div>
          </Link>
       </div>
        </div>
        <hr></hr>
      <p className='title fs-6 fw-bold'>Món ăn của bạn:</p>
      <div className='food d-flex flex-row'>
      {
        OptionsDetailFood.map(({id, imageFoodDetail, type, star, icon, nameFoodDetail, gam, calories}) => {
          return(
            <div key={id} className='food-menu'>
              <div className='image-food position-relative'>
                {imageFoodDetail}
              </div>
              <div className='detail-food'>
                  <p className='caterogy d-flex flex-row justify-content-end'><span>{star} {icon}</span></p>
                  <p className='caterogy d-flex flex-row justify-content-end'>{type}</p>
                  <p className='food-name fw-bold d-flex flex-row justify-content-between'>{nameFoodDetail}<span>{gam}</span></p>
                  <p className='calo d-flex flex-row justify-content-between'>{calories}<span>Chi tiết <img src={arrow}/></span></p>
                </div>
            </div>
          )
        })
      }
        <div className='Create'>
          <Link to='/app/createfood' className='link'>
            <div className='Add d-flex flex-column'>
              <img src={add}/>
              <p className='fs-6 fw-bold'>Tải lên</p>
            </div>
        </Link>
        </div>
      </div>
      <hr/>
      <p className='title fs-6 fw-bold'>Bài tập của bạn:</p>
      <div className='food d-flex flex-row'>
      {
        OptionsExercise.map(({id, imageExercise, type, star, icon, nameExercise, minutes, calories}) => {
          return(
          <div key={id} className='food-menu'>
            <div className='image-food position-relative'>
              {imageExercise}
            </div>
            <div className='detail-food'>
              <p className='caterogy d-flex flex-row justify-content-end'><span>{star}{icon}</span></p>
              <p className='caterogy d-flex flex-row justify-content-end'>{type}</p>
              <p className='food-name fw-bold d-flex flex-row justify-content-between'>{nameExercise}<span>{minutes}</span></p>
              <p className='calo d-flex flex-row justify-content-between'>-{calories}<span>Chi tiết <img src={arrow}/></span></p>
            </div>
          </div>
          )
        })
      }
       <div className='Create'>
       <Link to='/app/createexercise' className='link'>
          <div className='Add d-flex flex-column'>
            <img src={add}/>
            <p className='fs-6 fw-bold'>Tải lên</p>
          </div>
       </Link>
       
       </div>
      </div>
    </div>
  )
}
export default User
