import React, {useState, useEffect, useContext} from 'react'
import './user.css'
import { Form, FormGroup, Row } from 'reactstrap'
import { Link} from 'react-router-dom'
import userImg from '../../assets/User.png'
import setting from '../../assets/Setting.png'
import settingUser from '../../assets/Setting-user.png';

import {SlOptionsVertical} from 'react-icons/sl'


import Chicken2 from '../../assets/Food/Chicken2.jpg'
import Ham from '../../assets/Food/Ham.jpg'
import Suachua from '../../assets/Food/Sua chua.jpg'


import jogging from '../../assets/Exercise/Chay bo.jpg'
import gapbung from '../../assets/Exercise/Gap bung.jpg'
import xadon from '../../assets/Exercise/Xa don.jpg'
import arrow from '../../assets/Arrow.png'

import add from '../../assets/addplan.png'

import {BsSearch} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

import { BASE_URL } from '../Utils/config.js'
import { AuthContext } from '../../Context/AuthContext'



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
    nameExercise: "Gập bụng",
    minutes: '45m',
    calories: '750 Calo',
    description: '....',
    teps: 'Bước 1'
  }
]


const User = () => {

  
  const {user, dispatch} = useContext(AuthContext)
  const [foodUser, setFoodUser] = useState([])
  const [exUser, setExUser] = useState([])  
  const [planUser, setPlanUser] = useState([])

  
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
    setFoodUser([])
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
  
  console.log(user)


  return (
    <div className='User d-flex flex-column'>
      <div className='info d-flex flex-row'>
        <img src={user.photo}/>
        <div className='title-info'>
          <p className='fs-4 fw-bold'>{user.lastFirstName}</p>
          <div className='setting-info d-flex flex-row'>
            <p className='text fs-6 fw-bold'>Sửa hồ sơ</p>
            <img src={settingUser}/>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className='title fs-6 fw-bold'>Kế hoạch của bạn:</p>
      <div className='plan d-flex flex-row'>
      {

        planUser.map(({_id, namePlan, startPlan}) => {
          return(
            <div key={_id} className='plan-now d-flex flex-column'>
            <div className='link' to='/app/detailplan'>
              <div className='fw-bold d-flex flex-row justify-content-between'>
                {namePlan}
                <div data-bs-toggle="dropdown" aria-expanded="false">
                    <SlOptionsVertical/>
                  </div>
                  <ul class="dropdown-menu">
                    <Link class="dropdown-item">Xóa</Link>
                    <Link class="dropdown-item" to={`/app/menu/${_id}`}>Chi tiết</Link>
                    <Link class="dropdown-item" to={`/app/menu/${_id}`}>Quá trình thực hiện</Link>
                  </ul>
              </div>
              <p className='d-flex flex-row justify-content-between'>Bắt đầu<span>{startPlan}</span></p>
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
      <div className='food d-flex flex-row '>
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
