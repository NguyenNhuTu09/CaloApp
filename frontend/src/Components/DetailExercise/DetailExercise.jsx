import React, { useContext, useEffect, useState} from 'react'
import './detailExercise.css'
import { Link } from 'react-router-dom'
import { useParams, useNavigate} from 'react-router-dom'
import {AuthContext} from '../../Context/AuthContext'
import { BASE_URL } from '../Utils/config.js'

import userIcons from '../../assets/User.png'

import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx'

  

import arrowLeft from '../../assets/ArrowLeft.png'
import { Nav } from 'reactstrap'
const DetailExercise = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const {id} = useParams()
  const {user} = useContext(AuthContext)


  console.log(user)
  const [Exercise, setExercise] = useState([])

  const [nameExer, setNameExer] = useState('')
  const [type, setType] = useState('')
  const [imageExer, setImageExer] = useState('')
  const [support, setSupport] = useState('')
  const [ration, setRation] = useState()
  const [calo, setCalo]  = useState()
  const [description, setDescription] = useState('')

  const [time, setTime] = useState(0)
  const [difficulty, setDifficulty] = useState('')
  const [targerAudience, setTargetAudience] = useState('')
  

  const [userInfor, setUserInfor] = useState([])


  const fetchData = async() => {
    const response = await fetch(`${BASE_URL}/exercise/${id}`)
    const data = await response.json()
    setExercise(data.data)

    const resUser = await fetch(`${BASE_URL}/users/${data.data.userID}`)
    const dataUser = await resUser.json()
    console.log(dataUser.data) 
    setUserInfor(dataUser.data)


    setNameExer(data.data.nameExer)
    setType(data.data.typeExer)
    setImageExer(data.data.imageExer)
    setSupport(data.data.support)
    setDescription(data.data.descExer)
    setRation(data.data.ration)
    setCalo(data.data.calo)

    setTime(data.data.time)
    setDifficulty(data.data.difficulty)
    setTargetAudience(data.data.targerAudience)
    
    // setFoodUser(data.data.users[0].foods)

  }

  

  useEffect(() => {
    fetchData()
  }, [])
  console.log(Exercise)
  

  

  return (
    <div className='DetailExercise d-flex flex-column'>
    <NavbarTwo/>
      <p className='title-back d-flex flex-row align-items-center' onClick={handleClick}><span class="material-symbols-outlined">arrow_back</span>Quay lại</p>
      <div className='body-detail d-flex flex-row justify-content-between '>
        <div className='body-detail-food d-flex flex-column'>
          <div className='body-food d-flex flex-row'>
            <img src={imageExer}/>
            <div className='detail-food d-flex flex-column'>
              <div className='reviews d-flex flex-row align-items-center justify-content-between'>
                <p className='name-food'>{nameExer}</p>
                <div className='review-food d-flex flex-rows align-items-center'>
                  <p className='like d-flex flex-rows align-items-center'><span class="material-symbols-outlined">favorite</span>120</p>
                  <p className='comment d-flex flex-rows align-items-center'><span class="material-symbols-outlined">chat_bubble</span>13</p>
                  <p className='save d-flex flex-rows align-items-center'><span class="material-symbols-outlined">bookmark</span>12</p>
                </div>
              </div>
              <div className='ration d-flex flex-column'>
                <p className='ration-calo d-flex flex-row justify-content-between'>Thời gian:<span>{time}</span></p>
                <p className='total-calo d-flex flex-row justify-content-between'>Calo tiêu thụ:<span>{calo}</span></p>
              </div>
              {/* <p className='main-food'>Nguyên liệu chính: <span>{mainMaterial}</span></p>
              <p className='auxiliary-food'>Nguyên liệu phụ: <span>{auxiMaretial}</span></p>
              <p className='additives'>Phụ gia: <span>{additives}</span></p> */}
              <p className='support'>Hỗ trợ: <span>{support}</span></p>
              <p className='type'>Loại bài tập: <span>{type}</span></p>
              <p className='audience'>Đối tượng: <span>{targerAudience}</span></p>
              <p className='diffi'>Độ khó: <span>{difficulty}</span></p>
            </div>
          </div>

          <div className='desc-food d-flex flex-column'>
            <p className='title-desc'>Mô tả chi tiết:</p>
            <textarea class="form-control note" aria-label="With textarea" disabled
            value={description}></textarea>
            <button>Cách thực hiện</button>
          </div>
        </div>
        <div className='author-food d-flex flex-column'>
          <div className='infor-author d-flex flex-row align-items-center'>
            <img src={userInfor.avatar}/>
            <div className='name-author d-flex flex-column'>
              <p className='name'>{userInfor.lastFirstName}</p>
              <p className='id'>{userInfor.userName}</p>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
      </div>
        


      <div class="modal fade modal-comment"  id="comment" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
               <div class="modal-dialog modal-lg">
                    <div class="modal-content d-flex justify-content-between">
                          <div className='nav-chat d-flex flex-row justify-content-between'>
                            <p>Bình luận</p>
                            <span class="material-symbols-outlined" data-bs-dismiss="modal">close</span>
                          </div>
                          <div className='body d-flex flex-column'>
                            <div className='body-1 d-flex flex-row'>
                              <img src={userIcons}/>
                              <div className='user d-flex flex-column'>
                                <p className='name-user'>Nguyễn Như Từ</p>
                                <p className='desc'>Món ăn ngon, bổ dưỡng, dễ chế biến</p>
                              </div>
                            </div>
                            <div className='body-1 d-flex flex-row'>
                              <img src={userIcons}/>
                              <div className='user d-flex flex-column'>
                                <p className='name-user'>Trùng Dương</p>
                                <p className='desc'>Đánh giá món ăn cao</p>
                              </div>
                            </div>
                          </div>
                         <div className='user-comment d-flex flex-row align-items-center'>
                            <input className='comment' placeholder='Nhập đánh giá của bạn' type='text'/>
                            <p className='d-flex flex-row justify-content-between'><span class="material-symbols-outlined">send</span>Gửi</p>
                         </div>
                    </div>
               </div>
          </div>


      
    </div>
  )
}
export default DetailExercise