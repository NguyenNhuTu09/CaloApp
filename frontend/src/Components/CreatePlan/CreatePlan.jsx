import React, { useState } from 'react'
import './createPlan.css'
import NavbarTwo from '../NavbarTwo/NavbarTwo'
import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react'
import { Form } from 'reactstrap'

import { useNavigate, Link } from 'react-router-dom';
import { BASE_URL } from '../Utils/config'


const CreatePlan = () => {
  const navigate = useNavigate()
  const [link, setLink] = useState(true)
  const {user, dispatch} = useContext(AuthContext)
  function clickLink1(){
    $('#staticBackdrop').modal('show'); 
  }
  

  function handleClickCreatePlan(){

  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
         const res = await fetch(`${BASE_URL}/plan/user/${user._id}`, {
              method: 'post',
              headers: {
                   'content-type':'application/json',
              },
              body: JSON.stringify(credentials)
         })
         const result = await res.json()

         if(!res.ok){
              alert(result.message)
         }else if(res.ok){
              alert("Tạo kế hoạch hoàn tất")
              dispatch({ 
                type: 'CREATE_PLAN_SUCCESS',
                payload: {
                  user: result.user, 
                  plan: result.data._id, 
                },
              });
              $('#staticBackdrop').modal('hide'); 
              navigate(`/app/user/plan/create/${result.data._id}`)  

              // fetchCreatePlan(result.data._id)

              
          }
          
    }catch(error){
         alert(error.message)
    }
}

  const [credentials, setCredentials] = useState({
      planName: undefined,
      dayStart: undefined,
      dayEnd: undefined,
      userId: user._id,
      descPlan: undefined
  })

  const handleChange = (e) => {
    //  if(e.target.id == "startPlan"){
    //    setStartDayPlan(new Date(e.target.value))
    //  } else if(e.target.id == 'endPlan'){
    //    setEndDayPlan(new Date(e.target.value))
    //  }
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value }))
}


  return (
    <div className='create-plan d-flex flex-column'>
      <NavbarTwo/>
        <div className='d-flex flex-column'>
        <div className='body-create-plan d-flex flex-row justify-content-between'>
          <div className='body-index d-flex flex-column'>
            <div className='nav-1 d-flex flex-row align-items-center justify-content-between'>
              <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">space_dashboard</span>Tổng quan</p>
              <Link className='link'>
                <p className='d-flex flex-row align-items-center' onClick={clickLink1}><span class="material-symbols-outlined">add</span>Tạo kế hoạch</p>
              </Link>
              <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">edit_note</span>Chỉ số hiện tại</p>
            </div>  
            <div className='index d-flex flex-row justify-content-between'>
              <div className='height-weight d-flex flex-column justify-content-between'>
                <p className='fs-6 d-flex flex-row justify-content-between'>Calo nhận vào<span class="material-symbols-outlined">arrow_forward_ios</span></p>
                <div className='calo-in d-flex flex-row justify-content-between'>
                  <p className='fs-5'>1200<span className='fs-6'>/ngày</span></p>
                  <img/>
                </div>
              </div>
              <div className='index-bmi-bmr d-flex flex-column justify-content-between'>
                <p className='fs-6 d-flex flex-row justify-content-between'>Calo tiêu thụ<span class="material-symbols-outlined">arrow_forward_ios</span></p>
                <div className='calo-out d-flex flex-row justify-content-between'>
                  <p className='fs-5'>1400<span className='fs-6'>/ngày</span></p>
                  <img/>
                </div>
              </div>

              <div className='recommend d-flex flex-column justify-content-between'>
                <p className='fs-6 d-flex flex-row justify-content-between'>Vận động<span class="material-symbols-outlined">arrow_forward_ios</span></p>
                <div className='motion d-flex flex-row justify-content-between'>
                  <p className='fs-5'>65<span className='fs-6'>phút/ngày</span></p>
                  <img/>
                </div>
              </div>
            </div>
          </div>
          <div className='plan-history d-flex flex-column'>
            <div className='nav-2 d-flex flex-row justify-content-between'>
              <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">schedule</span>Gần đây</p>
              <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">history</span>Xem lịch sử</p>
            </div>
            <div className='plan d-flex flex-row justify-content-between'>
              <div className='plan-present d-flex flex-row justify-content-between'>
                <div className='plan-1'>
                  <p className='d-flex flex-row justify-content-between align-items-center fw-bold'>7 Days Healthy <span class="material-symbols-outlined">more_vert</span></p>
                  <p className='d-flex flex-row justify-content-between align-items-center'>Bắt đầu <span>15/10/2022</span></p>
                  <p className='d-flex flex-row justify-content-between align-items-center'>Kết thúc<span>15/10/2022</span></p>
                  <div className='status-plan'>
                    <p className='title-status'>Đang thực hiện</p>
                  </div>
                </div>
                <div className='plan-1'>
                  <p className='d-flex flex-row justify-content-between align-items-center fw-bold'>Săn sói xám <span class="material-symbols-outlined">more_vert</span></p>
                  <p className='d-flex flex-row justify-content-between align-items-center'>Bắt đầu <span>15/10/2022</span></p>
                  <p className='d-flex flex-row justify-content-between align-items-center'>Kết thúc<span>15/10/2022</span></p>
                  <div className='status-plan'>
                    <p className='title-status'>Đã hoàn thành</p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <div className='recommend-plan-author d-flex flex-row justify-content-between'>
          <div className='recommend-plan d-flex flex-column'>
            <p className='title-recommend-plan d-flex flex-row jusitify-content-between'><span class="material-symbols-outlined">recommend</span>Gợi ý cho bạn</p>
            <div className='test-01 d-flex flex-row align-items-center'>
              <div className='icons d-flex flex-row align-items-center'>
                <span class="material-symbols-outlined">description</span>
              </div>
              <div className="desc-plan d-flex flex-column">
                <p className='name-plan'>7 Days Healthy</p>
                <div className='response-user d-flex flex-row justify-content-between'>
                  <p className='like d-flex flex-row align-items-center'><span class="material-symbols-outlined">thumb_up</span>1199</p>
                  <p className='comment d-flex flex-row align-items-center'><span class="material-symbols-outlined">chat</span>20</p>
                  <p className='save d-flex flex-row align-items-center'><span class="material-symbols-outlined">bookmark</span>8</p>
                </div>
              </div>
            </div>
            
            
            
          </div>
          <div className='recommend-author'>
          <p className='title-recommend-plan d-flex flex-row jusitify-content-between'><span class="material-symbols-outlined">recommend</span>Gợi ý cho bạn</p>
          </div>
        </div>
      </div>
      
      
      <div class="newPlan modal fade come-from-modal right" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-2" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <Form onSubmit={handleSubmit}>
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Xác nhận thông tin</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>


                <div class="verify modal-body d-flex flex-column">
                  
                    <p>Tên kế hoạch:</p>
                    <input type="text" 
                    onChange={handleChange}
                    required id = 'planName'
                    />
                    
                    <div className='d-flex flex-row justify-content-between'>
                      <div className='d-flex flex-column w-30'>
                        <p>Ngày bắt đầu:</p>
                        <input type="date" 
                          onChange={handleChange}
                          required id = 'dayStart'
                        />
                      </div>

                      <div className='d-flex flex-column w-30'>
                        <p>Ngày kết thúc:</p>
                        <input type="date" 
                          onChange={handleChange}
                          required id = 'dayEnd'
                        />
                      </div>
                    </div>

                    <div className='desc-plan d-flex flex-column'>
                        <p>Mô tả kế hoạch</p>
                        <textarea class="form-control note-plan" aria-label="With textarea" onChange={handleChange}
                          required id = 'descPlan'></textarea>
                      </div>
                  
                </div>


                <div class="modal-footer">
                  <button type="submit">
                    Xác nhận
                  </button>
                  {/* <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-dismiss="modal">Test</button> */}
                </div>
              </div>
            </div>
          </Form>
        </div>
    </div>
  )
}

export default CreatePlan
