import React from 'react'
import './createPlan.css'
import NavbarTwo from '../NavbarTwo/NavbarTwo'
const CreatePlan = () => {
  return (
    <div className='create-plan d-flex flex-column'>
      <NavbarTwo/>
      <div className='body-create-plan d-flex flex-row justify-content-between'>
        <div className='body-index d-flex flex-column'>
          <div className='nav-1 d-flex flex-row align-items-center justify-content-between'>
            <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">space_dashboard</span>Tổng quan</p>
            <p className='d-flex flex-row align-items-center'><span class="material-symbols-outlined">add</span>Tạo kế hoạch</p>
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

      <div className='recommend-plan-author d-flex flex-row justify-content-between border border-dark'>
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
        <div className='recommend-author border border-dark'>
        <p className='title-recommend-plan d-flex flex-row jusitify-content-between'><span class="material-symbols-outlined">recommend</span>Gợi ý cho bạn</p>
        </div>
      </div>
    </div>
  )
}

export default CreatePlan
