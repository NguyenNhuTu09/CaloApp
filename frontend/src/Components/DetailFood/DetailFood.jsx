import React from 'react'
import './detailFood.css'
import { Link } from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import {MdModeComment} from 'react-icons/md'
import {AiFillCheckSquare} from 'react-icons/ai'
import {MdVerifiedUser} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {RiFileUserFill} from 'react-icons/ri'
import arrow from '../../assets/Arrow.png'


import user from '../../assets/User.png'
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
  return (
    <div className='DetailFood d-flex flex-row'>
    {/* ============= Image food + review food START =========== */}
      <div className='image-review d-flex flex-column'>
        <div className='back d-flex flex-row'>
          <Link className='link d-flex flex-row' to={'/detailplan'}>
            <img src={arrowLeft}/>
            <p className='fs-6 fw-bold'>Quay lại</p>
          </Link>
        </div>
        <div className='image-food'>
          <img src={Chicken}/>
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
        <p className='fs-2 fw-bold'>Gà nướng Teriyaki</p>
        <div className='status d-flex flex-row border border-dark'>
          <AiFillCheckSquare className='icons fs-5'/>
          <p>Đã sử dụng</p>
        </div>
        <div className='title d-flex flex-row'>
          <p className='text'>Quốc gia: </p>
          <span className=' fw-bold'>
            Nhật Bản
          </span>
        </div>
        <div className='title d-flex flex-row'>
          <p className='text'>Nguyên liệu chính: </p>
          <span className=' fw-bold'>
            Thịt gà
          </span>
        </div>
        <div className='title d-flex flex-row'>
          <p className='text'>Chế biến: </p>
          <span className=' fw-bold'>
            Chiên 
          </span>
        </div>

        <div className='calo d-flex flex-row'>
          <div className='calo-text d-flex flex-column'>
            <p className='fs-5 fw-bold'>Tổng Calo: <span> 800</span></p>
            <p className='fw-normal'>Đơn vị: <span> 550 / 100g</span></p>
          </div>
          <div className='calo-number'>

          </div>
        </div>

        <div className='text-description'>
          <p className='fs-6 fw-bold'>Mô tả: </p>
          <p>Làm nóng lò ở 220 độ C
          Rưới dầu oliu, nêm muối và tiêu lên rau rồi nướng khoảng 20 phút
          Gà ướp với tỏi tẩm bột ít nhất 15 phút
          Cho dầu vào chảo, cho gà vào xào khoảng 10 phút
          Pha nước sốt: Trộn đều hỗn hợp nước tương, tỏi, mật ong, giấm, bột ngô, ớt, 1-2 chén nước
          Cho nước sốt vào chảo gà, để lửa khoảng 2-3 phút cho gia vị ngấm vào gà
          Lấy ra dĩa, trang trí và dùng với cơm, có thể rắc thêm vừng lên trên</p>
        </div>
      </div>
      {/* ============= Description food END =========== */}








      {/* ============= Author food START =========== */}
      <div className='author d-flex flex-column'>
        <div className='image d-flex flex-row'>
          <img src={user}/>
          <div className='info d-flex flex-column'>
            <div className='name-author d-flex flex-row justify-content-between'>
              <p className='fs-5 fw-bold'>Người dùng </p>
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
        {
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
            }
        </div>
        
      </div>
      {/* ============= Author food END =========== */}
    </div>
  )
}
export default DetailFood