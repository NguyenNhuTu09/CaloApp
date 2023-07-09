import React, {useState, useEffect} from 'react'
import './menu.css'
import {Link} from 'react-router-dom'

// import Data from '../../Data/Data'
import arrow from '../../assets/Arrow.png'
import calculateAvgRating from '../Utils/avgRating.js'

import addplan from '../../assets/addplan.png'


import {BsSearch} from 'react-icons/bs'
import {AiFillStar, AiTwotoneEuroCircle} from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io';

import Chicken2 from '../../assets/Food/Chicken2.jpg'
import Ham from '../../assets/Food/Ham.jpg'
import Suachua from '../../assets/Food/Sua chua.jpg'
import Chuoi from '../../assets/Food/Chuoi.jpg'
import Catuyet from '../../assets/Food/Ca tuyet.jpg'
import Cangu from '../../assets/Food/Ca ngu.jpg'
import Cahoi from '../../assets/Food/Ca hoi.jpg'
import Thitbo from '../../assets/Food/Thit bo.jpg'
import Hanhnhan from '../../assets/Food/Hanh nhan.jpg'
import Khoailang from '../../assets/Food/Khoai lang.jpg'
import Carophi from '../../assets/Food/Ca ro phi.jpg'
import Bibau from '../../assets/Food/Bi bau.jpg'
import Bachtuoc from '../../assets/Food/Bach tuoc.jpg'

import Phobo from '../../assets/Food/Pho bo.jpg'
import Hutieu from '../../assets/Food/Hu tieu.jpg'
import Whey from '../../assets/Food/Whey.jfif'
import Capuchino from '../../assets/Food/Capuchino.jpg'
import Namhuong from '../../assets/Food/Nam huong.jpg'
import Nuoceptao from '../../assets/Food/Nuoc ep tao.jpg'

import Banhmithitga from '../../assets/Food/Banh mi thit ga.jpg'
import Gatandoori from '../../assets/Food/Ga tandoori.jpg'
import Boapchao from '../../assets/Food/Bo ap chao.jpg'
import { Outlet } from 'react-router'


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
  {
    id: 4,
    imageFoodDetail: <img src={Catuyet}/>,
    type: 'Protein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Cá tuyết',
    gam: '400g',
    calories: '560 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 6,
    imageFoodDetail: <img src={Cahoi}/>,
    type: 'Omega-3',
    star: '4.1',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Cá hồi',
    gam: '550',
    calories: '640 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 7,
    imageFoodDetail: <img src={Cangu}/>,
    type: 'Protein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Cá ngừ',
    gam: '300g',
    calories: '450 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 8,
    imageFoodDetail: <img src={Thitbo}/>,
    type: 'Chất đạm',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Thịt bò',
    gam: '260g',
    calories: '560 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 9,
    imageFoodDetail: <img src={Hanhnhan}/>,
    type: 'Chất xơ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Hạnh nhân',
    gam: '150',
    calories: '290 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 10,
    imageFoodDetail: <img src={Bachtuoc}/>,
    type: 'Chất đạm',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Bạch tuộc',
    gam: '300g',
    calories: '560 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 11,
    imageFoodDetail: <img src={Bibau}/>,
    type: 'Chất xơ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Bí bầu',
    gam: '300g',
    calories: '380 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 12,
    imageFoodDetail: <img src={Khoailang}/>,
    type: 'Chất xơ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Khoai lang',
    gam: '300g',
    calories: '460 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 13,
    imageFoodDetail: <img src={Carophi}/>,
    type: 'Chất đạm',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Cá rô phi',
    gam: '300g',
    calories: '380 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 14,
    imageFoodDetail: <img src={Nuoceptao}/>,
    type: 'Chất xơ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Nước ép táo',
    gam: '300ml',
    calories: '200 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 15,
    imageFoodDetail: <img src={Namhuong}/>,
    type: 'Chất xơ',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Nấm hương',
    gam: '400g',
    calories: '280 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 16,
    imageFoodDetail: <img src={Whey}/>,
    type: 'Cacbonhydrat',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'WHEY',
    gam: '200g',
    calories: '400 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 17,
    imageFoodDetail: <img src={Phobo}/>,
    type: 'Chất đạm',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Phở bò',
    gam: '300g',
    calories: '600 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 18,
    imageFoodDetail: <img src={Hutieu}/>,
    type: 'Chất đạm',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Hủ tiếu',
    gam: '300g',
    calories: '630 Calo',
    description: '....',
    teps: 'Bước 1'
  },
  {
    id: 19,
    imageFoodDetail: <img src={Capuchino}/>,
    type: 'Cafein',
    star: '5.0',
    icon: <AiFillStar/>,
    nameFoodDetail: 'Capuchino',
    gam: '250ml',
    calories: '480 Calo',
    description: '....',
    teps: 'Bước 1'
  },
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

import useFetch from '../Hooks/useFetch.js'
import {BASE_URL} from '../Utils/config.js'
import Food from './Food'
import { Col, Row } from 'reactstrap'


const Menu = () => {
  const [Foods, setFoods] = useState([])
  const [Loading, setLoading] = useState(false)

  const [testReviews, setTestReviews] = useState([])


  const fetchData = async() => {
    const response = await fetch(`${BASE_URL}/foods/`)
    const data = await response.json();
    setFoods(data.data)
    console.log(data.data)
  }
  useEffect(() => {
    fetchData();
  }, [])
  console.log(Foods)

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
              Foods.map(({_id, imageFood, Type, nameFood, totalCalories, ration, reviews}) => {
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
      </div>
      <Outlet/>
    </div>
  )
}
export default Menu
