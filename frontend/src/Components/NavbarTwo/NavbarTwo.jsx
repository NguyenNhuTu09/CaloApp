import React, { useEffect, useRef} from 'react'
import './navbarTwo.css'
import { useContext , useState} from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import {Col, Form, FormGroup} from 'reactstrap'
import userIcons from '../../assets/User.png'
import { useLocation } from 'react-router-dom'
import { BASE_URL } from '../Utils/config'
import { AuthContext } from '../../Context/AuthContext'
const NavbarTwo = () => {
     const location = useLocation()
     const [data] = useState(location.state)
     const navigate = useNavigate()
     const resultRef = useRef('')
     const {user, dispatch} = useContext(AuthContext) 
     const [loading, setLoading] = useState([true])

     const [userResult, setUserResult] = useState([])
     const [foodResult, setFoodResult] = useState([])
     const [exerResult, setExerResult] = useState([])

     const [foodCount, setFoodCount] = useState(0)
     const [userCount, setUserCount] = useState(0)
     const [exerCount, setExerCount] = useState(0)

     const [searchState, setSearchState] = useState(false)

     const searchHandler = async() => {
          // setSearchState(false)
          try{

               const results = resultRef.current.value
           
               const res = await fetch(`${BASE_URL}/search/searchInfor?query=${results}`)
           
               if(!res.ok) alert('Something went wrong ')
               const result = await res.json()
               console.log(result.data)
               // navigate(`/foods/search/getFoodBySearch?nameFood=${nameFood}`, {state: result.data})
     
               setUserResult(result.data.users.data)
               setFoodResult(result.data.foods.data)
               setExerResult(result.data.exercises.data)
     
               setUserCount(result.data.users.count)
               setFoodCount(result.data.foods.count)
               setExerCount(result.data.exercises.count)
               setSearchState(true)
     
               console.log(foodResult)
          }catch(error){
               console.log("Có bug rồi:" + error)
          }finally{
               setLoading(false);
          }
     }
     const detailFood = () => {
          $('#search').modal('hide'); 
     }

     useEffect(() => {
          
     }, [])

     return (
          <div className='test-nav d-flex flex-rows justify-content-between'>
               {/* <p>ok</p> */}
               <div className='input-search d-flex flex-rows align-items-center'>
                    {/* <input type='text' placeholder='Tìm kiếm'/> */}
                    <span className="material-symbols-outlined">search</span>
                    <p className='title-search' data-bs-toggle="modal" data-bs-target="#search">Tìm kiếm</p>
               </div>

               <div className='icons d-flex flex-rows align-items-center'>
                    <div className='list-icons d-flex flex-row'>
                         <span className="material-symbols-outlined">mail</span>
                         <span className="material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#chat">send</span>
                         <span className="material-symbols-outlined">notifications</span>
                    </div>
                    
                    
                    <div class="list-setting dropdown">
                         
                         <img src={user.avatar} href="#" id="dropdownMenuLink" data-bs-toggle="dropdown"/>
                         <ul class="dropdown-menu">
                              <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">account_circle</span>Hồ sơ</p>
                              <Link className='link-logout' to='/login'>
                                   <p className='d-flex flex-row align-items-center'>

                                   <span class="material-symbols-outlined">logout</span>Đăng xuất
                                   </p>
                              </Link>
                         </ul>

                         
                    </div>
               </div>

               <div class="modal fade chat-box" id="chat">
                    <div class="modal-dialog modal-lg">
                         <div class="modal-content">
                              <div className='nav-chat d-flex flex-row justify-content-between'>
                                   <p className='title-chat'>Tin nhắn</p>
                                   <span class="material-symbols-outlined" data-bs-dismiss="modal">close</span>
                              </div>
                              <div class="body-chat d-flex flex-row justify-content-between">
                                   <div className='user-chat d-flex flex-column'>
                                        <div className='user-chat-items d-flex flex-row justify-content-between'>
                                             <img src={userIcons}/>
                                             <div className='infor-user d-flex flex-column'>
                                                  <p className='name-user'>Nguyễn Như Từ</p>
                                                  <p>6 ngày nữa kìa</p>
                                             </div>    
                                        </div>
                                   </div>

                                   <div className='infor-chat d-flex flex-column'>

                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


               <div class="modal fade search-box" id="search" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen  modal-dialog-scrollable">
                         <div class="modal-content">
                              <div className='modal-body'>
                                   
                                   <div className='search-box d-flex flex-column align-items-center'>

                                        <div className='nav-search d-flex flex-row align-items-center'>
                                             <span class="material-symbols-outlined" data-bs-dismiss="modal">arrow_back</span>
                                             <input type='text' placeholder='Tìm kiếm' ref={resultRef}/>
                                             <span class="material-symbols-outlined" onClick={searchHandler}>search</span>
                                             <span class="material-symbols-outlined" data-bs-dismiss="modal">close</span>
                                        </div>
                                   </div>

                                   {/* {loading ? <div className='loading d-flex flex-column align-items-center'>
                                                  <img src='https://res.cloudinary.com/dozs7ggs4/image/upload/v1706711758/03-05-45-320_512_ae3nkg.gif'/>
                                                  <p>Đang tải danh sách món ăn</p>
                                             </div> : null} */}

                                   <div className='index d-flex flex-column align-items-center'>
                                        {
                                             searchState ? (
                                                  <div className='index-result d-flex flex-row justify-content-between align-items-center'>
                                                       <p className='title-search'>{foodCount + exerCount + userCount}<span> Kết quả</span></p>
                                                       <select className='select-items' id="01">
                                                            <option disabled selected value="">Sắp xếp theo</option>
                                                            <option value="volvo">Việt Nam</option>
                                                            <option value="saab">Trung Quốc</option>
                                                            <option value="opel">Ý</option>
                                                            <option value="audi">Mỹ</option>
                                                            <option value="audi">Pháp</option>
                                                       </select>

                                                  </div>) : null
                                        }
                                        
                                   </div>
                                   

                                   <div className='result-search d-flex flex-column align-items-center'>
                                        <div className='result d-flex flex-column'>
                                        {
                                             foodResult.map(({_id, imageFood, typeFood, nameFood, calo, mainMaterial, auxiliaryMaterials}) => {
                                                  return(
                                                       <div className='items d-flex flex-rows align-items-center' key={_id} >
                                                            <img src={imageFood}/>
                                                            <div className='infor d-flex flex-column'>
                                                                 <p className='name'>{nameFood}</p>
                                                                 <p className='calo'>{calo} Calo<span>- {typeFood}</span></p>
                                                                 <p className='main'>{mainMaterial}<span>- {auxiliaryMaterials}</span></p>
                                                            </div>

                                                            <div className='d-flex flex-row justify-content-end'>
                                                                 <Link className='link' to={`/app/menu/${_id}`} onClick={detailFood}>
                                                                      <span class="material-symbols-outlined">arrow_forward_ios</span>
                                                                 </Link>
                                                            </div>
                                                       </div>
                                                  )
                                             })
                                        }
                                        {
                                             exerResult.map(({_id, imageExer, typeExer, nameExer, calo, time, targerAudience, difficulty}) => {
                                                  return(
                                                       <div className='items d-flex flex-rows align-items-center' key={_id} >
                                                            <img src={imageExer}/>
                                                            <div className='infor d-flex flex-column'>
                                                                 <p className='name'>{nameExer}</p>
                                                                 <p className='calo'>{calo} Calo<span>- {time}</span>m</p>
                                                                 <p className='main'>{typeExer}<span>- {targerAudience}</span></p>
                                                            </div>

                                                            <div className='d-flex flex-row justify-content-end'>
                                                                 <Link className='link' to={`/app/exercise/${_id}`} onClick={detailFood}>
                                                                      <span class="material-symbols-outlined">arrow_forward_ios</span>
                                                                 </Link>
                                                            </div>
                                                       </div>
                                                  )
                                             })
                                        }
                                        {
                                             userResult.map(({_id, avatar, userName, lastFirstName}) => {
                                                  return(
                                                       <div className='items d-flex flex-rows align-items-center' key={_id} >
                                                            <img src={avatar}/>
                                                            <div className='infor d-flex flex-column'>
                                                                 <p className='name'>{userName}</p>
                                                                 <p className='calo'>{lastFirstName}</p>
                                                                 {/* <p className='main'>{typeExer}<span>- {targerAudience}</span></p> */}
                                                            </div>

                                                            <div className='d-flex flex-row justify-content-end'>
                                                                 <Link className='link' to={`/app/users/${_id}`} onClick={detailFood}>
                                                                      <span class="material-symbols-outlined">arrow_forward_ios</span>
                                                                 </Link>
                                                            </div>
                                                       </div>
                                                  )
                                             })
                                        }
                                        
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
     </div>
  )
}
export default NavbarTwo
