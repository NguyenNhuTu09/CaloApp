import React, {useState, useEffect, useContext} from 'react'
import './menu.css'
import {Link} from 'react-router-dom'
import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx'

import addplan from '../../assets/addplan.png'


import {BsSearch} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io';


import { AuthContext } from '../../Context/AuthContext'

import {BASE_URL} from '../Utils/config.js'


const Menu = () => {
  const {user, dispatch} = useContext(AuthContext)
  const [Foods, setFoods] = useState([])

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
    <div className='Menu d-flex flex-column '>
      <NavbarTwo/>
        <div className='menu-list d-flex flex-column'>
          
          <div className='nav-search-menu d-flex flex-column'>
            <div className='input-search d-flex flex-row justify-content-between'>
              <input className='name-search' type='text' placeholder='Nhập tên món ăn'/>
              <p className='icons-search d-flex flex-row align-items-center'><span class="material-symbols-outlined">search</span></p>
            </div>

            <div className='search-other d-flex flex-row'>
              <div className='search d-flex flex-row align-items-center justify-content-between'>
                <label className='title' for="01">Lượng Calo (dưới):</label>
                <select className='select-items' id="01">
                  <option value="volvo">200</option>
                  <option value="saab">300</option>
                  <option value="opel">400</option>
                  <option value="audi">600</option>
                </select>
              </div>

              <div className='search d-flex flex-row align-items-center justify-content-between'>
                <label className='title' for="02">Quốc gia:</label>
                <select className='select-items' id="02">
                  <option value="volvo">Việt Nam</option>
                  <option value="saab">Trung Quốc</option>
                  <option value="opel">Ý</option>
                  <option value="audi">Mỹ</option>
                  <option value="audi">Pháp</option>
                </select>
              </div>

              <div className='search d-flex flex-row align-items-center justify-content-between'>
                <label className='title' for="03">Cung cấp:</label>
                <select className='select-items' id="03">
                  <option value="volvo">Omega-3</option>
                  <option value="saab">Omega-6</option>
                  <option value="opel">Chất xơ</option>
                  <option value="audi">Chất đạm</option>
                  <option value="audi">Protein</option>
                </select>
              </div>


              <div className='search d-flex flex-row align-items-center justify-content-between'>
                <label className='title' for="04">Đối tượng:</label>
                <select className='select-items' id="04">
                  <option value="volvo">Giảm cân</option>
                  <option value="saab">Tăng cân</option>
                  <option value="opel">Tập thể hình</option>
                </select>
              </div>


              <p className='title-search d-flex flex-row justify-content-between align-items-center'><span class="material-symbols-outlined">search</span>Tìm kiếm</p>

            </div>
          </div>
          <div className='foods-array d-flex flex-row'>

            {
              Foods.map(({_id, imageFood, typeFood, nameFood, calo}) => {
                return(
                  <div className='food-items-final d-flex flex-column' key={_id} >
                        <div className='infor-food d-flex flex-row justify-content-between'>
                            <div className='image-food'>
                                  <img src={imageFood}/>
                            </div>

                            <div className='infor d-flex flex-column'>
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
        </div>
    </div>
  )
}
export default Menu
