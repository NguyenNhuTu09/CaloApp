import React, { useState, useEffect, useContext  } from 'react'
import {BrowserRouter, Router, Route, Link, Outlet} from 'react-router-dom'
import './discover.css'
import {Form, FormGroup} from 'reactstrap'
import { AuthContext } from '../../Context/AuthContext'

import { BASE_URL } from '../Utils/config.js'

// import { daysTag, currentDate, prevNextIcon, date, currMonth, currYear, months} from './Calendar.js'

import 'react-calendar/dist/Calendar.css';

import {AiFillStar} from 'react-icons/ai'

import Total from '../../assets/Total.png'
import Exer from '../../assets/Exer.png'
import Fire from '../../assets/Fire.png'



import Addplan from '../../assets/addplan.png'
import arrow from '../../assets/Arrow.png'
import Complete from '../../assets/Complete.png'
import Repair from '../../assets/Repair.png'

import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx'

const Discover = () => {

  const [fooddayplan, setfooddayplan] = useState([])
  const [exdayplan, setexdayplan] = useState([])
  
  const {user, dispatch} = useContext(AuthContext) 

  const [notePlan, setNotePlan] = useState('') 

  const [plan, setPlan] = useState([]) 
  const [dayPlan, setDayPlan] = useState([])



  const fetchPlan = async() => {
    const resPlan = await fetch(`${BASE_URL}/plan/`)
    const dataPlan = await resPlan.json()
    let p = []
    for(let i = 0; i < dataPlan.data.length; i++){
      if(dataPlan.data[i].userId == user._id){
        p.push(dataPlan.data[i])
        const resDayPlan = await fetch(`${BASE_URL}/dayplan/`)
        const dataDayPlan = await resDayPlan.json()
        let dp = []
        for(let j = 0; j < dataDayPlan.data.length; j++){
          if(dataDayPlan.data[j].planID == dataPlan.data[i]._id){
            dp.push(dataDayPlan.data[j])
          }
        }
        setDayPlan(dp)
      }
    }
    setPlan(p)
    
  } 

  const fetchDayPlan = async() => {
    
  }

  useEffect(() => {
    fetchPlan();
    fetchDayPlan();
  },[])


  const handleClickk = async (e) =>{ 
    // e này là id của dayPlan
    let dfFood = []
    const resDfood = await fetch(`${BASE_URL}/dayfood/`)
    const dataDfood = await resDfood.json()
    console.log(dataDfood)
    for(let i = 0; i < dataDfood.data.length; i++){
      if(dataDfood.data[i].dayPlanID === e){
        dfFood.push(dataDfood.data[i])
      }
    }
    setfooddayplan(dfFood)
    console.log(fooddayplan)
  }
  

  // console.log(plan) 
  // console.log(dayPlan)
  

  return (
    <div className='Discover d-flex flex-column'>
    <NavbarTwo/>
      <div className='plan d-flex flex-row'>
        <div className='detail-day-plan d-flex flex-column justify'>
          {/* <p className='title-day fs-3 fw-bold'>{plan[0].planName}</p> */}
          <p className='title-day fs-4 fw-bold'>7 Days Healthy</p>
          {/* <p className='title-day fs-5 fw-bold'>{plan.dayStart}</p> */}
          <p className='title-day fs-6 fw-bold'>09/01/2024</p>
          <div className='parameter-day-plan d-flex flex-row justify-content-between'>
            <div className='parameter d-flex flex-column text-center align-items-center'>
              <img src={Total}/>
              <p className='fs-5'>Tổng</p>
              <p className='fs-6 fw-bold'>3500<span> Kcal</span></p>
            </div>
            <div className='parameter d-flex flex-column text-center align-items-center'>
              <img src={Exer}/>
              <p className='fs-5'>Vận động</p>
              <p className='fs-6 fw-bold'>78<span> m</span></p>
            </div>
            <div className='parameter d-flex flex-column text-center align-items-center'>
              <img src={Fire}/>
              <p className='fs-5'>Tiêu thụ</p>
              <p className='fs-6 fw-bold'>1300<span> Kcal</span></p>
            </div>
          </div>
        </div>
         
        <div className='my-plan d-flex flex-column'>
          <p className='fs-6 fw-bold'>Kế hoạch của bạn</p>
            <div className='my-plan-01 d-flex flex-row align-items-center'>
            {
                    plan.map(({_id, planName, dayStart, dayEnd, planState}) => {
                      return(
                        
                      <div className='plan-1' key={_id}>
                        <p className='d-flex flex-row justify-content-between align-items-center fw-bold'>{planName} 
                          <span data-bs-toggle="dropdown" aria-expanded="false" class="material-symbols-outlined">more_vert</span>
                          <ul class="dropdown-menu">
                            <Link class="dropdown-item">Chi tiết</Link>
                            <Link class="dropdown-item">Quá trình thực hiện</Link>
                          </ul>
                        </p>
                        <p className='d-flex flex-row justify-content-between align-items-center'>Bắt đầu <span>{dayStart}</span></p>
                        <p className='d-flex flex-row justify-content-between align-items-center'>Kết thúc<span>{dayEnd}</span></p>
                        <div className='status-plan'>
                          <p className='title-status'>{planState}</p>
                        </div>
                      </div>
                      )
                    })
                  }

              <Link className='add-plan d-flex flex-column align-items-center text-center'>
                <span class="material-symbols-outlined">add</span>
                <p>Tạo kế hoạch mới</p>
              </Link>
            </div>



            <p className='fs-6 fw-bold'>Tiến độ</p>

            <div className='my-plan-02 d-flex flex-row'>
            {
              dayPlan.map(({_id, dayName, createdAt}, index) => {
                const daysToAdd = index; 
                const oldDate = new Date(createdAt);
                const newDate = new Date(oldDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000)); 
                const day = newDate.getDate();
                const month = newDate.getMonth() + 1;
                const year = newDate.getFullYear();
                const formattedDate = `${day}/${month}/${year}`;
                
                return(
                  <div key={_id} className='d-flex flex daypl'>
                    <div className='day text-center' onClick={() => handleClickk(_id)}>
                      <p className='fw-bold'>{dayName}</p>
                      <p className='fw-normal'>{formattedDate}</p>
                    </div>
                  </div>
                )
              })
            } 
            </div>
            
        </div>

        <div className='note-day-plan d-flex flex-column'>
          <p className='fs-6 fw-bold'>Ghi chú: </p>
          <textarea class="form-control note" aria-label="With textarea" disabled
          placeholder={notePlan}
          >
            
          </textarea>
        </div>
      </div>

      
      
      <div className='food-exercise-plan d-flex flex-column'>
            
          {
            fooddayplan.map(({_id, nameDayFood, foods}) => {
              return(
                <div key={_id} className='food d-flex flex-row'>
                  <div className='info-meat d-flex flex-column'>
                    <p className='title-meat fs-6 fw-bold'>{nameDayFood}</p>
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
                    foods.map((item) => {
                      return(
                        <div key={item._id} className='food-menu'>
                          <div className='image-food position-relative'>
                            <img src={item.imageFood}/>
                          </div>
                          <div className='detail-food'>
                            <p className='caterogy d-flex flex-row justify-content-end'>
                            {item.reviews}
                              <span><AiFillStar/></span>
                            </p>
                            <p className='caterogy d-flex flex-row justify-content-end'>{item.typeFood}</p>
                            <p className='food-name fw-bold fs-6 d-flex flex-row justify-content-between'>{item.nameFood} <span>{item.ration} g</span></p>
                            <p className='calo d-flex flex-row justify-content-between'>{item.totalCalories} Calo<span>
                            <Link className='link' to={`/app/menu/${item._id}`}>
                              Chi tiết <img src={arrow}/>
                            </Link>
                            </span></p>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              )
            })
          }

          {/* {
            exdayplan.map(({_id, nameExercises, exercises}) => {
              return(
                <div key={_id} className='food d-flex flex-row'>
                  <div className='info-meat d-flex flex-column'>
                    <p className='title-meat fs-5 fw-bold'>{nameExercises}</p>
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
                    exercises.map((item) => {
                      return(
                        <div key={item._id} className='food-menu'>
                          <div className='image-food position-relative'>
                            <img src={item.imageExercise}/>
                          </div>
                          <div className='detail-food'>
                            <p className='caterogy d-flex flex-row justify-content-end'>
                            {item.reviews}
                              <span><AiFillStar/></span>
                            </p>
                            <p className='caterogy d-flex flex-row justify-content-end'>{item.Type}</p>
                            <p className='food-name fw-bold fs-6 d-flex flex-row justify-content-between'>{item.nameExercise} <span>{item.ration} m</span></p>
                            <p className='calo d-flex flex-row justify-content-between'>-{item.totalCalories} Calo<span>
                            <Link className='link' to={`/app/menu/${item._id}`}>
                              Chi tiết <img src={arrow}/>
                            </Link>
                            </span></p>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              )
            })
          } */}



          

      </div>


    </div>
  )
}
export default Discover
