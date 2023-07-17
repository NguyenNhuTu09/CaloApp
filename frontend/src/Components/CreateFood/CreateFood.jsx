import React, { useContext, useEffect, useState } from 'react'
import './createFood.css'
import { Link, useNavigate } from 'react-router-dom'
import arrow from '../../assets/Arrow.png'
import arrowLeft from '../../assets/ArrowLeft.png'
import Create from '../../assets/Create.png'

import { BASE_URL } from '../Utils/config.js'
import { AuthContext } from '../../Context/AuthContext'

import { Form } from 'reactstrap'
import useFetch from '../Hooks/useFetch'


const CreateFood = () => {
     const {user, dispatch} = useContext(AuthContext)


     const [credentials, setCredentials] = useState({
          nameFood: undefined,
          Type: undefined,
          imageFood: undefined,
          support: undefined,
          ration: undefined,
          totalCalories: undefined,
          mainMaterial: undefined,
          auxiliaryMaterials: undefined,
          Additives: undefined,
          processing: undefined,
          description: undefined,
          author: user._id
     })

     // const {dispatch} = useContext(AuthContext)
     const navigate = useNavigate()
     function handleClick() {
          navigate(-1);
        }
     const handleChange = (e) => {
          setCredentials(prev=>({...prev, [e.target.id]:e.target.value }))
     }
     const handleSubmit = async(e) => {
          e.preventDefault()
          try{
               const res = await fetch(`${BASE_URL}/foodsuser/user/${user._id}/`, {
                    method: 'post',
                    headers: {
                         'content-type':'application/json',
                    },
                    body: JSON.stringify(credentials)
               })
               const result = await res.json()

               if(!res.ok){
                    alert(result.message)
                    navigate(`/app/user/${user._id}/createfood/`)
               }else if(res.ok){
                    alert("Tạo món ăn thành công")
                    navigate('/app/user/${user._id}')
               }
          }catch(error){
               alert(error.message)
          }
     }

     useEffect(() => {

     }, [])
     // console.log(user)
     return (
    <Form className='CreateFood d-flex flex-row justify-content-between' onSubmit={handleSubmit}>
          <div className='info-food d-flex flex-column'>
               <div className='back d-flex flex-row'>
                    <Link className='link d-flex flex-row' to={`/app/user/${user._id}`}>
                         <img src={arrowLeft}/>
                         <p className='fs-6 fw-bold'>Quay lại</p>
                    </Link>
               </div>
               <div className='image-food d-flex flex-column'>
                    <img className='border border-dark' src={Create}/>
                    <input className='file border border-dark' type="file"
                    onChange={handleChange}
                    required id='imageFood'></input>
               </div>
               <p className='text fs-5 fw-bold'>Thông tin cơ bản:</p>
               <p>Tên món ăn:</p>
               <input type="text" className="form-control"
                    onChange={handleChange}
                    required id = 'nameFood'
               />

               <div className='support-type d-flex flex-row justify-content-between'>
                    <div className='support d-flex flex-column'>
                         <p>Hỗ trợ:</p>
                         <select className="form-select"
                         onChange={handleChange}
                         required id = 'support'>
                              <option value="Tiêu hóa">Tiêu hóa</option>
                              <option value="2">Protein</option>
                              <option value="3">Chất xơ</option>
                              <option value="4">Chất đạm</option>
                         </select>
                    </div>

                    <div className='type d-flex flex-column'>
                         <p>Loại:</p>
                         <select className="form-select"
                         onChange={handleChange}
                         required id = 'Type'>
                              <option value="1">Đồ uống</option>
                              <option value="2">Thức ăn liền</option>
                              <option value="3">Salad</option>
                         </select>
                    </div>
               </div>

               
               <div className='ration d-flex flex-row justify-content-between'>
                    <div className='ration-man d-flex flex-column'>
                         <p>Khẩu phần:</p>
                         <input type="text" className="form-control"
                              onChange={handleChange}
                              required id = 'ration'
                         />
                    </div>
                    <div className='calo d-flex flex-column'>
                         <p>Đơn vị:</p>
                         <select className="form-select">
                              <option value="1">100g</option>
                              <option value="2">100ml</option>
                         </select>
                    </div>
               </div>
               <p>Tổng calo của khẩu phần:</p>
               <input type="text" className="form-control" 
                    onChange={handleChange}
                    required id = 'totalCalories'
               />
          </div>
          <div className='description-food'>
               <p className='fs-5 fw-bold'>Mô tả và cách thực hiện:</p>
               <p>Nguyên liệu chính: </p>
               <input type="text" className="form-control" onChange={handleChange} required id = 'mainMaterial'/>
               <p>Nguyên liệu phụ: </p>
               <input type="text" className="form-control" onChange={handleChange} required id = 'auxiliaryMaterials'/>
               <p>Phụ gia: </p>
               <input type="text" className="form-control" onChange={handleChange} required id = 'Additives'/>
               <p>Phương thức chế biến: </p>
               <input type="text" className="form-control" onChange={handleChange} required id = 'processing'/>
               <p>Mô tả: </p>
               <textarea className="description form-control" aria-label="With textarea" onChange={handleChange} required id = 'description'/>
          </div>

          <div className='perform d-flex flex-column'>
               <p className='fs-6 fw-bold'>Bước 1: </p>
               <div className='per d-flex flex-row justify-content-between'>
                    <p>Ảnh minh họa: </p>
                    <input type="file" className='file'/>
               </div>
               <textarea className="description form-control" aria-label="With textarea" placeholder='Cách thực hiện: '
               />
              <div className='button-create d-flex flex-row justify-content-end'>
                    <button className='btn btn-primary' type='submit'>Tải lên</button>
              </div>
          </div>
    </Form>
  )
}
export default CreateFood

// các vấn đề cần giải quyết:
// + mỗi một món ăn phải có một id của reviews, id của user, 
