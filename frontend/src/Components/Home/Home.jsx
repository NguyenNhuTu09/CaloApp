import React, { useState } from 'react'
import './home.css'

import { NavLink, Link } from 'react-router-dom'

import { Container, Col, Row } from 'reactstrap'

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

import {IoIosCreate} from 'react-icons/io'
import {GrPlan} from 'react-icons/gr'
import {MdPendingActions} from 'react-icons/md';
import {GiSettingsKnobs} from 'react-icons/gi'


import Introduction from '../Introduction/Introduction'
import NavHome from '../NavHome/NavHome'
import HomePage from '../HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import logo from '../../assets/LogoTHF.png'
import video from '../../assets/ronaldo-2.mp4'

import imageronaldo from '../../assets/title-ronaldo.jpg'
import image1 from '../../assets/title-image-1.jpg'
import image2 from '../../assets/title-image-2.jpeg'

import logoTHF from '../../assets/LogoTHF.png'
import logo1 from '../../assets/logo-1.png'
import logo2 from '../../assets/logo-2.png'
import logo3 from '../../assets/logo-3.png'
import logo4 from '../../assets/logo-4.png'

import image3 from '../../assets/IMG_13755-cropped.jpg'

import testfood from '../../assets/test-food.jfif'



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
        <li className='nav-link' onClick={clickLink1}>
          <button className={navClass => navClass.isActive ? 'active_link' : ''}>
            <a>
             Giới thiệu
            </a>
          </button>
        </li>
        <li className='nav-link' onClick={clickLink2}>
          <button className={navClass => navClass.isActive ? 'active_link' : ''}>
            <a>Trang chủ</a>
          </button>
        </li>
      </div>
      {link ? (
        <div className='introduction d-flex flex-column'>


          <div className='title d-flex flex-row justify-content-center'>
            <div className='title-logo d-flex flex-column'>
              <div className='tieude d-flex flex-row align-items-center'>
                <img src={logoTHF}/>
                <p className='fs-1 fw-bold'>TITFitness</p>
              </div>

              <p className='title-thf fs-4 fw-bold'>Healthy Habits Today for a Better Tomorrow</p>
              <p className='title-thf fs-5 fw-normal'>Thay đổi cuộc sống của bạn với lối sống lành mạnh</p>
              <p className='title-thf fs-5 fw-bold'>Chào mừng bạn đến với T.H.F</p>

              
            </div>

            <div className='title-video d-flex flex-row justify-content-center'>
              <div className='title-1'>
                <img src={imageronaldo}/>
              </div>

              <div className='title-2'>
                <img src={image1}/>
              </div>

              <div className='title-3'>
                <img src={image2}/>
              </div>
            </div> 
          </div>

          <div className='logo-four d-flex flex-column align-items-center'>
            <p className='fs-5 fw-bold'>4 mục tiêu chính của T.H.F</p>
            <div className='d-flex flex-row'>

              <div className='logo-1 d-flex flex-column align-items-center'>
                  <img src={logo1}/>
                  <p>Tập luyện</p>
                </div>
                <div className='logo-1 d-flex flex-column align-items-center'>
                  <img src={logo2}/>
                  <p>Tạo kế hoạch</p>
                </div>
                <div className='logo-1 d-flex flex-column align-items-center'>
                  <img src={logo3}/>
                  <p>Học tập</p>
                </div>
                <div className='logo-1 d-flex flex-column align-items-center'>
                  <img src={logo4}/>
                  <p>Dinh dưỡng</p>
                </div>
            </div>
          </div>


            <div className='intro-web-1 d-flex flex-row justify-content-between'>
              <div className='intro-web d-flex flex-column'>
              <p className='fs-5 fw-bold'>Khám phá thực đơn Healthy của T.H.F</p>
              <p className='note'>Cung cấp cho bạn kiến thức về cách chế biến các món ăn tốt cho sức khỏe</p>
                <p className='number-1 fs-6 fw-bold'>1</p>
                <p className='tit-1 fs-6 fw-bold'>Thực đơn phong phú</p>
                <p className='note'>Gồm các món ăn healthy đơn giản, phù hợp với người Việt Nam. Tránh xa đồ ăn nhanh, thực phẩm chứa nhiều đường. 
                Tối ưu lượng Calo của thực đơn.</p>
                <p className='number-2 fs-6 fw-bold'>2</p>
                <p className='tit-1 fs-6 fw-bold'>Xác định lượng calo của từng món ăn</p>
                <p className='note'>Có đơn vị cụ thể của các thành phần tạo ra món ăn trong thực đơn, lượng Calo của thành phần, cách chế biến, tác giả đã
                tạo ra.</p>
                <p className='number-3 fs-6 fw-bold'>3</p>
                <p className='tit-1 fs-6 fw-bold'>Các bài tập thể hình hiệu quả</p>
                <p className='note'>Phân chia thời gian tập luyện của các bài tập khác khau, có chi tiết lượng Calo đốt cháy trong một khoảng thời gian nhất định.</p>
              </div>
              <div className='intro-image'>
                <img src={image3}/>
              </div>
            </div>

          <div className='intro-web-2 d-flex flex-column'>
            <p className='intro-title fs-5 fw-bold'>Kế hoạch thực hiện</p>
            <div className='intro-plan d-flex flex-row justify-content-between'>
              <div className='intro-plan-1 d-flex flex-column'>
                <p className='fs-4 icons'><IoIosCreate/></p>
                <p className='text-icons fs-6 fw-bold'>Đo chỉ số</p>
                <p className='note-icons'>Xác định tình trạng cơ thể trước khi bắt đầu.</p>
              </div>

              <div className='intro-plan-2 d-flex flex-column'>
                <p className='fs-4 icons'><GrPlan/></p>
                <p className='text-icons fs-6 fw-bold'>Tạo kế hoạch</p>
                <p className='note-icons'>Dựa vào bài tập, thực đơn, tạo ra kế hoạch cho riêng bạn.</p>
              </div>

              <div className='intro-plan-3 d-flex flex-column'>
                <p className='fs-4 icons'><MdPendingActions/></p>
                <p className='text-icons fs-6 fw-bold'>Bắt đầu thực hiện</p>
                <p className='note-icons'>Ghi rõ các vấn đề, khó khăn đang gặp phải</p>
              </div>

              <div className='intro-plan-4 d-flex flex-column'>
                <p className='fs-4 icons'><GiSettingsKnobs/></p>
                <p className='text-icons fs-6 fw-bold'>Trao đổi</p>
                <p className='note-icons'>Chỉnh sửa, cập nhật kế hoạch, giải quyết khó khăn</p>
              </div>


            </div>
          </div>


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
