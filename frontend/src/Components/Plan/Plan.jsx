import React, { useEffect, useState } from 'react'
import './plan.css'
import {IoIosArrowDown} from 'react-icons/io';
import { Link } from 'react-router-dom';

import {MdOutlinePostAdd} from 'react-icons/md'
import AddPlan from '../../assets/Add.png'
import add from '../../assets/addplan.png'
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

import {BsSearch} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

import arrow from '../../assets/Arrow.png'
import Delete from '../../assets/Delete.png'

import exit from '../../assets/Exit-menu.png'

import { BASE_URL } from '../Utils/config.js'


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
  {
    id: 4,
    imageFoodDetail: <img src={Catuyet}/>,
    type: 'Protein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Cá tuyết',
    gam: '400g',
    calories: '560 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 5,
    imageFoodDetail: <img src={Chuoi}/>,
    type: 'Chất xơ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Chuối',
    gam: '260g',
    calories: '560 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
    imageFoodDetail: <img src={Thitbo}/>,
    type: 'Chất đạm',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Thịt bò',
    gam: '260g',
    calories: '560 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 9,
    imageFoodDetail: <img src={Hanhnhan}/>,
    type: 'Chất xơ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Hạnh nhân',
    gam: '150',
    calories: '290 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 10,
    imageFoodDetail: <img src={Bachtuoc}/>,
    type: 'Chất đạm',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Bạch tuộc',
    gam: '300g',
    calories: '560 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 11,
    imageFoodDetail: <img src={Bibau}/>,
    type: 'Chất xơ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Bí bầu',
    gam: '300g',
    calories: '380 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 12,
    imageFoodDetail: <img src={Khoailang}/>,
    type: 'Chất xơ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Khoai lang',
    gam: '300g',
    calories: '460 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 13,
    imageFoodDetail: <img src={Carophi}/>,
    type: 'Chất đạm',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Cá rô phi',
    gam: '300g',
    calories: '380 Calo',
    description: '....',
    teps: 'Bước 1'
  },
]


