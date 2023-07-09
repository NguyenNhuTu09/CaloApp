import React from 'react'
import './home.css'

import { Link } from 'react-router-dom'

import Chicken2 from '../../assets/Food/Chicken2.jpg'
import Ham from '../../assets/Food/Ham.jpg'
// import Suachua from '../../assets/Food/Sua chua.jpg'
import {AiFillStar} from 'react-icons/ai'

// lần nào cũng xin cơ hội
// cơ hội đó..
// chỉ có 2 cái đồ án về Web, và học tiếng Anh, không đâu vào đâu.....
// 3 tháng trời không có lấy một chữ về Tiếng Anh, 2 cái đồ án thì chỉ có giao diện, xong rồi tự mãn .....
// Đồ Án 1, nguy cơ là sắp rớt.....


// vậy mà m từng nói rằng kỳ này là cơ hội để m chứng minh bản thân ????
// chứng minh đi ?????
import SaladBoTrung from '../../assets/Food/Salad-bo-trung.jpg'
import SaladRauMam from '../../assets/Food/Salad-rau-thit-bo.jpg'
import Suachua from '../../assets/Food/Sua-chua-trai-cay.jpg';

import jogging from '../../assets/Exercise/Chay bo.jpg'
import gapbung from '../../assets/Exercise/Gap bung.jpg'
import xadon from '../../assets/Exercise/Xa don.jpg'


import userImg from '../../assets/userplan.jpg'
import tuimg from '../../assets/tuimg.jpg'

import arrow from '../../assets/Arrow.png'


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
  return (
    <div className='Home d-flex flex-column'>
      <div className='header d-flex flex-row'>
        {/* <Calendar/> */}
        <div className='rank'>
            <p className='fs-4 fw-bold'>Bảng xếp hạng:</p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">TOP</th>
                  <th scope="col">Tên kế hoạch</th>
                  <th scope="col">Tác giả</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>7 days Healthy</td>
                  <td>@Tu_admin_01</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Thornton</td>
                  <td>@tu_1909</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>@TU_1909</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>10 days Healthy</td>
                  <td>@tu_admin_01</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>10 days Healthy</td>
                  <td>@tu_admin_02</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>GoHealthy_01</td>
                  <td>@ThanhSang</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>GoHealthy_02</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Firee</td>
                  <td>@tu_1909</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Giảm cân chuẩn</td>
                  <td>@tw</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
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
          {/* {
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
          } */}
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
export default Home
