import React from 'react'
import {BrowserRouter, Router, Route, Link, Outlet} from 'react-router-dom'
import './discover.css'
import {Form, FormGroup} from 'reactstrap'

// import { daysTag, currentDate, prevNextIcon, date, currMonth, currYear, months} from './Calendar.js'

import 'react-calendar/dist/Calendar.css';


import Catuyet from '../../assets/Food/Ca tuyet.jpg'
import Cangu from '../../assets/Food/Ca ngu.jpg'
import Cahoi from '../../assets/Food/Ca hoi.jpg'
import Gatandori from '../../assets/Food/Ga tandoori.jpg'

import {AiFillStar} from 'react-icons/ai'

import {HiOutlineChevronRight} from 'react-icons/hi'

import facebook from '../../assets/Facebook.png'
import google from '../../assets/Google.png'

import Total from '../../assets/Total.png'
import Exer from '../../assets/Exer.png'
import Fire from '../../assets/Fire.png'



import Addplan from '../../assets/addplan.png'
import arrow from '../../assets/Arrow.png'
import Complete from '../../assets/Complete.png'
import Repair from '../../assets/Repair.png'

import jogging from '../../assets/Exercise/Chay bo.jpg'
import gapbung from '../../assets/Exercise/Gap bung.jpg'
import xadon from '../../assets/Exercise/Xa don.jpg'

const OptionsDetailFood = [
  {
    id: 1,
    imageFoodDetail: <img src={Cahoi}/>,
    type: 'Omega-3',
    star: '4.1',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Cá hồi',
    gam: '550',
    calories: '640 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 2,
    imageFoodDetail: <img src={Cangu}/>,
    type: 'Protein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Cá ngừ',
    gam: '300g',
    calories: '450 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 3,
    imageFoodDetail: <img src={Catuyet}/>,
    type: 'Chất đạm',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Cá tuyết',
    gam: '260g',
    calories: '560 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 4,
    imageFoodDetail: <img src={Gatandori}/>,
    type: 'Protein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Gà Tandoori',
    gam: '260g',
    calories: '560 Calo',
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
    nameExercise: "Hít xà đơn",
    minutes: '45m',
    calories: '750 Calo',
    description: '....',
    teps: 'Bước 1'
  }
]