const Plan = () => {

  const [confirm, setConfirm] = useState('')
  const [foodConfirm, setFoodConfirm] = useState([])
  const [stateConfirm, setStateConfirm] = useState(Boolean)

  const [Foods, setFoods] = useState([])
  const fetchData = async() => {
    const response = await fetch(`${BASE_URL}/foods/`)
    const data = await response.json()
    setFoods(data.data)
  }
  let k = []

  function testConfirm(e){
    setConfirm(e)
    for(let i = 0; i < Foods.length; i++){
      if(Foods[i]._id === confirm){
        setFoodConfirm(Foods[i])
        setStateConfirm(true)
      }else{
        setStateConfirm(false)
      }
    }
  }

  const [selectedFoods, setSelectedFoods] = useState([]);

  // const handleFoodClick = (foodId) => {
  //   const index = selectedFoods.indexOf(foodId);
  //   if (index === -1) {
  //     setSelectedFoods([...selectedFoods, foodId]);
  //   } else {
  //     const newSelectedFoods = [...selectedFoods];
  //     newSelectedFoods.splice(index, 1);
  //     setSelectedFoods(newSelectedFoods);
  //   }
  // };

  const handleFoodClick = (foodId) => {
    const food = Foods.find((f) => f._id === foodId);
    setSelectedFoods([...selectedFoods, food]);
    setStateConfirm(true)
  };

  const handleDeleteClick = (foodId) => {
    if(selectedFoods.length == 1){
      setStateConfirm(false)
    }
    const newSelectedFoods = selectedFoods.filter((food) => food._id !== foodId);
    setSelectedFoods(newSelectedFoods);
  };



  
  
  useEffect(() => {
    fetchData()
  }, [])
  console.log(Foods)
  // console.log(foodConfirm)
  console.log(selectedFoods)
  // console.log(confirm)
  console.log(stateConfirm)
  return (
    <div className='Plan d-flex flex-row justify-content-between'>
      <div className='create-food d-flex flex-column'>
        {/* Số lượng bữa ăn + bài tập */}
        <div className='food-day-note d-flex flex-row justify-content-between'>
          <div className='food-day d-flex flex-column justify-content-between'>
            <h2>Ngày thứ 1</h2>
            <div className='day d-flex flex-row'>
              <div className='day-one'>
                <img src={add} />
              </div>
              <button type="button" class="btn btn-info">Lưu</button>
            </div>
          </div>
          <div className='note'>
            <div class="input-group">
              <textarea class="form-control" id="textAreaExample" rows="6" placeholder='Ghi chú'></textarea>
            </div>
          </div>
        </div>
        {/* ==================== */}


        {/* Lựa chọn thực đơn và bài tập */}
        <p className='fs-6 fw-bold'>Thực đơn cho bữa thứ <span>1</span>:</p>
        <div className='food d-flex flex-row'>
          <div className='food-1'>
            <img src={add} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
          <button type="button" class="btn btn-info">Lưu</button>
        </div>
        <p className='fs-6 fw-bold'>Thực đơn cho bữa thứ <span>2</span>:</p>
        <div className='food d-flex flex-row'>
          <div className='food-1'>
            <img src={add} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
          <button type="button" class="btn btn-info">Lưu</button>
        </div>
        <p className='fs-6 fw-bold'>Thực đơn cho bữa thứ <span>3</span>:</p>
        <div className='food d-flex flex-row'>
          <div className='food-1'>
            <img src={add} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
          <button type="button" class="btn btn-info">Lưu</button>
        </div>
        <p className='fs-6 fw-bold'>Thực đơn cho bữa thứ <span>4</span>:</p>
        <div className='food d-flex flex-row'>
          <div className='food-1'>
            <img src={add} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
          <button type="button" class="btn btn-info">Lưu</button>
        </div>
        <p className='fs-6 fw-bold'>Thực đơn cho bữa thứ <span>5</span>:</p>
        <div className='food d-flex flex-row'>
          <div className='food-1'>
            <img src={add} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
          <button type="button" class="btn btn-info">Lưu</button>
        </div>
        <p className='fs-6 fw-bold'>Thực đơn cho bữa thứ <span>6</span>:</p>
        <div className='food d-flex flex-row'>
          <div className='food-1'>
            <img src={add} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
          <button type="button" class="btn btn-info">Lưu</button>
        </div>

        <p className='fs-6 fw-bold'>Bài tập cho ngày hôm nay:</p>
        <div className='exercise d-flex flex-row'>
          <div className='exercise-1'>
            <img src={add} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
          <button type="button" class="btn btn-info">Lưu</button>
        </div>
        
        {/* ======================== */}

      </div>







      <div className='day-plan d-flex flex-column justify-content-between'>
        {/* Chọn số ngày thực hiện kế hoạch */}
        <div className='d-flex flex-column align-items-center'>
          <li>
            {/* <input class="form-check-input mt-0" type="checkbox" value=""/> */}
            <img src={Delete}/>
            <p className='fw-bold fs-6'>Ngày thứ 1<span className='fw-normal'>.... Calo</span></p>
          </li>
          <img src={AddPlan}/>

            
        </div>
        {/* ==================== */}

        <div className='btn-create d-flex flex-column'>
            <input type="text" class="form-control" placeholder="Tên kế hoạch" aria-describedby="addon-wrapping"/>
            <input type="date" class="form-control" placeholder="Tên kế hoạch" aria-describedby="addon-wrapping"/>
            <button type="button" class="btn btn-info">Tạo kế hoạch</button>
        </div>
      </div>


       {/*============== MENU FOOD EXERCISE MODAL ============ */}
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-fullscreen modal-dialog-scrollable">
            <div class="modal-content">
              {/* <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> */}
              <div class='modal-body'>
                <div class="container-fluid d-flex flex-column">
                  <div class="row">
                    <div className='col-md-1'>
                      <div class="dropdown d-flex flex-row align-items-center" data-bs-dismiss="modal" aria-label="Close">
                       <img src={exit}/>
                       <p className='fs-6 fw-bold'>Thoát</p>
                      </div>
                    </div>
                    <div class="col-md-4 ms-auto">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span class="input-group-text"><BsSearch/></span>
                      </div>
                    </div>
                  </div>
                  <hr></hr>


                  <div className='menu-list d-flex flex-row'>
                    <div className='nav d-flex flex-column'>
                        <p className='fs-4 fw-bold'>Phân loại theo:</p>
                        <div className='calo d-flex flex-column'>
                          <p className='text fs-6 fw-bold'>Lượng calo:</p>
                          <input type="range" class="form-range" id="customRange1"/>
                          <div className='d-flex flex-row'>
                            <p className='from'>Từ:</p>
                            <input type="text" class="form-control"/>
                            <p className='to'>Đến:</p>
                            <input type="text" class="form-control"/>
                          </div>
                        </div>
                        <hr/>
                      <div className='country d-flex flex-column'>
                        
                        <p className='text fs-6 fw-bold d-flex flex-row justify-content-between'>Quốc gia: <IoIosArrowDown className='icons'/></p>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Việt Nam</p>
                        </div>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Thái Lan</p>
                        </div>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Nhật Bản</p>
                        </div>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Hàn Quốc</p>
                        </div>
                      </div>
                      <hr/>
                      <div className='provide d-flex flex-column'>
                        <p className='text fs-6 fw-bold d-flex flex-row justify-content-between'>Cung cấp: <IoIosArrowDown className='icons'/></p>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Protein</p>
                        </div>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Chất xơ</p>
                        </div>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Chất đạm</p>
                        </div>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Canxi</p>
                        </div>
                      </div>
                      <hr/>
                      <div className='rank d-flex flex-column'>
                        <p className='text fs-6 fw-bold d-flex flex-row justify-content-between'>Loại: <IoIosArrowDown className='icons'/></p>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Đồ uống</p>
                        </div>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Nguyên liệu</p>
                        </div>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Thực phẩm chức năng</p>
                        </div>
                        <div className='d-flex flex-row'>
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <p>Đồ ăn nhanh</p>
                        </div>
                      </div>

                    </div>
                    <div className='food row'>
                      {
                        Foods.map(({_id, imageFood, Type, nameFood, totalCalories, ration, reviews}) => {
                          return(
                            <div key={_id} className='food-menu'>
                              <div className='image-food position-relative'>
                                <img  src={imageFood}/>
                              </div>
                              <div className='detail-food'>
                                <p className='caterogy d-flex flex-row justify-content-end'>
                                {reviews}
                                  <span><AiFillStar/></span>
                                </p>
                                <p className='caterogy d-flex flex-row justify-content-end'>{Type}</p>
                                <p className='food-name fw-bold fs-6 d-flex flex-row justify-content-between'>{nameFood} <span>{ration} g</span></p>
                                <div className='calo d-flex flex-row justify-content-between'>{totalCalories} Calo

                                <button className='options'
                                  onClick={() => handleFoodClick(_id)}
                                  >Chọn
                                </button>

                                <Link className='link' to={`/app/menu/${_id}`}>
                                  Chi tiết <img src={arrow}/>
                                </Link>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                      
                    </div>
                  </div>

                  <div className='food-user-confirm d-flex flex-row align-items-center'>

                    {
                      stateConfirm ? (
                        selectedFoods.map(({_id, imageFood, Type, nameFood, totalCalories, ration, reviews}) => {
                          return(
                            <div key={_id} className='food-menu'>
                              <div className='image-food position-relative'>
                                <img  src={imageFood}/>
                              </div>
                              <div className='detail-food'>
                                <p className='caterogy d-flex flex-row justify-content-end'>
                                {reviews}
                                  <span><AiFillStar/></span>
                                </p>
                                <p className='caterogy d-flex flex-row justify-content-end'>{Type}</p>
                                <p className='food-name fw-bold fs-6 d-flex flex-row justify-content-between'>{nameFood} <span>{ration} g</span></p>
                                <div className='calo d-flex flex-row justify-content-between'>{totalCalories} Calo

                                <button onClick={() => handleDeleteClick(_id)}>Xóa</button>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      ) : (
                        <div className='notes'>Không có dữ liệu</div>
                      )
                    }

                    <button className='btn-save'>
                      Xác nhận
                    </button>

                  </div>

                </div>
              </div>
        
            </div>
          </div>
        </div>
        {/* =============== END MENU EXERCISE MODAL ============= */}



     
    </div>
  )
}

export default Plan
