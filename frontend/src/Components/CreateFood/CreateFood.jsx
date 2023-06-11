import React from 'react'
import './createFood.css'
import { Link } from 'react-router-dom'
import arrow from '../../assets/Arrow.png'
import arrowLeft from '../../assets/ArrowLeft.png'
import Create from '../../assets/Create.png'
const CreateFood = () => {
  return (
    <div className='CreateFood d-flex flex-row justify-content-between'>
          <div className='info-food d-flex flex-column'>
                    <div className='back d-flex flex-row'>
                         <Link className='link d-flex flex-row' to={'/app/user'}>
                              <img src={arrowLeft}/>
                              <p className='fs-6 fw-bold'>Quay lại</p>
                         </Link>
                    </div>
                    <div className='image-food d-flex flex-column'>
                         <img className='border border-dark' src={Create}/>
                         <input className='file border border-dark' type="file"></input>
                    </div>
                    <p className='text fs-5 fw-bold'>Thông tin cơ bản:</p>
                    <p>Tên món ăn:</p>
                    <input type="text" class="form-control"/>
                    <p>Hỗ trợ:</p>
                    <select class="form-select" id="inputGroupSelect01">
                         <option value="1">Tiêu hóa</option>
                         <option value="2">Protein</option>
                         <option value="3">Chất xơ</option>
                         <option value="4">Chất đạm</option>
                    </select>
                    <div className='ration d-flex flex-row justify-content-between'>
                         <div className='ration-man d-flex flex-column'>
                              <p>Khẩu phần:</p>
                              <input type="text" class="form-control"/>
                         </div>
                         <div className='calo d-flex flex-column'>
                              <p>Đơn vị:</p>
                              <select class="form-select" id="inputGroupSelect01">
                                   <option value="1">100g</option>
                                   <option value="2">100ml</option>
                              </select>
                         </div>
                    </div>
                    <p>Tổng calo của khẩu phần:</p>
                    <input type="text" class="form-control"/>
               </div>
          <div className='description-food'>
               <p className='fs-5 fw-bold'>Mô tả và cách thực hiện:</p>
               <p>Nguyên liệu chính: </p>
               <input type="text" class="form-control"/>
               <p>Nguyên liệu phụ: </p>
               <input type="text" class="form-control"/>
               <p>Phụ gia: </p>
               <input type="text" class="form-control"/>
               <p>Phương thức chế biến: </p>
               <input type="text" class="form-control"/>
               <p>Mô tả: </p>
               <textarea class="description form-control" aria-label="With textarea"></textarea>
          </div>

          <div className='perform d-flex flex-column'>
               <p className='fs-6 fw-bold'>Bước 1: </p>
               <div className='per d-flex flex-row justify-content-between'>
                    <p>Ảnh minh họa: </p>
                    <input type="file" className='file'/>
               </div>
               <textarea class="description form-control" aria-label="With textarea" placeholder='Mô tả: '/>
               <p className='fs-6 fw-bold'>Bước 2: </p>
               <div className='per d-flex flex-row justify-content-between'>
                    <p>Ảnh minh họa: </p>
                    <input type="file" className='file'/>
               </div>
               <textarea class="description form-control" aria-label="With textarea" placeholder='Mô tả: '/>
               <p className='fs-6 fw-bold'>Bước 3: </p>
               <div className='per d-flex flex-row justify-content-between'>
                    <p>Ảnh minh họa: </p>
                    <input type="file" className='file'/>
               </div>
               <textarea class="description form-control" aria-label="With textarea" placeholder='Mô tả: '/>
              <div className='button-create d-flex flex-row justify-content-end'>
                    <button className='btn btn-primary'>Tải lên</button>
              </div>
          </div>
     </div>
  )
}
export default CreateFood
