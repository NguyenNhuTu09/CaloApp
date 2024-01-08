import React, { useTransition } from 'react'
import NavbarTwo from '../NavbarTwo/NavbarTwo'
import { useState, useEffect , useContext} from 'react';
import './createPlanTwo.css'

import { useNavigate, Link } from 'react-router-dom';

import {BASE_URL} from '../Utils/config.js'

import { AuthContext } from '../../Context/AuthContext.jsx';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DayFood from '../DayFood/DayFood.jsx';
import { Modal } from 'reactstrap';

let testDayFood = [] // bua an thu 1, 2, 3

const CreatePlanTwo = () => {
     const {id} = useParams()
     const {user, dispatch} = useContext(AuthContext)
     const navigate = useNavigate() 
     const [dayPlanUser, setDayPlanUser] = useState([])

     const handlePlan = async() => {
          let k = []
          const resDayPlan = await fetch(`${BASE_URL}/dayPlan`)
          const dataDayPlan = await resDayPlan.json()
          for(let i = 0; i < dataDayPlan.data.length; i++){
               if(dataDayPlan.data[i].planID === id){
                    k.push(dataDayPlan.data[i])
               } 
          }
          setDayPlanUser(k)
     }
     
     useEffect(() => {
          handlePlan()
     }, [])
     function handleClickBack(){
          navigate(-1)
     }
     

     const [testElement, setTestElement] = useState('')
     const [dateDayPlan, setDateDayPlan] = useState('')
     const [dayPlans, setDayPlans] = useState({})

     const handleDayPlan = async(e, dateDayPlan) => { 
          setTestElement(e)
          const response = await fetch(`${BASE_URL}/dayplan/${e}`)
          const data = await response.json()
          setDayPlans(data.data)
          setDateDayPlan(dateDayPlan)
     }
          
     return (
          <div className="create-plan-two d-flex flex-column">
               <NavbarTwo/>
               <div className='body-create-plan-two d-flex flex-column'>
                    <div className='nav-create-plan d-flex flex-row justify-content-between'>
                         <Link className='link' to="app/user/plan" onClick={handleClickBack}>
                              <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">arrow_back</span>Quay lại</p>
                         </Link>
                         {/* <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">bookmark</span>Lưu kế hoạch</p> */}
                    </div>

                    <div className='dashboard-note-plan d-flex flex-column justify-content-between'>
                         <div className='dashboard d-flex flex-column'>
                              <div className='control-day d-flex flex-row justify-content-between align-items center'>
                                   <p className='back d-flex flex-row align-items-center'><span class="material-symbols-outlined">arrow_back_ios</span></p>
                                   <div className='day-plan d-flex flex-row align-items-center'>
                                        {
                                             dayPlanUser.map(({_id, dayName, createdAt}, index) => {
                                                  const daysToAdd = index; 
                                                  const oldDate = new Date(createdAt);
                                                  const newDate = new Date(oldDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000)); 
                                                  const day = newDate.getDate();
                                                  const month = newDate.getMonth() + 1;
                                                  const year = newDate.getFullYear();
                                                  const formattedDate = `${year}/${month}/${day}`;
                                                  return(
                                                       <div className='day-items d-flex flex-column text-center justify-content-between' key={_id}
                                                       onClick={() => handleDayPlan(_id, formattedDate)}>
                                                            <p className='day-name'>{dayName}</p>
                                                            <p className='date'>{formattedDate}</p>
                                                       </div>
                                                  )
                                             })
                                        }
                                   </div>
                                   <p className='next d-flex flex-row align-items-center'><span class="material-symbols-outlined">arrow_forward_ios</span></p>
                              </div>
                         </div>
                    </div>
                    <DayFood id={testElement} dayName={dayPlans.dayName} note={dayPlans.note} dateDayPlan={dateDayPlan}/>
                    


               </div>            
          </div>
     )
}

export default CreatePlanTwo
