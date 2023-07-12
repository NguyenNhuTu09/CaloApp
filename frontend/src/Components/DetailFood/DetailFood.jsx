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


const OptionsDetailFood = [
  {
    id: 20,
    imageFoodDetail: <img src={Gatandoori}/>,
    type: 'Protein',
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
  const [ration, setRation] = useState('')
  const [total, setTotal]  = useState('')
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
    setType(data.data.Type)
    setImageFood(data.data.imageFood)
    setSupport(data.data.support)
    setDescription(data.data.description)
    setProcessing(data.data.processing)
    setCountry(data.data.country)
    setMainMaterial(data.data.mainMaterial)
    setUser(data.data.users[0].lastFirstName)
    setTotal(data.data.totalCalories)
    
    setFoodUser(data.data.users[0].foods)

  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(Food)
  // console.log(nameFood)
  // console.log(User)
  console.log(foodUser)

  // const {data: food, loading, error} = useFetch(`${BASE_URL}/foods/${id}`)

  // const {nameFood, Type, imageFood, support, ration, totalCalories, mainMaterial, auxiliaryMaterials, Additives, processing, description, reviews} = food

  // useEffect(() => {
  // }, [food])



  

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
        <div className='text d-flex flex-row justify-content-between'>
          <p className='fs-6 fw-bold'><span><MdModeComment/></span>Nhận xét</p>
          <div className='d-flex flex-row'>
            <p>4.5<AiFillStar/>/5</p>
            <p>(9 nhận xét)</p>
          </div>
        </div>
        <div className='review d-flex flex-column '>
          <div className='review-01'>
            <p className='fs-6 fw-bold d-flex flex-row justify-content-between'>Nguyễn Như Từ<span><BiCommentDetail/></span></p>
            <p className='fs-6 fw-normal'>Ok</p>
            <p className='fs-6 fw-lighter d-flex flex-row justify-content-between'>15/05/2023
            <span>
              <AiFillStar className='icons'/>
              <AiFillStar className='icons'/>
              <AiFillStar className='icons'/>
              <AiFillStar className='icons'/>
              <AiFillStar className='icons'/>
            </span>
            </p>
          </div>
          
        </div>
      </div>
    {/* ============= Image food + review food END =========== */}








    {/* ============= Description food START =========== */}
      <div className='description d-flex flex-column'>
        <p className='fs-2 fw-bold'>{nameFood}</p>
        <div className='status d-flex flex-row'>
          <AiFillCheckSquare className='icons fs-5'/>
          <p>Đã sử dụng</p>
        </div>
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
          <p>{description}</p>
        </div>
      </div>
      {/* ============= Description food END =========== */}


      








      {/* ============= Author food START =========== */}
      <div className='author d-flex flex-column'>
        <div className='image d-flex flex-row'>
          <img src={user}/>
          <div className='info d-flex flex-column'>
            <div className='name-author d-flex flex-row justify-content-between'>
              <p className='fs-5 fw-bold'>{uuser}</p>
              <AiOutlineArrowRight className='icons fs-3'/>
            </div>
            <div className='status-author d-flex flex-row'>
              <RiFileUserFill className='fs-4'/>
              <p className='fs-6'>Tác giả</p>
            </div>
          </div>
        </div>
        <p className='title fs-6 fw-bold'>Tham khảo món ăn của <span>Người dùng</span></p>
        <div className='food-author d-flex flex-column'>
        {/* {
              OptionsDetailFood.map(({id, imageFoodDetail, type, star, icon, nameFoodDetail, gam, calories}) => {
                return(
                  <div key={id} className='food-menu'>
                    <div className='image-food position-relative'>
                      {imageFoodDetail}
                    </div>
                    <div className='detail-food'>
                      <p className='caterogy d-flex flex-row justify-content-end'><span>{star} {icon}</span></p>
                      <p className='caterogy d-flex flex-row justify-content-end'>{type}</p>
                      <p className='food-name fw-bold fs-6 d-flex flex-row justify-content-between'>{nameFoodDetail}<span>{gam}</span></p>
                      <p className='calo d-flex flex-row justify-content-between'>{calories}<span>Chi tiết <img src={arrow}/></span></p>
                    </div>
                  </div>
                )
              })
            } */}

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
        </div>
        
      </div>
      {/* ============= Author food END =========== */}
    </div>
  )
}
export default DetailFood