const Discover = () => {
  return (
    <div className='Discover d-flex flex-column'>
    {/* <h2>Xin chào, <span>Nguyễn Như Từ</span></h2> */}
      <div className='plan d-flex flex-row'>
        <div className='detail-day-plan d-flex flex-column'>
          <p className='title-day fs-2 fw-bold'>Ngày thứ 1</p>
          <p className='title-day fs-5 fw-bold'>12/05/2023</p>
          {/* <p className='title-day fs-5 fw-bold'>Bữa ăn: <span>4</span></p>
          <p className='title-day fs-5 fw-bold'>Bài tập: 3</p> */}
          <div className='parameter-day-plan d-flex flex-row justify-content-between'>
            <div className='parameter d-flex flex-column text-center align-items-center'>
              <img src={Total}/>
              <p className='fs-5'>Tổng</p>
              <p className='fs-5 fw-bold'>3500<span> Kcal</span></p>
            </div>
            <div className='parameter d-flex flex-column text-center align-items-center'>
              <img src={Exer}/>
              <p className='fs-5'>Vận động</p>
              <p className='fs-5 fw-bold'>78<span> m</span></p>
            </div>
            <div className='parameter d-flex flex-column text-center align-items-center'>
              <img src={Fire}/>
              <p className='fs-5'>Đốt cháy</p>
              <p className='fs-5 fw-bold'>1300<span> Kcal</span></p>
            </div>
          </div>
        </div>
         
        <div className='my-plan d-flex flex-column'>
          <p className='fs-6 fw-bold'>Kế hoạch của bạn</p>
            <div className='my-plan-01'>
              <div className='plan-now d-flex flex-column'>
                <Link className='link' to='/app/detailplan'>
                  <p className='fw-bold'>Giảm 10 cân</p>
                  <p className='d-flex flex-row justify-content-between'>Bắt đầu<span>10/06/2023</span></p>
                  <div className='status fw-bold'>
                    Đang thực hiện
                  </div>
                </Link>
              </div>


              <div className='add-plan'>
                <Link to='/app/plan'><img src={Addplan}/></Link>
              </div>
            </div>



            <p className='fs-6 fw-bold'>Tiến độ</p>
            <div className='my-plan-02 d-flex flex-row'>
              <div className='day text-center'>
                <p className='fw-bold'>Ngày thứ 1</p>
                <p className='fw-normal'>12/05/2023</p>
              </div>
              <div className='day text-center'>
                <p className='fw-bold'>Ngày thứ 2</p>
                <p className='fw-normar'>13/05/2023</p>
              </div>
              <div className='day text-center'>
                <p className='fw-bold'>Ngày thứ 3</p>
                <p className='fw-normal'>14/05/2023</p>
              </div>
            </div>
        </div>

        <div className='note-day-plan d-flex flex-column'>
          <p className='fs-6 fw-bold'>Ghi chú: </p>
          <textarea class="form-control note" aria-label="With textarea"/>
        </div>
      </div>


      <div className='food-exercise-plan d-flex flex-column'>
          <div className='food d-flex flex-row'>
            <div className='info-meat d-flex flex-column'>
              <p className='title-meat fs-5 fw-bold'>Bữa ăn 1</p>
              <div className='update-meat d-flex flex-row'>
                <img src={Complete}/>
                <p className='fs-6 fw-bold'>Hoàn thành</p>
              </div>
              <div className='update-meat d-flex flex-row'>
                <img src={Repair}/>
                <p className='fs-6 fw-bold'>Chỉnh sửa</p>
              </div>
            </div>
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
          <div className='food d-flex flex-row'>
            <div className='info-meat d-flex flex-column'>
              <p className='title-meat fs-5 fw-bold'>Bài tập ngày hôm nay</p>
              <div className='update-meat d-flex flex-row'>
                <img src={Complete}/>
                <p className='fs-6 fw-bold'>Hoàn thành</p>
              </div>
              <div className='update-meat d-flex flex-row'>
                <img src={Repair}/>
                <p className='fs-6 fw-bold'>Chỉnh sửa</p>
              </div>
            </div>
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
          {/* <div className='news-food d-flex flex-row'>
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
          </div> */}
      </div>


      {/* ====================== LOGIN START ===================== */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="title col-md-10 offset-md-1 text-center">
                    <p className='fs-3 fw-bold'>Đăng nhập</p>
                    <p>Bạn chưa có tài khoản, <span className='fs-6 fw-bold' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Đăng ký</span></p>
                  </div>
                </div>

                <div className='row form-login'>
                  <div className='col-md-10 offset-md-1'>
                    <Form>
                      <FormGroup>
                        <input type="text" class="form-control" placeholder="Tên đăng nhập" />
                      </FormGroup>
                      <FormGroup>
                        <input type="text" class="form-control" placeholder="Mật khẩu" />
                      </FormGroup>
                      <div className='register d-flex flex-row justify-content-between'>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value=""/>
                          <p>Nhớ mật khẩu</p>
                        </div>
                        <div className='col-md-4'>
                          <button className='btn btn-primary'>Đăng nhập<HiOutlineChevronRight/></button>
                        </div>
                        
                      </div>

                    </Form>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-10 offset-md-1'>
                    <p>Đăng nhập với: </p>
                  </div>
                  <div className='fb-gg col-md-10 offset-md-1 d-flex flex-row justify-content-around'>
                    <div className='Facebook d-flex flex-row border border-dark'>
                      <img src={facebook}/>
                      <div className='text text-center'>
                        <p>Facebook</p>
                      </div>
                    </div>
                    <div className='Facebook d-flex flex-row border border-dark'>
                      <img src={google}/>
                      <div className='text text-center'>
                        <p>Google</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div class='modal-footer'></div>
          </div>
        </div>
      </div>
{/* ======================= LOGIN END =================== */}


{/* ======================= REGISTER START ======================== */}
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <button className='btn btn-primary' data-bs-target="#staticBackdrop" data-bs-toggle="modal" data-bs-dismiss="modal">Trở về đăng nhập</button>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="container-fluid">
                <div class="row">
                  <div class="title col-md-10 offset-md-1 text-center">
                    <p className='fs-3 fw-bold'>Đăng ký</p>
                  </div>
                </div>

                <div className='row form-login'>
                  <div className='col-md-10 offset-md-1'>
                    <Form>
                      <FormGroup>
                        <p>Họ và tên: </p>
                        <input type="text" class="form-control"/>
                      </FormGroup>
                      <div className='d-flex flex-row justify-content-between'>
                        <FormGroup>
                          <p>Tuổi: </p>
                          <input type="number" class="form-control w-dis-age"/>
                        </FormGroup>
                        <FormGroup>
                          <p>Ngày sinh: </p>
                          <input type="date" class="form-control w-dis-date"/>
                        </FormGroup>
                      </div>
                      <FormGroup>
                        <p>Tên đăng nhập</p>
                        <input type="text" class="form-control"/>
                      </FormGroup>
                      <FormGroup>
                        <p>Số điện thoại</p>
                        <input type="text" class="form-control"/>
                      </FormGroup>
                      <FormGroup>
                        <p>Địa chỉ</p>
                        <input type="text" class="form-control"/>
                      </FormGroup>
                      <FormGroup>
                        <p>Email</p>
                        <input type="text" class="form-control"/>
                      </FormGroup>
                      <FormGroup>
                        <p>Mật khẩu</p>
                        <input type="password" class="form-control"/>
                      </FormGroup>
                      <div className='register d-flex flex-row justify-content-between'>
            
                        <div className='col-md-4'>
                          <button className='btn btn-primary'>Đăng ký<HiOutlineChevronRight/></button>
                        </div>
                        
                      </div>

                    </Form>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* =============================== REGISTER END ===================== */}

      <Outlet/>
    </div>
  )
}
export default Discover
