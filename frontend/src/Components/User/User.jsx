import React, {useState, useEffect, useContext} from 'react'
import './user.css'
import { Link} from 'react-router-dom'
import settingUser from '../../assets/Setting-user.png';

import {SlOptionsVertical} from 'react-icons/sl'

import arrow from '../../assets/Arrow.png'

import add from '../../assets/addplan.png'

import {AiFillStar} from 'react-icons/ai'

import { BASE_URL } from '../Utils/config.js'
import { AuthContext } from '../../Context/AuthContext'

import axios from 'axios'

import NavbarTwo from '../NavbarTwo/NavbarTwo'


const User = () => {

  
  const {user, dispatch} = useContext(AuthContext)
  const [planUser, setPlanUser] = useState([])

  const [Foods, setFoods] = useState([])

  const fetchData = async() => {
    const response = await fetch(`${BASE_URL}/foods/`)
    const data = await response.json();
    let k = []
    for(let i = 0; i < data.data.length; i++){
      if(data.data[i].userID == user._id){
        k.push(data.data[i])
      }
    }
    setFoods(k)

    const resPlan = await fetch(`${BASE_URL}/plan/`)
    const dataPlan = await resPlan.json()
    let p = []
    for(let i = 0; i < dataPlan.data.length; i++){
      if(dataPlan.data[i].userId == user._id){
        p.push(dataPlan.data[i])
      }
    }
    setPlanUser(p)
  }
  console.log(Foods)
  console.log(planUser)

  useEffect(() => {
    fetchData()
  },[])
 

  const [clickHome, setClickHome] = useState(true)
  const [clickHistory, setClickHistory] = useState(false)
  const [clickLike, setClickLike] = useState(false)
  const [clickSave, setClickSave] = useState(false)

  const [clickPlanUser, setClickPlanUser] = useState(true)
  const [clickFoodUser, setClickFoodUser] = useState(false)
  const [clickExerUser, setClickExerUser] = useState(false)

  const handleClickPlan = () => {
    setClickPlanUser(true)
    setClickFoodUser(false)
    setClickExerUser(false)
  }
  const handleClickFood = () => {
    setClickPlanUser(false)
    setClickFoodUser(true)
    setClickExerUser(false)
  }
  const handleClickExer = () => {
    setClickPlanUser(false)
    setClickFoodUser(false)
    setClickExerUser(true)
  }

  const handleClickHome = () => {
    setClickHome(true)
    setClickHistory(false)
    setClickLike(false)
    setClickSave(false)
  }
  const handleClickHistory = () => {
    setClickHome(false)
    setClickHistory(true)
    setClickLike(false)
    setClickSave(false)
  }
  const handleClickLike = () => {
    setClickHome(false)
    setClickHistory(false)
    setClickLike(true)
    setClickSave(false)
  }
  const handleClickSave = () => {
    setClickHome(false)
    setClickHistory(false)
    setClickLike(false)
    setClickSave(true)
  }



  return (
    <div className='User d-flex flex-column'>
      <NavbarTwo/>
      <p className='title-setting'>Tài khoản</p>
      <div className='information-user d-flex flex-row'>
        <div className='nav-user d-flex flex-column'>
          <p className='home-icon d-flex flex-row align-items-center'
            onClick={handleClickHome} style={{ color: clickHome ? 'white': '#624761', background: clickHome ? '#4682A9' : 'none'}}
            ><span class="material-symbols-outlined">location_away</span>Tổng quan
          </p>
          
          <p className='history-icon d-flex flex-row align-items-center'
            onClick={handleClickHistory} style={{ color: clickHistory ? 'white': '#624761', background: clickHistory ? '#4682A9' : 'none'}}
            ><span class="material-symbols-outlined">update</span>Lịch sử
          </p>

          <p className='like-icon d-flex flex-row align-items-center'
            onClick={handleClickLike} style={{ color: clickLike ? 'white': '#624761', background: clickLike ? '#4682A9' : 'none'}}
            ><span class="material-symbols-outlined">favorite</span>Yêu thích
          </p>

          <p className='save-icon d-flex flex-row align-items-center'
            onClick={handleClickSave} style={{ color: clickSave ? 'white': '#624761', background: clickSave ? '#4682A9' : 'none'}}
            ><span class="material-symbols-outlined">bookmark</span>Đã lưu
          </p>
        </div>

        {
          clickHome ? (

            <div className='infor-user d-flex flex-column'>
              <div className='infor d-flex flex-row align-items-center'>
                <img src={user.avatar}/>
                <div className='title-info'>
                  <p className='fs-5 fw-bold'>{user.lastFirstName}</p>
                  <p className='fs-6'>{user.userName}</p>
                  <p className='setting-user d-flex flex-row align-items-center'>
                  <span class="material-symbols-outlined">manage_accounts</span>Sửa hồ sơ</p>
                </div>
              </div>
              <div className='nav-profile d-flex flex-row'>   
                <p className='plan-create d-flex flex-row align-items-center' onClick={handleClickPlan} style={{ color: clickPlanUser ? 'black': '#624761', fontWeight: clickPlanUser ? 'bold' : 'normal', borderBottom: clickPlanUser ? '1px solid black' : 'none'}}> 
                  <span class="material-symbols-outlined">checklist</span>Kế hoạch
                </p>
                <p className='food-create d-flex flex-row align-items-center' onClick={handleClickFood} style={{ color: clickFoodUser ? 'black': '#624761', fontWeight: clickFoodUser ? 'bold' : 'normal', borderBottom: clickFoodUser ? '1px solid black' : 'none'}}>
                  <span class="material-symbols-outlined">lunch_dining</span>Món ăn
                </p>
                <p className='exer-create d-flex flex-row align-items-center' onClick={handleClickExer} style={{ color: clickExerUser ? 'black': '#624761', fontWeight: clickExerUser ? 'bold' : 'normal', borderBottom: clickExerUser ? '1px solid black' : 'none'}}>
                  <span class="material-symbols-outlined">fitness_center</span>Bài tập
                </p>
              </div>
              {
                clickPlanUser ? (
                  <div className='plan-user d-flex flex-row'>
                  {
                    planUser.map(({_id, planName, dayStart, dayEnd, planState}) => {
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

                  </div>
                ) : clickFoodUser ? (
                  <div className='food-user d-flex flex-row'>
                  {
                    Foods.map(({_id, imageFood, typeFood, nameFood, calo}) => {
                      return(
                        <div className='food-items-final d-flex flex-column' key={_id} >
                              <div className='infor-food d-flex flex-row justify-content-between'>
                                  <div className='image-food'>
                                        <img src={imageFood}/>
                                  </div>

                                  <div className='infor-desc d-flex flex-column'>
                                        <div className='d-flex flex-row justify-content-end'><p className='name-food fw-bold'>{nameFood}</p></div>
                                        <div className='d-flex flex-row justify-content-end'><p className='calo-food'><span>{calo}</span>Calo</p></div>
                                        <div className='d-flex flex-row justify-content-end'><p className='type-food'>{typeFood}</p></div>
                                        <div className='d-flex flex-row justify-content-end'>
                                          <p className='like-food d-flex flex-row align-items-center'>98<span class="material-symbols-outlined like">favorite</span></p>
                                        </div>
                                  </div>
                              </div> 
                              <div className='control-food d-flex flex-row justify-content-between'>
                                  <Link className='link' to={`/app/menu/${_id}`}>Chi tiết</Link>
                                  <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">favorite</span></p>
                                  <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">bookmark</span></p>
                              </div>
                        </div>
                      )
                    })
                  }
                  </div>
                ) : (
                  <div>
                    <p>Exer User</p>
                  </div>
                )
              }
            </div>
          ) : clickHistory ? (
            <div className='history-user'>
              history
            </div>
          ) : clickLike ?(
            <div className='like-user'>
              like
            </div>
          ) : (
            <div className='save-user'>
              save
            </div>
          )
        }

        

        

        
        
      </div>
      
      
    </div>
  )
}
export default User
