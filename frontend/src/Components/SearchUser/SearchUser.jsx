import React, { useContext, useEffect, useState}  from 'react'
import './searchUser.css'
import { useParams, useNavigate} from 'react-router-dom'
import {AuthContext} from '../../Context/AuthContext'
import { Link} from 'react-router-dom'
import { BASE_URL } from '../Utils/config'
import NavbarTwo from '../Common/NavbarTwo/NavbarTwo'
const SearchUser = () => {
  const navigate = useNavigate();

  function handleClick() {
      navigate(-1);
  }

  const {id} = useParams()
  const {user} = useContext(AuthContext)
  const [userInforSearch, setUserInforSearch] = useState([])
  const fetchData = async() => {
    try{
          const response = await fetch(`${BASE_URL}/users/${id}`)
          const data = await response.json()
          setUserInforSearch(data.data)


    }catch(error){
          console.log("Có bug:" + error)
    }
  }
  const [exerUser, setExerUser] = useState([])
  const [planUser, setPlanUser] = useState([])
  const [Foods, setFoods] = useState([])

  const fetchData2 = async() => {
    try{
      const resFood = await fetch(`${BASE_URL}/foods/`)
      const dataFood = await resFood.json();
  
      let k = []
      for(let i = 0; i < dataFood.data.length; i++){
        if(dataFood.data[i].userID == userInforSearch._id){
          k.push(dataFood.data[i])
        }
      }
      setFoods(k)
  
      const resPlan = await fetch(`${BASE_URL}/plan/`)
      const dataPlan = await resPlan.json()
      let p = []
      for(let i = 0; i < dataPlan.data.length; i++){
        if(dataPlan.data[i].userId == userInforSearch._id){
          p.push(dataPlan.data[i])
        }
      }
      setPlanUser(p)
  
      const resExer = await fetch(`${BASE_URL}/exercise/`)
      const dataExer = await resExer.json()
      let e = []
      for(let i = 0; i < dataExer.data.length; i++){
        if(dataExer.data[i].userID == userInforSearch._id){
          e.push(dataExer.data[i])
        }
      }
      setExerUser(e)
    }catch(error){
      console.log("Co bug roi:" + error)
    }
  }
  useEffect(() => {
      fetchData()
      fetchData2()
  }, [])
  console.log(userInforSearch)
  console.log(Foods)
  console.log(exerUser)

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

     
     
     
  return (
    <div className='SearchUser d-flex flex-column'>
          <NavbarTwo/>
          <div className='information-user d-flex flex-row'>
            <div className='infor-user d-flex flex-column'>
              <div className='infor d-flex flex-row align-items-center'>
                <img src={userInforSearch.avatar}/>
                <div className='title-info'>
                  <p className='fs-5 fw-bold d-flex flex-row align-items-center'>{userInforSearch.lastFirstName}

                  {/* {authen ? <span class="authen material-symbols-outlined">verified</span> : null} */}
                  
                  </p>
                  <p className='fs-6'>{userInforSearch.userName}</p>
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
                                  <Link className='link' to={`/app/menu/${_id}`}>Chi tiết</Link>
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
      </div>
    </div>
  )
}
export default SearchUser
