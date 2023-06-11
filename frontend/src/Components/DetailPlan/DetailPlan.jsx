import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './detailPlan.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// import {
//   OptionsDay,
//   OptionsDetailFood,
//   OptionsExercise,
//   OptionsFoodDay
// } from './Data.js'

import {SlOptionsVertical} from 'react-icons/sl'
import {RiMenuUnfoldFill} from 'react-icons/ri'
import {AiFillStar} from 'react-icons/ai'

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



import User from '../../assets/User.png'
import arrow from '../../assets/Arrow.png'
import addday from '../../assets/Add.png'
import addplan from '../../assets/addplan.png'
import Delete from '../../assets/Delete.png'


import jogging from '../../assets/Exercise/Chay bo.jpg'
import gapbung from '../../assets/Exercise/Gap bung.jpg'

const OptionsFoodDay = [
  {
    id: 1,
    nameFood: "Bữa ăn 1",
    calo: '500 Calo',
    image: <SlOptionsVertical/>
  },
  {
    id: 2,
    nameFood: "Bữa ăn 2",
    calo: '450 Calo',
    image: <SlOptionsVertical/>
  },
  {
    id: 3,
    nameFood: "Bữa ăn 3",
    calo: '650 Calo',
    image: <SlOptionsVertical/>
  },
  {
    id: 4,
    nameFood: "Bữa ăn 4",
    calo: '350 Calo',
    image: <SlOptionsVertical/>
  },
]

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
    gam: '400g',
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
    gam: '200g',
    calories: '250 Calo',
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
    calories: '700 Calo',
    description: '....',
    teps: 'Bước 1'
  }
]

const OptionsDay = [
  {
    id: 1,
    day: '1',
    calories: 3200
  },
  {
    id: 2,
    day: '2',
    calories: 3200
  },
  {
    id: 3,
    day: '3',
    calories: 3200
  },
  {
    id: 4,
    day: '4',
    calories: 3200
  },
  {
    id: 5,
    day: '5',
    calories: 3200
  },
  {
    id: 6,
    day: '6',
    calories: 3200
  },
  {
    id: 7,
    day: '7',
    calories: 3200
  }
]

