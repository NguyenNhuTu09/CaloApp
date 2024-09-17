import React, {useState, useEffect, useContext} from 'react'
import './menu.css'
import {Link} from 'react-router-dom'
import NavbarTwo from '../../Components/Common/NavbarTwo/NavbarTwo.jsx'
import Search from './Search.jsx'
import addplan from '../../assets/addplan.png'


import {BsSearch} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io';


import { AuthContext } from '../../Context/AuthContext'

import { BASE_URL } from '../../Components/Utils/config.js'


const Menu = () => {
  const {user, dispatch} = useContext(AuthContext)
  const [Foods, setFoods] = useState([])
  const [loading, setLoading] = useState([true])
  console.log(user)
  const fetchData = async() => {
    try{
      const response = await fetch(`${BASE_URL}/foods/`)
      const data = await response.json();
      console.log(data)
      let k = []
      for(let i = 0; i < data.data.length; i++){
        const resUser = await fetch(`${BASE_URL}/users/byId/${data.data[i].userID}`)
        const dataUser = await resUser.json();
        console.log(dataUser)
        if(dataUser.role == "Admin"){
          k.push(data.data[i])
        }
      }
      setFoods(k)
    }catch(error){
      console.error('Error fetching data:', error);
    }finally {
      setLoading(false);
    }
  }

  
  
  useEffect(() => {
    fetchData();
  }, [])



  console.log(Foods)  

  return (
    <div className='Menu d-flex flex-column'>
      <NavbarTwo/>
        <div className='menu-list d-flex flex-column'>
          <div className='title-menu d-flex flex-column'>
            <p className='main-menu'>Thực đơn </p>
            <div className='new-menu d-flex flex-rows'>
              <p className='new d-flex flex-rows align-items-center'><span class="material-symbols-outlined">add</span>Tải lên</p>
            </div>
          </div>
          <div className='nav-search-menu d-flex flex-column'>
            {/* <Search/> */}
            <p className="title-1 fs-6">Tìm kiếm lọc theo:</p>
            <div className='search-other d-flex flex-row'>
              <div className='search-filter d-flex flex-row align-items-center justify-content-between'>
                {/* <label className='title' for="00">Lượt yêu thích:</label> */}
                <select className='select-items select-sequence' id="00">
                  <option disabled selected value="">Lượt yêu thích</option>
                  <option value="volvo">Cao đến thấp</option>
                  <option value="saab">Thấp đến cao</option>
                  
                </select>
              </div>

              <div className='search-filter d-flex flex-row align-items-center justify-content-between'>
                {/* <label className='title' for="01">Lượng Calo (dưới):</label> */}
                <select className='select-items select-calo' id="01">
                  <option disabled selected value="">Lượng Calo</option>
                  <option value="volvo">200</option>
                  <option value="saab">300</option>
                  <option value="opel">400</option>
                  <option value="audi">600</option>
                </select>
              </div>

              <div className='search-filter d-flex flex-row align-items-center justify-content-between'>
                {/* <label className='title' for="02">Quốc gia:</label> */}
                <select className='select-items select-country' id="02">
                  <option disabled selected value="">Quốc gia</option>
                  <option value="volvo">Việt Nam</option>
                  <option value="saab">Trung Quốc</option>
                  <option value="opel">Ý</option>
                  <option value="audi">Mỹ</option>
                  <option value="audi">Pháp</option>
                </select>
              </div>

              <div className='search-filter d-flex flex-row align-items-center justify-content-between'>
                {/* <label className='title' for="03">Cung cấp:</label> */}
                <select className='select-items select-nutrition' id="03">
                  <option disabled selected value="">Cung cấp</option>
                  <option value="volvo">Omega-3</option>
                  <option value="saab">Omega-6</option>
                  <option value="opel">Chất xơ</option>
                  <option value="audi">Chất đạm</option>
                  <option value="audi">Protein</option>
                </select>
              </div>


              <div className='search-filter d-flex flex-row align-items-center justify-content-between'>
                <select className='select-items select-food' id="04">
                  <option disabled selected value="">Phân loại</option>
                  <option value="volvo">Đồ uống</option>
                  <option value="opel">Thức ăn liền</option>
                </select>
              </div>

              <div className='search-filter d-flex flex-row align-items-center justify-content-between'>
                {/* <label className='title' for="05">Nguyên liệu chính:</label> */}
                <select className='select-items select-final' id="05">
                  <option disabled selected value="">Nguyên liệu chính</option>
                  <option value="volvo">Thịt bò</option>
                  <option value="saab">Thịt gà</option>
                  <option value="opel">Thịt lợn</option>
                </select>
              </div>

              


              
            </div>
            <p className='title-2'>Lựa chọn theo nhu cầu: </p>
            <div className='object-select d-flex flex-row align-items-center'>
              <p>Giảm cân</p>
              <p>Tăng cân</p>
              <p>Thể hình</p>
              <p>Healthy</p>
            </div>
          </div>
            {loading ? <div className='loading d-flex flex-column align-items-center'>
                <img src='https://res.cloudinary.com/dozs7ggs4/image/upload/v1706711758/03-05-45-320_512_ae3nkg.gif'/>
                <p>Đang tải danh sách món ăn</p>
            </div> : null}
          <div className='foods-array d-flex flex-row'>
            {
              Foods.map(({id, imageFood, typeFood, nameFood, calo}) => {
                return(
                  <div className='food-items-final d-flex flex-column justify-content-between' key={id} >
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
                        <div className='control-food d-flex flex-rows align-items-center'>
                            <Link className='link d-flex flex-row align-items-center' to={`/app/menu/${id}`}>Chi tiết
                              <span class="material-symbols-outlined">navigate_next</span>
                            </Link>
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
