import React, {useState, useEffect, useContext} from 'react'
import './user.css'
import { Link} from 'react-router-dom'
import settingUser from '../../assets/Setting-user.png';

import {SlOptionsVertical} from 'react-icons/sl'



import jogging from '../../assets/Exercise/Chay bo.jpg'
import gapbung from '../../assets/Exercise/Gap bung.jpg'
import xadon from '../../assets/Exercise/Xa don.jpg'
import arrow from '../../assets/Arrow.png'

import add from '../../assets/addplan.png'

import {AiFillStar} from 'react-icons/ai'

import { BASE_URL } from '../Utils/config.js'
import { AuthContext } from '../../Context/AuthContext'

import axios from 'axios'



const User = () => {

  
  const {user, dispatch} = useContext(AuthContext)
  const [foodUser, setFoodUser] = useState([])
  const [exUser, setExUser] = useState([])  
  const [planUser, setPlanUser] = useState([])

  const deletePlan = async(id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/plan/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };
  
  const handleDeletePlan = async (planId) => {
    try {
      const result = await deletePlan(planId);
      alert(result.message);
      // Cập nhật lại danh sách kế hoạch
      const newPlans = plans.filter((plan) => plan._id !== planId);
      setPlans(newPlans);
    } catch (error) {
      alert(error.message);
    }
  };

  
  const fetchData = async() => {
    let k = []
    for(let i = 0; i < user.foods.length; i++){
      const response = await fetch(`${BASE_URL}/foodsuser/${user.foods[i]}`)
      const data = await response.json()
      k.push(data.data)
      setFoodUser(k)
    }

    // let k = []
    // // for(let i = 0; i < user.foods.length; i++){
    //   const response = await fetch(`${BASE_URL}/users/${user._id}`)
    //   const data = await response.json()
    //   k.push(data.data.foods)
    //   setFoodUser(k)
    // // }

    

    let h = []
    for(let j = 0; j < user.exercises.length; j++){
      const response = await fetch(`${BASE_URL}/exercise/${user.exercises[j]}`)
      const data = await response.json()
      h.push(data.data)
      setExUser(h)
    }

    let m = []
    for(let n = 0; n < user.plans.length; n++){
      const response = await fetch(`${BASE_URL}/plan/${user.plans[n]}`)
      const data = await response.json()
      m.push(data.data)
    }
    setPlanUser(m)

  }

  useEffect(() => {
    // setFoodUser([])
    setPlanUser([])
    // const userData = JSON.parse(localStorage.getItem('User'))
    // if(userData){
    //   dispatch({type: 'LOGIN_SUCCESS', payload: userData})
    // }
    fetchData()
  },[])
 

  // console.log(user.foods)
  console.log(foodUser)
  console.log(exUser)
  console.log(planUser)
  
  console.log(typeof(user._id))

  const [isMyAccBlack, setIsMyAccBlack] = useState(false);
  const [isLikeBlack, setIsLikeBlack] = useState(false);

  const handleMyAccClick = () => {
    setIsMyAccBlack(true);
    setIsLikeBlack(false);
  };

  const handleLikeClick = () => {
    setIsLikeBlack(true);
    setIsMyAccBlack(false);
  };

  return (
    <div className='User d-flex flex-column'>
      <div className='info d-flex flex-row'>
        <img src={user.photo}/>
        <div className='title-info'>
          <p className='fs-4 fw-bold'>{user.lastFirstName}</p>
          <p className='fs-6'>{user.userName}</p>
          <div className='setting-info d-flex flex-row'>
            <p className='text fs-6 fw-bold'>Sửa hồ sơ</p>
            <span class="material-symbols-outlined">manage_accounts</span>
          </div>
        </div>
      </div>
      <div className='icons d-flex flex-rowk'>
        <div className='like user d-flex flex-row'>
            <span class="material-symbols-outlined">favorite</span>
            <p className='fs-6 fw-bold'>Yêu thích</p>
        </div>

          <div className='my-acc user d-flex flex-row'>
            <span class="material-symbols-outlined">bookmark</span>
            <p className='fs-6 fw-bold'>Đã lưu</p>
          </div>
      </div>
      <hr></hr>
      <p className='title fs-6 fw-bold'>Kế hoạch của bạn:</p>
      <div className='plan d-flex flex-row'>
      {

        planUser.map(({_id, namePlan, startPlan, endPlan}) => {
          return(
            <div key={_id} className='plan-now d-flex flex-column'>
            <div className='link' to='/app/detailplan'>
              <div className='fw-bold d-flex flex-row justify-content-between'>
                {namePlan}
                <div data-bs-toggle="dropdown" aria-expanded="false">
                    <SlOptionsVertical/>
                  </div>
                  <ul class="dropdown-menu">
                    <Link class="dropdown-item" to={`/app/detailplan`}>Chi tiết</Link>
                    <Link class="dropdown-item" to={`/app/discover`}>Quá trình thực hiện</Link>
                  </ul>
              </div>
              <p className='d-flex flex-row justify-content-between'>Bắt đầu<span>{startPlan}</span></p>
              <p className='d-flex flex-row justify-content-between'>Kết thúc<span>{endPlan}</span></p>
              <div className='status fw-bold'>
                Đang thực hiện
              </div>
            </div>
          </div>
          )
        })
      }

          <div className='Create-plan'>
            <Link to={`/app/user/${user._id}/plan`} className='link'>
              <div className='Add d-flex flex-column'>
                <img src={add}/>
                <p className='fs-6 fw-bold'>Tải lên</p>
              </div>
          </Link>
       </div>
        </div>
        <hr></hr>
      <p className='title fs-6 fw-bold'>Món ăn của bạn:</p>
      <div className='food d-flex flex-row'>
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
                      <p className='calo d-flex flex-row justify-content-between'>{totalCalories} Calo<span>
                      <Link className='link' to={`/app/menu/${_id}`}>
                        Chi tiết <img src={arrow}/>
                      </Link>
                      </span></p>
                    </div>
                  </div>
                )
              })
      }
        <div className='Create'>
          <Link to={`/app/user/${user._id}/createfood`} className='link'>
            <div className='Add d-flex flex-column'>
              <img src={add}/>
              <p className='fs-6 fw-bold'>Tải lên</p>
            </div>
        </Link>
        </div>
      </div>
      <hr/>
      <p className='title fs-6 fw-bold'>Bài tập của bạn:</p>
      <div className='food d-flex flex-row'>
      {
        exUser.map(({_id, imageExercise, Type, nameExercise, ration, totalCalories}) => {
          return(
          <div key={_id} className='food-menu'>
            <div className='image-food position-relative'>
              <img src={imageExercise}/>
            </div>
            <div className='detail-food'>
              <p className='caterogy d-flex flex-row justify-content-end'><span><AiFillStar/></span></p>
              <p className='caterogy d-flex flex-row justify-content-end'>{Type}</p>
              <p className='food-name fw-bold d-flex flex-row justify-content-between'>{nameExercise}<span>{ration}</span></p>
              <p className='calo d-flex flex-row justify-content-between'>-{totalCalories}<span>Chi tiết <img src={arrow}/></span></p>
            </div>
          </div>
          )
        })
      }
       <div className='Create'>
       <Link to='/app/createexercise' className='link'>
          <div className='Add d-flex flex-column'>
            <img src={add}/>
            <p className='fs-6 fw-bold'>Tải lên</p>
          </div>
       </Link>
       
       </div>
      </div>
    </div>
  )
}
export default User



// trường hợp 1:
// + Tìm cách sao cho khi createFood hoặc exercise, plan, nó sẽ push lần lượt vào foods, plans, exercise vào data của user đã lưu vào Context
// chứ không push hẳn lên menu chung
// trường hợp 2:
// + Đăng tải lên plan, foods, exercise chung, nhưng khi hiển thị, phải theo _id của user đã tạo ra plan, user, exercise đó
