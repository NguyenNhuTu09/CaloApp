import React, { useState } from 'react'
import './home.css'

import { Link } from 'react-router-dom'

import Chicken2 from '../../assets/Food/Chicken2.jpg'
import Ham from '../../assets/Food/Ham.jpg'
// import Suachua from '../../assets/Food/Sua chua.jpg'
import {AiFillStar} from 'react-icons/ai'


import SaladBoTrung from '../../assets/Food/Salad-bo-trung.jpg'
import SaladRauMam from '../../assets/Food/Salad-rau-thit-bo.jpg'
import Suachua from '../../assets/Food/Sua-chua-trai-cay.jpg';

import jogging from '../../assets/Exercise/Chay bo.jpg'
import gapbung from '../../assets/Exercise/Gap bung.jpg'
import xadon from '../../assets/Exercise/Xa don.jpg'


import userImg from '../../assets/userplan.jpg'
import tuimg from '../../assets/tuimg.jpg'

import arrow from '../../assets/Arrow.png'

import Introduction from '../Introduction/Introduction'
import NavHome from '../NavHome/NavHome'
import HomePage from '../HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const OptionsDetailFood = [
  {
    id: 1,
    imageFoodDetail: <img src={SaladBoTrung}/>,
    type: 'Protein',
    star: '4.5',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Salad Bơ Trứng',
    gam: '400g',
    calories: '700 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 2,
    imageFoodDetail: <img src={SaladRauMam}/>,
    type: 'Protein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Salas rau mầm thịt bò',
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




import Calendar from 'react-calendar'
const Home = () => {
  const [link, setLink] = useState(true)
  function clickLink1(){
    setLink(true)
  }
  function clickLink2(){
    setLink(false)
  }
  return (
    <div className='page-home d-flex flex-column'>

      <div className='nav-home d-flex flex-row'>
        <li className='link_1 nav-link' onClick={clickLink1}>
          <button className='active_link'>
            <a>Giới thiệu</a>
          </button>
        </li>
        <li className='link_2 nav-link' onClick={clickLink2}>
          <button className='active_link'>
            <a>Trang chủ</a>
          </button>
        </li>
      </div>
      {link ? (
        <div className='introduction'>
        Giới thiệu
      </div>  
      ) : (
        
      <div className='Home d-flex flex-column'>
        <div className='header d-flex flex-row'>
          <div className='rank'>
              <p className='fs-4 fw-bold'>Bảng xếp hạng:</p>
              

              <div className='bang-xep-hang d-flex flex-column'>
                <div className='reviews d-flex flex-row border border-dark justify-content-between'>
                  <div className='stt d-flex flex-column border border-dark align-items-center'>
                  <p className='fs-5'>STT</p>
                    <p className='fs-6'>1</p>
                    <p className='fs-6'>2</p>
                    <p className='fs-6'>3</p>
                    <p className='fs-6'>4</p>
                    <p className='fs-6'>5</p>
                    <p className='fs-6'>6</p>
                    <p className='fs-6'>7</p>
                    <p className='fs-6'>8</p>
                    <p className='fs-6'>9</p>
                    <p className='fs-6'>10</p>
                  </div>
                  <div className='name-plan'>
                    
                  </div>
                  <div className='author'>

                  </div>
                </div> 
              </div>
            </div>

          <div className='header-2 d-flex flex-column'>
            <div className='calendar d-flex flex-row'>
                <Calendar/>

                <div className='infor-app d-flex flex-column'>
                  <div className='infor-01 d-flex flex-row'>
                    <img className='tu-img' src={tuimg}/>
                    <div className='d-flex flex-column'>

                      <p className='fs-5 fw-bold'>Nguyễn Như Từ</p>
                      <p className='fs-6'>Người dùng</p>
                    </div>
                    <img className='arr' src={arrow}/>
                  </div>

                  <div className='plan-now d-flex flex-column'>
                    <Link className='link' to='/app/detailplan'>
                      <p className='fw-bold'>Giảm 10 cân</p>
                      <p className='d-flex flex-row justify-content-between'>Bắt đầu<span>10/06/2023</span></p>
                      <div className='status fw-bold'>
                        Đang thực hiện
                      </div>
                    </Link>
                  </div>
                </div>
            </div>
            <p className='fs-6 fw-bold'>Kế hoạch mới trong tuần này</p>
            <div className='news d-flex flex-row '>
                <div className='food-menu'>
                  <div className='image-food position-relative'>
                    <img src={userImg}/>
                  </div>
                  <div className='detail-food'>
                      <p className='caterogy d-flex flex-row justify-content-end'><span>0 <AiFillStar/></span></p>
                      <p className='caterogy d-flex flex-row justify-content-end fw-bold'>7 days Healthy</p>
                      <p className='food-name d-flex flex-row justify-content-between'>Thời gian<span>4 tuần</span></p>
                      <p className='calo d-flex flex-row justify-content-between'>550<span>Chi tiết <img src={arrow}/></span></p>
                  </div>
                </div>
                <div className='food-menu'>
                  <div className='image-food position-relative'>
                    <img src={userImg}/>
                  </div>
                  <div className='detail-food'>
                      <p className='caterogy d-flex flex-row justify-content-end'><span>0 <AiFillStar/></span></p>
                      <p className='caterogy d-flex flex-row justify-content-end fw-bold'>GoHealthy_01</p>
                      <p className='food-name d-flex flex-row justify-content-between'>Thời gian<span>4 tuần</span></p>
                      <p className='calo d-flex flex-row justify-content-between'>550<span>Chi tiết <img src={arrow}/></span></p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className='new-food-exercise d-flex flex-column'>
          <p className='title-fx fs-6 fw-bold'>Món ăn mới trong tuần này:</p>
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
          </div>
          <p className='title-fx fs-6 fw-bold'>Món ăn mới trong tuần này:</p>
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
          </div>
        </div>
        
      </div>
      )
      }


     
      
     

    </div>
  )
}
export default Home
