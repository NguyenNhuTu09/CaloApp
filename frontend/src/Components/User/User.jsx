import React, {useState, useEffect, useContext} from 'react'
import './user.css'
import { Link, useAsyncError} from 'react-router-dom'

import { BASE_URL } from '../Utils/config.js'
import { AuthContext } from '../../Context/AuthContext'

import axios from 'axios'

import NavbarTwo from '../NavbarTwo/NavbarTwo'


const User = () => {

  
  const {user, dispatch} = useContext(AuthContext)
  const [planUser, setPlanUser] = useState([])
  const [authen, setAuthen] = useState(true)
  const [Foods, setFoods] = useState([])
  const [exerUser, setExerUser] = useState([])

  const [foodsLike, setFoodsLike] = useState([])
  const [exersLike, setExersLike] = useState([])

  // const [fsLike, setFoodsLike] = useState([])

  const [loadingPlan, setLoadingPlan] = useState(false)
  const [loadingFood, setLoadingFood] = useState(false)
  const [loadingExer, setLoadingExer] = useState(false)

  const[userId, setUserId] = useState('')
  const checkAuthen = async() => {
    const resUser = await fetch(`${BASE_URL}/users/byId/${user.id}`)
    const dataUser = await resUser.json();
    if(dataUser.role == "Admin"){
      setAuthen(true)
    }else{
      setAuthen(false)
    }
  }

  const fetchData = async() => {
    const response = await fetch(`${BASE_URL}/foods/`)
    const data = await response.json();
    let k = []
    for(let i = 0; i < data.data.length; i++){
      if(data.data[i].userID == user.id){
        k.push(data.data[i])
      }
    }
    setFoods(k)

    const resPlan = await fetch(`${BASE_URL}/plans/`)
    const dataPlan = await resPlan.json()
    let p = []
    for(let i = 0; i < dataPlan.data.length; i++){
      if(dataPlan.data[i].userID == user.id){
        p.push(dataPlan.data[i])
      }
    }
    setPlanUser(p)

    const resExer = await fetch(`${BASE_URL}/exercise/`)
    const dataExer = await resExer.json()
    let e = []
    for(let i = 0; i < dataExer.data.length; i++){
      if(dataExer.data[i].userID == user._id){
        e.push(dataExer.data[i])
      }
    }
    setExerUser(e)

    // checkLoading()
  }
  

  const checkLoading = async() => {
    if(Foods == null){
      setLoadingFood(false)
    } else if(Foods != null ){
      setLoadingFood(true)
    }

    if(exerUser === null){
      setLoadingExer(false)
    }else if(exerUser != null ){
      setLoadingExer(true)
    }

    if(loadingPlan ==  null){
      setLoadingPlan(false)
    }else if(loadingPlan != null){
      setLoadingPlan(true)
    }
  }

  const fetchLink = async() => {
    const response = await fetch(`${BASE_URL}/foods/`)
    const data = await response.json();
    console.log(data)
    let k = []
    for(let i = 0; i < data.data.length; i++){
      for(let j = 0; j < data.data[i].likes.length; j++){
        if(user.id == data.data[i].likes[j]){
          k.push(data.data[i])
        }
      }
    }
    setFoodsLike(k)
    console.log(foodsLike)

    const resExer = await fetch(`${BASE_URL}/exercise/`)
    const dataExer = await resExer.json();
    let m = []
    for(let i = 0; i < dataExer.data.length; i++){
      for(let j = 0; j < dataExer.data[i].likes.length; j++){
        if(user.id == dataExer.data[i].likes[j]){
          m.push(dataExer.data[i])
        }
      }
    }

    setExersLike(m)
    console.log(exersLike)
  }

  const handleDeleteLikeFood = async(id) => {
    try {
      const response = await fetch(`${BASE_URL}/post/dlike/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to like post');
      }

      const data = await response.json();
      let test = foodsLike
      const newFoodLike = test.filter(_id => _id.toString() !== id)
      setFoodsLike(newFoodLike)

      // console.log(data)
    } catch (error) {
      console.error('Error liking post:', error.message);
    }
  };

  const handleDeleteLikeExercise = async(id) => {
    try {
      const response = await fetch(`${BASE_URL}/post/dlikeExer/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to like post');
      }

      const data = await response.json();
      let test = exersLike
      const newExerLike = test.filter(_id => _id.toString() !== id)
      setExersLike(newExerLike)

      // console.log(data)
    } catch (error) {
      console.error('Error liking post:', error.message);
    }
  };


  useEffect(() => {
    fetchData()
    checkAuthen()
    setUserId(user._id)
    fetchLink()
  },[])
 

  const [clickHome, setClickHome] = useState(true)
  const [clickHistory, setClickHistory] = useState(false)
  const [clickLike, setClickLike] = useState(false)
  const [clickSave, setClickSave] = useState(false)

  const [clickPlanUser, setClickPlanUser] = useState(true)
  const [clickFoodUser, setClickFoodUser] = useState(false)
  const [clickExerUser, setClickExerUser] = useState(false)

  const handleClickPlan = () => {
    setClickPlanUser(true)
    setClickFoodUser(false)
    setClickExerUser(false)
  }
  const handleClickFood = () => {
    setClickPlanUser(false)
    setClickFoodUser(true)
    setClickExerUser(false)
  }
  const handleClickExer = () => {
    setClickPlanUser(false)
    setClickFoodUser(false)
    setClickExerUser(true)
  }

  const handleClickHome = () => {
    setClickHome(true)
    setClickHistory(false)
    setClickLike(false)
    setClickSave(false)
  }
  const handleClickHistory = () => {
    setClickHome(false)
    setClickHistory(true)
    setClickLike(false)
    setClickSave(false)
  }
  const handleClickLike = () => {
    setClickHome(false)
    setClickHistory(false)
    setClickLike(true)
    setClickSave(false)
  }
  const handleClickSave = () => {
    setClickHome(false)
    setClickHistory(false)
    setClickLike(false)
    setClickSave(true)
  }



  return (
    <div className='User d-flex flex-column'>
      <NavbarTwo/>
      <div className='ssss d-flex flex-row justify-content-start align-items-center'>
        <p className='title-setting'>Tài khoản</p>
        {/* <div className='search-user d-flex flex-row align-items-center'>
          <input type='text' placeholder='Tìm người dùng'/>
          <span class="material-symbols-outlined">search</span>
        </div> */}
      </div>
      <div className='information-user d-flex flex-row'>
        <div className='nav-user d-flex flex-column'>
          <p className='home-icon d-flex flex-row align-items-center'
            onClick={handleClickHome} style={{ color: clickHome ? 'white': '#624761', background: clickHome ? '#4682A9' : 'none'}}
            ><span class="material-symbols-outlined">location_away</span>Tổng quan
          </p>
          
          <p className='history-icon d-flex flex-row align-items-center'
            onClick={handleClickHistory} style={{ color: clickHistory ? 'white': '#624761', background: clickHistory ? '#4682A9' : 'none'}}
            ><span class="material-symbols-outlined">update</span>Lịch sử
          </p>

          <p className='like-icon d-flex flex-row align-items-center'
            onClick={handleClickLike} style={{ color: clickLike ? 'white': '#624761', background: clickLike ? '#4682A9' : 'none'}}
            ><span class="material-symbols-outlined">favorite</span>Yêu thích
          </p>

          <p className='save-icon d-flex flex-row align-items-center'
            onClick={handleClickSave} style={{ color: clickSave ? 'white': '#624761', background: clickSave ? '#4682A9' : 'none'}}
            ><span class="material-symbols-outlined">bookmark</span>Đã lưu
          </p>
        </div>

        {
          clickHome ? (

            <div className='infor-user d-flex flex-column'>
              <div className='infor d-flex flex-row align-items-center'>
                <img src={user.avatar}/>
                <div className='title-info'>
                  <p className='fs-5 fw-bold d-flex flex-row align-items-center'>{user.lastFirstName}

                  {authen ? <span class="authen material-symbols-outlined">verified</span> : null}
                  
                  </p>
                  <p className='fs-6'>{user.userName}</p>
                  <p className='setting-user d-flex flex-row align-items-center'>
                  <span class="material-symbols-outlined">manage_accounts</span>Sửa hồ sơ</p>
                  {/* <p className='title-follow fs-6'>Theo dõi</p> */}
                </div>
              </div>
              <div className='nav-profile d-flex flex-row'>   
                <p className='plan-create d-flex flex-row align-items-center' onClick={handleClickPlan} style={{ color: clickPlanUser ? 'black': '#624761', fontWeight: clickPlanUser ? 'bold' : 'normal', borderBottom: clickPlanUser ? '1px solid black' : 'none'}}> 
                  <span class="material-symbols-outlined">checklist</span>Kế hoạch
                </p>
                <p className='food-create d-flex flex-row align-items-center' onClick={handleClickFood} style={{ color: clickFoodUser ? 'black': '#624761', fontWeight: clickFoodUser ? 'bold' : 'normal', borderBottom: clickFoodUser ? '1px solid black' : 'none'}}>
                  <span class="material-symbols-outlined">lunch_dining</span>Món ăn
                </p>
                <p className='exer-create d-flex flex-row align-items-center' onClick={handleClickExer} style={{ color: clickExerUser ? 'black': '#624761', fontWeight: clickExerUser ? 'bold' : 'normal', borderBottom: clickExerUser ? '1px solid black' : 'none'}}>
                  <span class="material-symbols-outlined">fitness_center</span>Bài tập
                </p>
              </div>
              {
                clickPlanUser ? (
                  <div className='plan-user d-flex flex-row'>
                  {/* {loadingPlan ? <div className='loading d-flex flex-column align-items-center'>
                      <span class="material-symbols-outlined">checklist</span>
                      <p>Kế hoạch của bạn sẽ xuất hiện tại đây</p>
                  </div> : null} */}
                  {
                    planUser.map(({_id, planName, dayStart, dayEnd, planState}) => {
                      return(
                        
                      <div className='plan-1' key={_id}>
                        <p className='d-flex flex-row justify-content-between align-items-center fw-bold'>{planName} 
                          <span data-bs-toggle="dropdown" aria-expanded="false" class="material-symbols-outlined">more_vert</span>
                          <ul class="dropdown-menu">
                            <Link class="dropdown-item">Chi tiết</Link>
                            <Link class="dropdown-item">Quá trình thực hiện</Link>
                          </ul>
                        </p>
                        <p className='d-flex flex-row justify-content-between align-items-center'>Bắt đầu <span>{dayStart}</span></p>
                        <p className='d-flex flex-row justify-content-between align-items-center'>Kết thúc<span>{dayEnd}</span></p>
                        <div className='status-plan'>
                          <p className='title-status'>{planState}</p>
                        </div>
                      </div>
                      )
                    })
                  }

                  </div>
                ) : clickFoodUser ? (
                  <div className='food-user d-flex flex-row'>
                    {/* {loadingFood ? <div className='loading d-flex flex-column align-items-center'>
                      <span class="material-symbols-outlined">lunch_dining</span>
                      <p>Món ăn của bạn sẽ xuất hiện tại đây</p>
                  </div> : null} */}
                  {
                    Foods.map(({_id, imageFood, typeFood, nameFood, calo}) => {
                      return(
                        <div className='food-items-final d-flex flex-column' key={_id} >
                              <div className='infor-food d-flex flex-row justify-content-between'>
                                  <div className='image-food'>
                                        <img src={imageFood}/>
                                  </div>

                                  <div className='infor-desc d-flex flex-column'>
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
                ) : (
                  <div className='food-user d-flex flex-row'>
                  {/* {loadingExer ? <div className='loading d-flex flex-column align-items-center'>
                  <span class="material-symbols-outlined">fitness_center</span>
                      <p>Bài tập của bạn sẽ xuất hiện tại đây</p>
                  </div> : null} */}
                  {
                    exerUser.map(({_id, imageExer, typeExer, nameExer, calo}) => {
                      return(
                        <div className='food-items-final d-flex flex-column' key={_id} >
                              <div className='infor-food d-flex flex-row justify-content-between'>
                                  <div className='image-food'>
                                        <img src={imageExer}/>
                                  </div>

                                  <div className='infor-desc d-flex flex-column'>
                                        <div className='d-flex flex-row justify-content-end'><p className='name-food fw-bold'>{nameExer}</p></div>
                                        <div className='d-flex flex-row justify-content-end'><p className='calo-food'><span>{calo}</span>Calo</p></div>
                                        <div className='d-flex flex-row justify-content-end'><p className='type-food'>{typeExer}</p></div>
                                        <div className='d-flex flex-row justify-content-end'>
                                          <p className='like-food d-flex flex-row align-items-center'>98<span class="material-symbols-outlined like">favorite</span></p>
                                        </div>
                                  </div>
                              </div> 
                              <div className='control-food d-flex flex-row justify-content-between'>
                                  <Link className='link' to={`/app/exercise/${_id}`}>Chi tiết</Link>
                                  <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">favorite</span></p>
                                  <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">bookmark</span></p>
                              </div>
                        </div>
                      )
                    })
                  }
                  </div>
                )
              }
            </div>
          ) : clickHistory ? (
            <div className='history-user d-flex flex-row justify-content-between'>
              {/* <div className=''> */}
            </div>
          ) : clickLike ?(
            <div className='like-user d-flex flex-row justify-content-between'>
              <div className='food-like d-flex flex-row'>
              
                {
                  foodsLike.map(({_id, imageFood, typeFood, nameFood, calo}) => {
                    return(
                      <div className='food-items-final d-flex flex-column' key={_id} >
                            <div className='infor-food d-flex flex-row justify-content-between'>
                                <div className='image-food'>
                                      <img src={imageFood}/>
                                </div>

                                <div className='infor-desc d-flex flex-column'>
                                      <div className='d-flex flex-row justify-content-end'><p className='name-food fw-bold'>{nameFood}</p></div>
                                      <div className='d-flex flex-row justify-content-end'><p className='calo-food'><span>{calo}</span>Calo</p></div>
                                      <div className='d-flex flex-row justify-content-end'><p className='type-food'>{typeFood}</p></div>
                                      <div className='d-flex flex-row justify-content-end'>
                                        <p className='like-food d-flex flex-row align-items-center'>98<span class="material-symbols-outlined like">favorite</span></p>
                                      </div>
                                </div>
                            </div> 
                            <div className='control-food d-flex flex-row align-items-center justify-content-between'>
                              <Link className='link d-flex flex-row align-items-center' to={`/app/menu/${_id}`}>Chi tiết
                                <span class="material-symbols-outlined">navigate_next</span>
                              </Link>
                                <p className='d-flex flex-row align-items-center'>
                                  <span class="material-symbols-outlined" onClick={() => handleDeleteLikeFood(_id.toString())}>favorite</span>
                                </p>
                                <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">bookmark</span></p>
                            </div>
                      </div>
                    )
                  })
                }

                {
                    exersLike.map(({_id, imageExer, typeExer, nameExer, calo}) => {
                      return(
                        <div className='food-items-final d-flex flex-column' key={_id} >
                              <div className='infor-food d-flex flex-row justify-content-between'>
                                  <div className='image-food'>
                                        <img src={imageExer}/>
                                  </div>

                                  <div className='infor-desc d-flex flex-column'>
                                        <div className='d-flex flex-row justify-content-end'><p className='name-food fw-bold'>{nameExer}</p></div>
                                        <div className='d-flex flex-row justify-content-end'><p className='calo-food'><span>{calo}</span>Calo</p></div>
                                        <div className='d-flex flex-row justify-content-end'><p className='type-food'>{typeExer}</p></div>
                                        <div className='d-flex flex-row justify-content-end'>
                                          <p className='like-food d-flex flex-row align-items-center'>98<span class="material-symbols-outlined like">favorite</span></p>
                                        </div>
                                  </div>
                              </div> 
                              <div className='control-food d-flex flex-row justify-content-between align-items-center'>
                                  <Link className='link d-flex flex-row align-items-center' to={`/app/exercise/${_id}`}> Chi tiết
                                  <span class="material-symbols-outlined">navigate_next</span>
                                  </Link>
                                  <p className='d-flex flex-row align-items-center'>
                                    <span class="material-symbols-outlined" onClick={() => handleDeleteLikeExercise(_id.toString())}>favorite</span>
                                  </p>
                                  <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">bookmark</span></p>
                              </div>
                        </div>
                      )
                    })
                  }
              
              </div>

              <div className='search d-flex flex-column'></div>
            </div>
          ) : (
            <div className='save-user'>
              save
            </div>
          )
        }

        

        

        
        
      </div>
      
      
    </div>
  )
}
export default User
