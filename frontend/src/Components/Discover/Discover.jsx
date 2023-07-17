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

const Discover = () => {

  const [isLoading, setIsLoading] = useState(true);

  
  const [fooddayplan, setfooddayplan] = useState([])
  const [exdayplan, setexdayplan] = useState([])
  
  const {user, dispatch} = useContext(AuthContext) // lấy dữ liệu người dùng sau khi đăng nhập

  const [notePlan, setNotePlan] = useState('') // lấy ghi chú của từng ngày trong kế hoạch
  const [titleDayPlan, setTitleDayPlan] = useState('')

  const [plan, setplan] = useState([]) // lấy toàn bộ kế hoạch 
  const [test, setTest] = useState([]) // lấy từng ngày trong kế hoạch

  const [Foods, setFoods] = useState([])
  const [Exrs, setExrs] = useState([])


  const [test2, setTest2] = useState([])

  const fetchPlan = async() => {
    let k = [];
    for(let i = 0; i < user.plans.length; i++){
      const response = await fetch(`${BASE_URL}/plan/${user.plans[i]}`)
      const data = await response.json();
      k.push(data.data)

      let u = []
      for(let j = 0; j < data.data.dayPlan.length; j++){

        const response_2 = await fetch(`${BASE_URL}/dayplan/${data.data.dayPlan[j]}`)
        const data_2 = await response_2.json()
        u.push(data_2.data)
      }
      setTest(u)
      setplan(k)
    }
  } 

  // function handleClickk(e){ 
  //   // 1 phần tử trong test là 1 DayPlan
  //   // 1 dayPlan sẽ có các dayFoods và dayExercise
  //   // khi click vào button có id của DayPlan nào thì lấy đúng dayFoods và dayExercises của dayPlan đó
  //   let k = ''
  //   let g = ''
  //   for(let i = 0; i < test.length; i++){
  //     if(test[i]._id === e){
  //       console.log(test[i].dayFoods)
  //       console.log(test[i].dayExercises)
  //       k = test[i].noteDayPlan
  //       g = test[i].nameDayPlan
  //     }
  //     // setNotePlan(test[i].noteDayPlan)
  //     setNotePlan(k)
  //     setTitleDayPlan(g)
  //   }
  // }

  const handleClickk = async (e) =>{ 
    let k = ''
    let g = ''

    let dayFoods = []
    let dayExers = []

    for(let i = 0; i < test.length; i++){
      if(test[i]._id === e){
        for(let j = 0; j < test[i].dayFoods.length; j++){
          const response = await fetch(`${BASE_URL}/dayfood/${test[i].dayFoods[j]}`)
          const data = await response.json();
          dayFoods.push(data.data)
          setIsLoading(false);

          let thu = []

          for(let q = 0; q < dayFoods[j].foods.length; q++){
            const response_2 = await fetch(`${BASE_URL}/foods/${dayFoods[j].foods[q]}`)
            const data_2 = await response_2.json();
            thu.push(data_2.data)
          }

          dayFoods[j].foods = thu
        }

        for(let y = 0; y < test[i].dayExercises.length; y++){
          const response = await fetch(`${BASE_URL}/dayexercise/${test[i].dayExercises[y]}`)
          const data = await response.json();
          dayExers.push(data.data)
          setIsLoading(false);

          let thu2 = []
          for(let t = 0; t < dayExers[y].exercises.length; t++){
            const response_2 = await fetch(`${BASE_URL}/exercise/${dayExers[y].exercises[t]}`)
            const data_2 = await response_2.json();
            thu2.push(data_2.data)
          }

          dayExers[y].exercises = thu2
        }

        k = test[i].noteDayPlan
        g = test[i].nameDayPlan
      }
      setNotePlan(k)
      setTitleDayPlan(g)
    }
    setfooddayplan(dayFoods)
    setexdayplan(dayExers)

  }
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('User'))
    if(userData){
      dispatch({type: 'LOGIN_SUCCESS', payload: userData})
    }
    fetchPlan();
    handleClickk()
  }, [])




  // console.log(plan) 
  // console.log(test)

  // console.log(user)

  // console.log(test) // lấy DayPlan về (chứa cả _id trong đó)
  // console.log(fooddayplan) // lấy toàn bộ bữa ăn của 3 ngày: không khả thi

  // console.log(fooddayplan) // lấy toàn bộ dayFoods theo dayPlan
  // console.log(exdayplan) // lấy toàn bộ dayExercises theo dayPlan

  // console.log(Foods) // lấy toàn bộ Foods theo dayFoods

  // console.log(test2)


  // console.log(Exrs)

  

  return (
    <div className='Discover d-flex flex-column'>
    {/* <h2>Xin chào, <span>Nguyễn Như Từ</span></h2> */}
      <div className='plan d-flex flex-row'>
        <div className='detail-day-plan d-flex flex-column'>
          <p className='title-day fs-2 fw-bold'>{titleDayPlan}</p>
          <p className='title-day fs-5 fw-bold'>01/07/2023</p>
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
            {
              plan.map(({_id, namePlan, startPlan}) => {
                return(

                  <div key={_id} className='plan-now d-flex flex-column'>
                    <Link className='link' to='/app/detailplan'>
                      <p className='fw-bold'>{namePlan}</p>
                      <p className='d-flex flex-row justify-content-between'>Bắt đầu<span>{startPlan}</span></p>
                      <div className='status fw-bold'>
                        Đang thực hiện
                      </div>
                    </Link>
                  </div>
                )
              })
            }


              <div className='add-plan'>
                <Link to='/app/plan'><img src={Addplan}/></Link>
              </div>
            </div>



            <p className='fs-6 fw-bold'>Tiến độ</p>
           
            {/* <div className='my-plan-02 d-flex flex-row'>
            {
              test.map(({_id, nameDayPlan, createdAt}) => {
                const date = new Date(createdAt);
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                
                return(
                  <div key={_id} className='d-flex flex daypl'>
                    <div className='day text-center' onClick={() => handleClickk(_id)}>
                      <p className='fw-bold'>{nameDayPlan}</p>
                      <p className='fw-normal'>{`${day}/${month}/${year}`}</p>
                    </div>
                  </div>
                )
              })
            } 
            </div> */}

            <div className='my-plan-02 d-flex flex-row'>
            {
              test.map(({_id, nameDayPlan, createdAt}, index) => {
                const daysToAdd = index; // Số ngày cần cộng thêm
                const oldDate = new Date(createdAt);
                const newDate = new Date(oldDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000)); // Cộng thêm số ngày đã tính toán
                const day = newDate.getDate();
                const month = newDate.getMonth() + 1;
                const year = newDate.getFullYear();
                const formattedDate = `${day}/${month}/${year}`;
                
                return(
                  <div key={_id} className='d-flex flex daypl'>
                    <div className='day text-center' onClick={() => handleClickk(_id)}>
                      <p className='fw-bold'>{nameDayPlan}</p>
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
          // placeholder='Không ăn thêm bữa phụ, có thể tập thêm 15 phút mỗi bài tập'
          placeholder={notePlan}
          >
            
          </textarea>
        </div>
      </div>

      
      
      <div className='food-exercise-plan d-flex flex-column'>
            
          {
            fooddayplan.map(({_id, nameFoods, foods}) => {
              return(
                <div key={_id} className='food d-flex flex-row'>
                  <div className='info-meat d-flex flex-column'>
                    <p className='title-meat fs-5 fw-bold'>{nameFoods}</p>
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
                            <p className='caterogy d-flex flex-row justify-content-end'>{item.Type}</p>
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

          {
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
          }



          

      </div>


    </div>
  )
}
export default Discover
