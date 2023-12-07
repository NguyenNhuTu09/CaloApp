import React, {useState, useEffect, useContext} from 'react'
import './menu.css'
import {Link} from 'react-router-dom'

// import Data from '../../Data/Data'
import arrow from '../../assets/Arrow.png'

import addplan from '../../assets/addplan.png'


import {BsSearch} from 'react-icons/bs'
import {AiFillStar, AiTwotoneEuroCircle} from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io';


import { AuthContext } from '../../Context/AuthContext'
import { Outlet } from 'react-router'

import {BASE_URL} from '../Utils/config.js'


const Menu = () => {
  const {user, dispatch} = useContext(AuthContext)
  const [Foods, setFoods] = useState([])
  const [Loading, setLoading] = useState(false)

  const [testReviews, setTestReviews] = useState([])


  const fetchData = async() => {
    const response = await fetch(`${BASE_URL}/foods/`)
    const data = await response.json();
    setFoods(data.data)
    console.log(data.data)

    // user.foods.pop()
  }
  useEffect(() => {
    fetchData();
  }, [])


  console.log(Foods)

  console.log(user)


  return (
    <div className='Menu'>
      <div class="container-fluid">
        <div class="row">
          <div className='col-md-1'>
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Tất cả
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Tất cả</a></li>
                <li><a class="dropdown-item" href="#">Tập thể hình</a></li>
                <li><a class="dropdown-item" href="#">Giảm cân</a></li>
              </ul>
            </div>
          </div>

          <div className='create-food-final d-flex flex-row col-md-1 align-items-center'>
            <img src={addplan}/>
            <p>Tải lên</p>
          </div>
          <div class="col-md-4 ms-auto">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <span class="input-group-text"><BsSearch/></span>
            </div>
          </div>
        </div>
        <hr></hr>
        
        <div className='menu-list d-flex flex-row'>
          
          <div className='nav d-flex flex-column'>
              <p className='fs-4 fw-bold'>Phân loại theo:</p>
              <div className='calo d-flex flex-column'>
                <p className='text fs-6 fw-bold'>Lượng calo:</p>
                <input type="range" class="form-range" id="customRange1"/>
                <div className='d-flex flex-row'>
                  <p className='from'>Từ:</p>
                  <input type="text" class="form-control"/>
                  <p className='to'>Đến:</p>
                  <input type="text" class="form-control"/>
                </div>
              </div>
              <hr/>
            <div className='country d-flex flex-column'>
              
              <p className='text fs-6 fw-bold d-flex flex-row justify-content-between'>Quốc gia: <IoIosArrowDown className='icons'/></p>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Việt Nam</p>
              </div>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Thái Lan</p>
              </div>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Nhật Bản</p>
              </div>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Hàn Quốc</p>
              </div>
            </div>
            <hr/>
            <div className='provide d-flex flex-column'>
              <p className='text fs-6 fw-bold d-flex flex-row justify-content-between'>Cung cấp: <IoIosArrowDown className='icons'/></p>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Protein</p>
              </div>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Chất xơ</p>
              </div>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Chất đạm</p>
              </div>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Canxi</p>
              </div>
            </div>
            <hr/>
            <div className='rank d-flex flex-column'>
              <p className='text fs-6 fw-bold d-flex flex-row justify-content-between'>Loại: <IoIosArrowDown className='icons'/></p>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Đồ uống</p>
              </div>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Nguyên liệu</p>
              </div>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Thực phẩm chức năng</p>
              </div>
              <div className='d-flex flex-row'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p>Đồ ăn nhanh</p>
              </div>
            </div>

          </div>
          <div className='food row'>
            {
              Foods.map(({_id, imageFood, typeFood, nameFood, calo, ration}) => {
                return(
                  <div key={_id} className='food-menu'>
                    <div className='image-food position-relative'>
                      <img  src={imageFood}/>
                    </div>
                    <div className='detail-food'>
                      <p className='caterogy d-flex flex-row justify-content-end'>
                      {/* {reviews} */}
                        <span><AiFillStar/></span>
                      </p>
                      <p className='caterogy d-flex flex-row justify-content-end'>{typeFood}</p>
                      <p className='food-name fw-bold fs-6 d-flex flex-row justify-content-between'>{nameFood} <span>{ration} g</span></p>
                      <p className='calo d-flex flex-row justify-content-between'>{calo} Calo<span>
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
      </div>
    </div>
  )
}
export default Menu
