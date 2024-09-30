import React from 'react'
import './dayFood.css'
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect , useContext} from 'react';

import {BASE_URL} from '../Utils/config.js'

import { AuthContext } from '../../Context/AuthContext.jsx';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; 

let testDayFood = [] // bua an thu 1, 2, 3
const DayFood = ({id, dayName, note, dateDayPlan}) => {
      const {user, dispatch} = useContext(AuthContext)
      const [foods, setFoods] = useState([])
      const [div, setDiv] = useState([]);
      const [testSelectMenu, setTestSelectMenu] = useState([])
      
      const [stateConfirm, setStateConfirm] = useState(Boolean)
      const [selectedFoods, setSelectedFoods] = useState([]);
      const navigate = useNavigate()
      
      const fetchData = async() => {
            const response = await fetch(`${BASE_URL}/foods/`)
            const data = await response.json()
            setFoods(data.data)
      } 
      useEffect(() => {
      }, [navigate])
      
      const handleFoodClick = (foodId) => { 
            const food = foods.find((f) => f._id === foodId);
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
            if(testSelectMenu.length == 1){
                  setStateConfirm(false)
            }
            const newTest = testSelectMenu.filter((food) => food._id !== foodId);
            setTestSelectMenu(newTest);
      };

      
      const [dayFoodPlan, setDayFoodPlan] = useState([])
      
      
      const handleConfirmFood = () => {
            testDayFood.push(selectedFoods)
            setDayFoodPlan(testDayFood)
            // handleAddDayFood()
      }

      const [foodPlan, setFoodPlan] = useState({})

      console.log(selectedFoods)
     
      const handleAddDayFood = async() => { // thêm bữa ăn 
            let Array = selectedFoods
            const newDiv = ( // tạo một thẻ div mới với khóa là 20522098
                  <div className='food-day-plan d-flex flex-column'  key={div.length + 1}>
                        <div className='food-day d-flex flex-row'>
                        {
                              (Array.length != 0 ? 
                                    Array.map(({_id, imageFood, nameFood, typeFood, calo}) => {
                                    return(
                                          <div className='food-items-final d-flex flex-column' key={_id}>
                                                <div className='infor-food d-flex flex-row justify-content-between'>
                                                      <div className='image-food'>
                                                            <img src={imageFood}/>
                                                      </div>

                                                      <div className='infor d-flex flex-column'>
                                                            <div className='d-flex flex-row justify-content-end'><p className='name-food fw-bold'>{nameFood}</p></div>
                                                            <div className='d-flex flex-row justify-content-end'><p className='calo-food'><span>{calo}</span>Calo</p></div>
                                                            <div className='d-flex flex-row justify-content-end'><p className='type-food'>{typeFood}</p></div>
                                                            <div className='d-flex flex-row justify-content-end'><p className='like-food d-flex flex-row align-items-center'>98<span class="material-symbols-outlined like">favorite</span></p></div>
                                                      </div>
                                                </div> 
                                                <div className='control-food d-flex flex-row justify-content-between'>
                                                      <button className='btn-detail'>Chi tiết</button>
                                                      <button className='btn-delete' onClick={() => handleDeleteClick2(_id)}>Xóa</button>
                                                </div>
                                          </div> 
                                    )
                                    }) :(
                                    <div className='d-flex flex-row'>

                                          <div className='food-items d-flex flex-column'>
                                                <p className='text-center'>Trống</p>
                                          </div>
                                          <div className='food-items d-flex flex-column'>
                                                <p className='text-center'>Trống</p>
                                          </div>
                                          <div className='food-items d-flex flex-column'>
                                                <p className='text-center'>Trống</p> 
                                          </div>
                                          <div className='food-items d-flex flex-column'>
                                                <p className='text-center'>Trống</p>
                                          </div>
                                          <div className='food-items d-flex flex-column'>
                                                <p className='text-center'>Trống</p>
                                          </div>
                                    </div>
                                    )
                              )
                              
                        }
                        </div>
                  </div>
            );
            setDiv([...div, newDiv]);
            setSelectedFoods([])
      };

      const handleDeleteDiv = (index) => { // xoa bua an 
            const newDiv = [...div];
            newDiv.splice(index, 1);
            setDiv(newDiv);
            
      };
      function openModalFood(){
            fetchData();
      }

      const handleNewAddFood = async() => {
            setFoodPlan({
                  dayPlanID: id,
                  foods: testOne,
                  totalCalo: calo,
                  nameDayFood: `Bữa ăn thứ ${div.length + 1}`,
                  dayFoodState: 'none'
            })
            try {
                  const response = await axios.post(`${BASE_URL}/dayfood/`,foodPlan);
                  console.log(response.data);
            } catch (error) {
                  console.error('Error:', error);
            }
            console.log(foodPlan)
      }
      return (
      <div className='day-food'>
            <div className='nav-control d-flex flex-row justify-content-between'>
                  <div className='nav-1 d-flex flex-column'>
                        <p className='title-dayPlan'>{dayName}</p>
                        <div className='control d-flex flex-row justify-content-between'>
                              <div className='infor-day d-flex flex-row align-items-center'>
                                    {/* <p className='title-day'>Ngày thực hiện:</p> */}
                                    {/* <input pattern="\d{4}-\d{2}-\d{2}" className='input-day' type='date' value={dateDayPlan}></input> */}
                                    <p className='input-day' type='date'>{dateDayPlan}</p>     
                              </div>
                              <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">bookmark</span>Lưu</p>
                              <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">delete</span>Xóa</p>
                        </div>

                  <div className='infor-dayPlan'>
                  </div>
            </div>

                  <div className='note'>
                        <textarea class="form-control note-plan" aria-label="With textarea" placeholder='Ghi chú'></textarea>
                  </div>
            </div>

            {div.map((div, index) => ( // một vòng lặp div
                  <div className='' key={index}>
                        <div className='test d-flex flex-row justify-content-between'>
                              <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">restaurant_menu</span>Bữa ăn thứ {index + 1}</p>
                              <p className='select-menu d-flex flex-row align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal"
                              onClick={openModalFood}
                              ><span class="material-symbols-outlined">fact_check</span>Chọn thực đơn</p>
                              <p className='d-flex flex-row align-items-center delete' onClick={() => handleDeleteDiv(index)}><span class="material-symbols-outlined">delete</span>Xóa</p>
                        </div>
                        
                        {div}
                  </div>
            ))}

            <div className='add-food-day d-flex flex-column align-items-center'>
                  <button className='add d-flex flex-row align-items-center justify-content-between'
                  onClick={handleAddDayFood}
                  ><span class="material-symbols-outlined">add</span>Thêm bữa ăn</button>
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
                                    <p className='fw-bold d-flex flex-row justify-content-between align-items-center'><span class="material-symbols-outlined">disabled_by_default</span>Thoát</p>
                              </div>
                        </div>
                        <div class="col-md-4 ms-auto">
                              <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    <span class="input-group-text"></span>
                              </div>
                        </div>
                        </div>
                        <hr></hr>


                        <div className='menu-list d-flex flex-row'>
                        <div className='nav d-flex flex-column'>
                        <p className='fs-5 fw-bold'>Phân loại theo:</p>
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
                        
                        <p className='text fs-6 fw-bold d-flex flex-row justify-content-between'>Quốc gia: </p>
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
                        <p className='text fs-6 fw-bold d-flex flex-row justify-content-between'>Cung cấp: </p>
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
                        <p className='text fs-6 fw-bold d-flex flex-row justify-content-between'>Loại: </p>
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
                                    foods.map(({_id, imageFood, nameFood, typeFood, calo}) => {
                                          return(
                                                <div key={_id} className='food-items-final d-flex flex-column'>
                                                      <div className='infor-food d-flex flex-row justify-content-between'>
                                                      <div className='image-food'>
                                                            <img src={imageFood}/>
                                                      </div>

                                                      <div className='infor d-flex flex-column'>
                                                            <div className='d-flex flex-row justify-content-end'><p className='name-food fw-bold'>{nameFood}</p></div>
                                                            <div className='d-flex flex-row justify-content-end'><p className='calo-food'><span>{calo}</span>Calo</p></div>
                                                            <div className='d-flex flex-row justify-content-end'><p className='type-food'>{typeFood}</p></div>
                                                            <div className='d-flex flex-row justify-content-end'><p className='like-food d-flex flex-row align-items-center'>98<span class="material-symbols-outlined like">favorite</span></p></div>
                                                      </div>
                                                      </div> 
                                                      <div className='control-food d-flex flex-row justify-content-between'>
                                                      <button className='btn-detail'>Chi tiết</button>
                                                      <button className='btn-delete' onClick={() => handleFoodClick(_id)}>Chọn</button>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                              </div>
                        <hr/>
                        <p className='title-menu fs-5 fw-bold'>Thực đơn của bạn:</p>

                        </div>
                        </div>

                        
                        <div className='food-user-confirm d-flex flex-row align-items-center'>

                        {
                        stateConfirm ? (
                              selectedFoods.map(({_id, imageFood, nameFood, typeFood, calo}) => {
                                    return(
                                          <div key={_id} className='food-items-final d-flex flex-column'>
                                                <div className='infor-food d-flex flex-row justify-content-between'>
                                                      <div className='image-food'>
                                                      <img src={imageFood}/>
                                                      </div>

                                                      <div className='infor d-flex flex-column'>
                                                      <div className='d-flex flex-row justify-content-end'><p className='name-food fw-bold'>{nameFood}</p></div>
                                                      <div className='d-flex flex-row justify-content-end'><p className='calo-food'><span>{calo}</span>Calo</p></div>
                                                      <div className='d-flex flex-row justify-content-end'><p className='type-food'>{typeFood}</p></div>
                                                      <div className='d-flex flex-row justify-content-end'><p className='like-food d-flex flex-row align-items-center'>98<span class="material-symbols-outlined like">favorite</span></p></div>
                                                      </div>
                                                </div> 
                                                <div className='control-food d-flex flex-row justify-content-between'>
                                                      <button className='btn-detail'>Chi tiết</button>
                                                      <button className='btn-delete' onClick={() => handleDeleteClick(_id)}>Xóa</button>
                                                </div>
                                          </div>
                                    )
                                    })
                        ) : (
                        <div className='notes align-items-center text-center'>
                              <p className='d-flex flex-column'>Trống</p>
                        </div>
                        )
                        }

                        <button className='btn-save' data-bs-dismiss="modal" aria-label="Close" onClick={() => handleConfirmFood()}>
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

export default DayFood