const DetailPlan = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className='DetailPlan d-flex flex-column'>
      <div className='day-note-user d-flex flex-row justify-content-between'>
        {/* List bua an cua hom nay */}
        <div className='day d-flex flex-column justify-content-between'>
          <h2>Ngày thứ 1</h2>

          <div className='day-plan d-flex'>
          {
            OptionsFoodDay.map(({id, nameFood, calo, image}) => {
              return(
                <div key={id} className='day-calo d-flex flex-row justify-content-between'>
                  <div className='title'>
                    <p className='fw-bold fs-6'>{nameFood}</p>
                    <p className='fw-normal fs-6'>{calo}</p>
                  </div>
                  <div data-bs-toggle="dropdown" aria-expanded="false">
                    {image}
                  </div>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item">Xóa</a></li>
                    <li><a class="dropdown-item">Chi tiết</a></li>
                  </ul>
                </div>
              )
            })
          }
          <div className='add-day-plan d-flex flex-column align-items-center'>
            <img src={addplan}/>
          </div>
          </div>
        </div>
        {/* Ghi chu */}
        <div className='note'>
          <div class="input-group">
            <textarea class="form-control" id="textAreaExample" rows="5" placeholder='Ghi chú'></textarea>
          </div>
        </div>

        {/* Mot vai thong tin ve User */}
        <div className='user'>

        </div>
      </div>


      {/* Danh sach mon an + bài tập cua tung bua */}
      <div className='d-flex flex-row justify-content-between'>
        <div className='food-day-plan d-flex flex-column'>

        {/* Click từng bữa ăn, chỉ thay đổi thưc đơn */}
        <p className='title fs-6 fw-bold'>Thực đơn của bữa này: </p>
          <div className='food-plan d-flex flex-row'>
          {
            OptionsDetailFood.map(({id, imageFoodDetail, type, star, icon, nameFoodDetail, gam, calories}) => {
              return(
                <div key={id} className='food-menu'>
                <div className='image-food position-relative'>
                  {imageFoodDetail}
                </div>
                <div className='detail-food'>
                    <p className='caterogy d-flex flex-row justify-content-end'>
                      <span>{star} {icon}</span>
                    </p>
                    <p className='caterogy d-flex flex-row justify-content-end'>{type}</p>
                    <p className='food-name fs-6 fw-bold d-flex flex-row justify-content-between'>{nameFoodDetail}<span>{gam}</span></p>
                    <p className='calo d-flex flex-row justify-content-between'>{calories}
                      <Link className='link' to='/app/detailplan/detailfood'><span>Chi tiết <img src={arrow}/></span>
                      </Link>
                    </p>
                  </div>
            </div>
              )
            })
          }
          <div className='update-food d-flex flex-row align-items-center'>
            <img src={addplan}/>
          </div>
          <button className='btn-update-food btn-primary'>Lưu</button>
          </div>
          {/* ==================== */}

          {/* Bài tập của cả ngày hôm đó */}
          <p className='title fs-6 fw-bold'>Bài tập của ngày hôm nay</p>
          
          <div className='exercise-plan d-flex flex-row'>
          {
            OptionsExercise.map(({id, imageExercise, type, star, icon, nameExercise, minutes, calories}) => {
              return(

              <div className='exercise'>
                <div key={id} className='image-exercise  position-relative'>
                  {imageExercise}
                </div>
                <div className='detail-exercise'>
                  <p className='caterogy d-flex flex-row justify-content-end'><span>{star}{icon}</span></p>
                  <p className='caterogy d-flex flex-row justify-content-end'>{type}</p>
                  <p className='food-name fs-6 fw-bold d-flex flex-row justify-content-between'>{nameExercise}<span>{minutes}</span></p>
                  <p className='calo d-flex flex-row justify-content-between'>-{calories}<span>Chi tiết <img src={arrow}/></span></p>
                </div>
              </div>
              )
            })
          }
          <div className='update-food d-flex flex-row align-items-center'>
            <img src={addplan}/>
          </div>
          <button className='btn-update-food btn-primary'>Lưu</button>
          </div>

          {/* ============================= */}
        </div>


        <div className='day-detail-plan d-flex flex-column'>
          <div className='today-plan d-flex flex-column'>
            <div className='date d-flex flex-row justify-content-between'>
              <p className='fs-6 fw-bold'>Mon, Aug 31</p>
              <p className='fw-normal'>3200 Calo</p>
            </div>
            <div className='index d-flex flex-row justify-content-between'>
              <div className='text-center'>
                <p className='fs-6 fw-bold'>12</p>
                <p>Món ăn</p>
              </div>

              <div className='text-center'>
                <p className='fs-6 fw-bold'>1200</p>
                <p>Calo đốt cháy</p>
              </div>

              <div className='text-center'>
                <p className='fs-6 fw-bold'>120m</p>
                <p>Tập luyện</p>
              </div>
                
              
            </div>
          </div>
          
          <div className='day-plan d-flex flex-column'>
            {
              OptionsDay.map(({id, day, calories})=> {
                return(
                  <li key={id}>
                    {/* <input class="form-check-input mt-0" type="checkbox" value=""/> */}
                    <img src={Delete}/>
                    <p className='fw-bold fs-6'>Ngày thứ {day}<span className='fw-normal'>{calories}</span> Calo</p>
                  </li>
                )
              })
            }
            <div className='addday'>
              <img src={addday}/>
            </div>
          </div>
          <div className='btn-update d-flex flex-column align-items-center'>
            <button className='btn btn-info'>Cập nhật</button>
          </div>
        </div>
      </div>


       {/*============== DETAIL FOOD MODAL ============ */}
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              {/* Nội dung */}
              <div class="modal-body d-flex flex-column">
                <div className='container-fluid'>
                  <div className='row title-food'>
                    <div class="col-md-4">
                      <img src={Chicken2} class="rounded float-start img-thumbnail"/>
                    </div>
                    <div className='col-md-5'>
                      <h2 className='fw-bold fs-3'>Ức gà</h2>
                      <p className='fs-6 fw-bold'>Cung cấp:  <span>Protein</span></p>
                      <p className='fs-6 fw-bold'>Khẩu phần:  <span>400</span>g</p>
                      <p className='fs-6 fw-bold'>Tổng lượng Calo:  <span>700 </span>Calo</p>
                      <p className='fs-6 fw-bold'>Mô tả:  <span className='fw-normal'>........................................
                      ..........................................
                      .........................................</span></p>
                    </div>
                  </div>

                  <div class="row handle-food">
                    <div class="col">
                        <p className='fs-6 fw-bold'>Hướng dẫn chế biến:</p>
                        <p className='fs-6'>Bước 1:</p>
                        <p className='fs-6'>Bước 2:</p>
                        <p className='fs-6'>Bước 3:</p>
                        <p className='fs-6'>Bước 4:</p>
                        <p className='fs-6'>Bước 5:</p>
                        
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row comment">
                    <div className='row user-comment'>
                      <div class="col-md-1">
                          <img src={User}/>
                      </div>
                      <div class="col">
                        <li>
                          <AiFillStar/>
                          <AiFillStar/>
                          <AiFillStar/>
                          <AiFillStar/>
                          <AiFillStar/>
                        </li>
                        <p className='fs-6 fw-bold'>Nguyễn Thanh Sang</p>
                        <p>Hiệu quả cho dân tập thể hình</p>
                      </div>
                    </div>

                    <div className='row user-comment'>
                      <div class="col-md-1">
                          <img src={User}/>
                      </div>
                      <div class="col">
                        <li>
                          <AiFillStar/>
                          <AiFillStar/>
                          <AiFillStar/>
                        </li>
                        <p className='fs-6 fw-bold'>Nguyễn Như Từ</p>
                        <p>Hiệu quả cho dân tập thể hình</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* ======= END ===== */}

              <div class="modal-footer">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    placeholder='Nhập ý kiến của bạn!!'
                  />
                  <span class="input-group-text" id="inputGroup-sizing-default"><AiFillStar className='icons'/></span>
                  <span class="input-group-text" id="inputGroup-sizing-default"><AiFillStar className='icons'/></span>
                  <span class="input-group-text" id="inputGroup-sizing-default"><AiFillStar className='icons'/></span>
                  <span class="input-group-text" id="inputGroup-sizing-default"><AiFillStar className='icons'/></span>
                  <span class="input-group-text" id="inputGroup-sizing-default"><AiFillStar className='icons'/></span>
                  <button type="button" class="btn btn-primary">Đăng</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* =============== END DETAIL FOOD MODAL ============= */}
      
    </div>
  )
}
export default DetailPlan
