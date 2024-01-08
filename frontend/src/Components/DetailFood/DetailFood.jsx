import React, { useContext, useEffect, useState} from 'react'
import './detailFood.css'
import { Link } from 'react-router-dom'
import { useParams, useNavigate} from 'react-router-dom'
import {AuthContext} from '../../Context/AuthContext'
import { BASE_URL } from '../Utils/config.js'
import useFetch from '../Hooks/useFetch.js'

import {AiFillStar} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import {MdModeComment} from 'react-icons/md'
import {AiFillCheckSquare} from 'react-icons/ai'
import {MdVerifiedUser} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {RiFileUserFill} from 'react-icons/ri'
import arrow from '../../assets/Arrow.png'

import nguoidung from '../../assets/User.png'
import Chicken from '../../assets/Food/Chicken2.jpg'

import Banhmithitga from '../../assets/Food/Banh mi thit ga.jpg'
import Boapchao from '../../assets/Food/Bo ap chao.jpg'
import Gatandoori from '../../assets/Food/Ga tandoori.jpg'

import saveIcons from '../../assets/save.png';
import commentIcons from '../../assets/comment.png'
import shareIcons from '../../assets/share.png'


const OptionsDetailFood = [
  {
    id: 20,
    imageFoodDetail: <img src={Gatandoori}/>,
    // type: 'Protein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Gà Tandoori',
    gam: '̀500g',
    calories: '650 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 21,
    imageFoodDetail: <img src={Boapchao}/>,
    type: 'Protein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Bò áp chảo',
    gam: '̀400g',
    calories: '550 Calo',
    description: '....',
    teps: 'Bước 1'
  },
]

  

import arrowLeft from '../../assets/ArrowLeft.png'
const DetailFood = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const {id} = useParams()
  const {user} = useContext(AuthContext)

  const [Food, setFood] = useState([])

  const [nameFood, setNameFood] = useState('')
  const [type, setType] = useState('')
  const [imageFood, setImageFood] = useState('')
  const [support, setSupport] = useState('')
  const [ration, setRation] = useState()
  const [total, setTotal]  = useState()
  const [mainMaterial, setMainMaterial] = useState('')
  const [auxiMaretial, setAuxiMaterial] = useState('')
  const [additives, setAdditives] = useState('')
  const [description, setDescription] = useState('')
  const [processing, setProcessing] = useState('')
  const [review, setReview] = useState('')
  const [country, setCountry] = useState('')
  const [uuser, setUser] = useState([])

  const [foodUser, setFoodUser] = useState([])


  const fetchData = async() => {
    const response = await fetch(`${BASE_URL}/foods/${id}`)
    const data = await response.json()
    setFood(data.data)


    setNameFood(data.data.nameFood)
    setType(data.data.typeFood)
    setImageFood(data.data.imageFood)
    setSupport(data.data.support)
    setDescription(data.data.descFood)
    setProcessing(data.data.cookingMethod)
    setCountry(data.data.country)
    setMainMaterial(data.data.mainMaterial)
    // setUser(data.data.users[0].lastFirstName)
    setTotal(data.data.calo)
    
    // setFoodUser(data.data.users[0].foods)

  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(Food)
  

  

  return (
    <div className='DetailFood d-flex flex-row justify-content-between'>
    {/* ============= Image food + review food START =========== */}
      <div className='image-review d-flex flex-column'>
        <div className='back d-flex flex-row'>
          <Link className='link d-flex flex-row' onClick={handleClick}>
            <img src={arrowLeft}/>
            <p className='fs-6 fw-bold'>Quay lại</p>
          </Link>
        </div>
        <div className='image-food'>
          <img src={imageFood}/>
        </div>
        <div className='text d-flex flex-row justify-content-start'>
          <div className='d-flex flex-row'>
            <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">favorite</span>129</p>
            <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">chat</span>12</p>
            <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">bookmark</span>98</p>
          </div>
        </div>

        <div className='support d-flex flex-row justify-content-between'>
          <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">favorite</span>Yêu thích</p>
          <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">chat</span>Đánh giá</p>
          <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">bookmark</span>Lưu</p>

        </div>
        

      </div>
    {/* ============= Image food + review food END =========== */}








    {/* ============= Description food START =========== */}
      <div className='description d-flex flex-column justify-content-between'>
        <p className='nameFood fs-4 fw-bold'>{nameFood}</p>
        <div className='title d-flex flex-row'>
          <p className='text'>Quốc gia: </p>
          <span className=' fw-bold'>
            {country}
          </span>
        </div>
        <div className='title d-flex flex-row'>
          <p className='text'>Nguyên liệu chính: </p>
          <span className=' fw-bold'>
            {mainMaterial}
          </span>
        </div>
        <div className='title d-flex flex-row'>
          <p className='text'>Chế biến: </p>
          <span className=' fw-bold'>
            {processing}
          </span>
        </div>

        <div className='calo d-flex flex-row'>
          <div className='calo-text d-flex flex-column'>
            <p className='fs-5 fw-bold'>Tổng Calo: <span> {total}</span></p>
            <p className='fw-normal'>Đơn vị: <span> {ration} / 100g</span></p>
          </div>
          <div className='calo-number'>

          </div>
        </div>

        <div className='text-description'>
          <p className='fs-6 fw-bold'>Mô tả: </p>
          {/* <p>{description}</p> */}
          <textarea class="form-control note" aria-label="With textarea" disabled
          value={description}></textarea>

          {/* <textarea class="form-control" id="textAreaExample" rows="6">{description}</textarea> */}
        </div>

        <div className='actions d-flex flex-row justify-content-end'>
          <button>Cách thực hiện</button>
        </div>
      </div>
      {/* ============= Description food END =========== */}

      <div className='author d-flex flex-column'>  
        <div className='infor d-flex flex-row align-items-center'>
          <img src={user.avatar}/>
          <div className='infor-author d-flex flex-column'>
              <p className='name-user'>{user.lastFirstName}</p>
              <p className='id-user'>{user.userName}</p>
          </div>
        </div>

        <div className='control-user d-flex flex-row justify-content-between'>
          <p className='follow d-flex flex-row align-items-center'><span class="material-symbols-outlined">notification_add</span>Theo dõi</p>
          <p className='detail-user d-flex flex-row align-items-center'><span class="material-symbols-outlined">account_circle</span>Hồ sơ</p>
        </div>
      </div>






      
    </div>
  )
}
export default DetailFood