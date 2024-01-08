import React, { useEffect, useState, useContext, useTransition } from 'react'
import './plan.css'
import {IoIosArrowDown} from 'react-icons/io';
import { Link} from 'react-router-dom';
import { Form, Nav } from 'reactstrap';

import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx';

import axios from 'axios'

import { useNavigate, useLocation } from 'react-router-dom'

import AddPlan from '../../assets/Add.png'
import add from '../../assets/addplan.png'
import delete1 from '../../assets/Delete.png'

import {BsSearch} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

import arrow from '../../assets/Arrow.png'
import Delete from '../../assets/Delete.png'

import exit from '../../assets/Exit-menu.png'
import { AuthContext } from '../../Context/AuthContext';

import { BASE_URL } from '../Utils/config.js'



const Plan = () => {

  const {user, dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  // Xử lý tạo Plan
  
  const [startDayPlan, setStartDayPlan] = useState('')
  const [endDayPlan, setEndDayPlan] = useState('')

  const [plan, setPlan] = useState([])
  const [dayPlan, setDayPlan] = useState([])
  

  const [credentials, setCredentials] = useState({
        namePlan: undefined,
        startPlan: undefined,
        endPlan: undefined,
        author: user._id
  })

 
  const handleChange = (e) => {
    if(e.target.id == "startPlan"){
      setStartDayPlan(new Date(e.target.value))
    } else if(e.target.id == 'endPlan'){
      setEndDayPlan(new Date(e.target.value))
    }
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value }))
  }


  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
         const res = await fetch(`${BASE_URL}/plan/user/${user._id}`, {
              method: 'post',
              headers: {
                   'content-type':'application/json',
              },
              body: JSON.stringify(credentials)
         })
         const result = await res.json()

         if(!res.ok){
              alert(result.message)
         }else if(res.ok){
              alert("Tạo kế hoạch hoàn tất")
              dispatch({ 
                type: 'CREATE_PLAN_SUCCESS',
                payload: {
                  user: result.user, 
                  plan: result.data._id, 
                },
              });
              $('#staticBackdrop').modal('hide'); 
              navigate(`/app/user/${user._id}/plan/${result.data._id}`)  

              fetchCreatePlan(result.data._id)

              
          }
          
    }catch(error){
         alert(error.message)
    }
  }
  console.log(plan)
  console.log(dayPlan)




  const [stateConfirm, setStateConfirm] = useState(Boolean)
  const [Foods, setFoods] = useState([])
  const [foodUser, setFoodUser] = useState([])


  
  const fetchData = async() => {
    const response = await fetch(`${BASE_URL}/foods/`)
    const data = await response.json()
    setFoods(data.data)
    let k = []
    for(let i = 0; i < user.foods.length; i++){
      const response_2 = await fetch(`${BASE_URL}/foodsuser/${user.foods[i]}`)
      const data_2 = await response_2.json()
      k.push(data_2.data)
    }
    setFoodUser(k)
  }

  const [dPlan, setDPlan] = useState([]) 

  const fetchCreatePlan = async(url) => {
    const res = await fetch(`${BASE_URL}/plan/${url}/`)
    const data = await res.json()
    let dplan = []
    for(let i = 0; i < data.data.dayPlan.length; i++){
      const res_2 = await fetch(`${BASE_URL}/dayplan/${data.data.dayPlan[i]}/`)
      const data_2 = await res_2.json()
      dplan.push(data_2.data)
    }
    setDPlan(dplan)
    
  }
  console.log(dPlan)

  const [selectedFoods, setSelectedFoods] = useState([]);
  const [test, setTest] = useState([])


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


  const handleDeleteClick2 = (foodId) => { 
    if(test.length == 1){
      setStateConfirm(false)
    }
    const newTest = test.filter((food) => food._id !== foodId);
    setTest(newTest);
  };

  
  useEffect(() => {
    fetchData()
    $('#staticBackdrop').modal('show'); 

  }, [])
  
  console.log(selectedFoods) 


  const handleConfirm = () => {
    setTest(selectedFoods) 
  }

  const [div, setDiv] = useState([]);
  const handleSave = () => { 
    setSelectedFoods([])
    setDiv([])
    let Array = test
    const newDiv = (
      <div className='food-items d-flex flex-column'>

        <div className='food d-flex flex-row border border-dark' key={div.length}>
          {
            Array.map(({_id, imageFood, Type, nameFood, totalCalories, ration, reviews}) => {
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
                    <div className='calo d-flex flex-row justify-conte nt-between'>{totalCalories} Calo
                      <button onClick={() => handleDeleteClick2(_id)}>Xóa</button> 
                      </div>
                  </div>
                </div>
              )
            })
          }
          <div className='food-1'>
            <img src={add} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
        </div>

        {/* <div className='div-dl d-flex flex-row' onClick={() => handleDeleteDiv(index)}>
            <img className='img-dl' src={delete1} />
            <p>Xóa bữa ăn</p>
          </div> */}
      </div>
    );
    setDiv([...div, newDiv]);
    console.log(div)
    setTest([])
  };

  const handleDeleteDiv = (index) => { // xoa bua an 
    const newDiv = [...div];
    newDiv.splice(index, 1);
    setDiv(newDiv);
  };




  return (
    <div className='Plan d-flex flex-column'>
      <NavbarTwo/>
      <div className='create-food d-flex flex-column'>
        <div className='food-day-note d-flex flex-row justify-content-between'>


          <div className='food-day d-flex flex-row border border-dark'>
          {
            dPlan.map(({_id, nameDayPlan, createdAt}, index) => {
              const daysToAdd = index; // Số ngày cần cộng thêm
              const oldDate = new Date(createdAt);
              const newDate = new Date(oldDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000)); 
              const day = newDate.getDate();
              const month = newDate.getMonth() + 1;
              const year = newDate.getFullYear();
              const formattedDate = `${day}/${month}/${year}`;

              return (
                <div key={_id} className='day d-flex flex-column'>
                  <p className='fw-bold fs-6'>{nameDayPlan}</p>
                  <p className='fw-bold fs-6 '>{formattedDate}</p>
                </div>
              )
            })
          }
            

          </div>



          <div className='note'>
            <div class="input-group">
              <textarea class="form-control" id="textAreaExample" rows="6" placeholder='Ghi chú'></textarea>
            </div>
          </div>
        </div>
        {/* ==================== */}

        {div.map((div, index) => (
        <div className='' key={index}>
          <p className='fs-6 fw-bold'>Thực đơn cho bữa thứ <span>{index+1}</span>:</p>
          {div}
          <div className='div-dl d-flex flex-row' onClick={() => handleDeleteDiv(index)}>
            <img className='img-dl' src={delete1} />
            <p>Xóa bữa ăn</p>
          </div>
        </div>  
        ))}
        <img className='image-dayfood' src={add} onClick={handleSave}/>

        <p className='fs-6 fw-bold'>Bài tập cho ngày hôm nay:</p>
        <div className='exercise d-flex flex-row'>
          <div className='exercise-1'>
            <img src={add} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
        </div>
        
        {/* ======================== */}

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

                    <div className='food d-flex flex-column'>
                    <p className='title-menu fs-5 fw-bold'>Thực đơn của hệ thống:</p>

                      <div className='row'>
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
                      <hr/>
                      <p className='title-menu fs-5 fw-bold'>Thực đơn của bạn:</p>

                      <div className='row'>
                        {
                          foodUser.map(({_id, imageFood, Type, nameFood, totalCalories, ration, reviews}) => {
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

                    <button className='btn-save' data-bs-dismiss="modal" aria-label="Close" onClick={() => handleConfirm()}>
                      Xác nhận
                    </button>

                  </div>

                </div>
              </div>
        
            </div>
          </div>
        </div>
        {/* =============== END MENU EXERCISE MODAL ============= */}


        {/* Modal: BMI, BMR, Plan, DayPlan, DayFoods, DayExercise */}
        <div class="newPlan modal fade come-from-modal right" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-2" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <Form onSubmit={handleSubmit}>
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Xác nhận thông tin</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>


                <div class="verify modal-body d-flex flex-column">
                  
                    <p>Tên kế hoạch:</p>
                    <input type="text" class="namePlan form-control" aria-describedby="addon-wrapping"
                    onChange={handleChange}
                    required id = 'namePlan'
                    />
                    
                    <div className='d-flex flex-column justify-content-between'>
                      <div className='d-flex flex-column w-60'>
                        <p>Ngày bắt đầu:</p>
                        <input type="date" class="date-start form-control" aria-describedby="addon-wrapping"
                          onChange={handleChange}
                          required id = 'startPlan'
                        />
                      </div>

                      <div className='d-flex flex-column w-30'>
                        <p>Ngày kết thúc:</p>
                        <input type="date" class="date-end form-control" aria-describedby="addon-wrapping"
                          onChange={handleChange}
                          required id = 'endPlan'
                        />
                      </div>
                    </div>
                  
                </div>


                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal newPlan">
                    Xác nhận
                  </button>
                  {/* <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-dismiss="modal">Test</button> */}
                </div>
              </div>
            </div>
          </Form>
        </div>
     
    </div>
  )
}

export default Plan












