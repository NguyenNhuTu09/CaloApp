import React, { useContext, useEffect, useState } from 'react'
import './createFood.css'
import { Link, useNavigate } from 'react-router-dom'
import arrow from '../../assets/Arrow.png'
import arrowLeft from '../../assets/ArrowLeft.png'
import Create from '../../assets/Create.png'

import { BASE_URL } from '../Utils/config.js'
import { AuthContext } from '../../Context/AuthContext'

import { Form, Nav } from 'reactstrap'
import useFetch from '../Hooks/useFetch'
import NavbarTwo from '../NavbarTwo/NavbarTwo.jsx'
import axios from 'axios'

const CreateFood = () => {
     const {user, dispatch} = useContext(AuthContext)
     const [selectedFile, setSelectedFile] = useState(null);
     const [credentials, setCredentials] = useState({
          userID: user._id,
          nameFood: undefined,
          typeFood: undefined,
          imageFood: selectedFile,
          support: undefined,
          ration: undefined,
          calo: undefined,
          mainMaterial: undefined,
          auxiliaryMaterials: undefined,
          additives: undefined,
          cookingMethod: undefined,
          descFood: undefined,
          country: undefined
     })

     // const {dispatch} = useContext(AuthContext)
     const navigate = useNavigate()
     function handleClick() {
          navigate(-1);
        }
     const handleChange = (e) => {
          setCredentials(prev=>({...prev, [e.target.id]:e.target.value }))
     }

     const handleFileChange = async(e) => {
          try{
               const file = e.target.files[0];
               const formData = new FormData();
               formData.append('file', file);
               const response = await axios.post(`${BASE_URL}/file/upload-image`, formData);
               const imageUrl = response.data.url;
               console.log(imageUrl)
               setSelectedFile(imageUrl);
               setCredentials(prevCredentials => ({
                    ...prevCredentials,
                    imageFood: imageUrl,
                  }));
          }catch(err){
               console.error('Error uploading image:', err.message);
          }
     };
      
     const handleSubmit = async(e) => {
          e.preventDefault()
          try{
               const res = await fetch(`${BASE_URL}/foods/`, {
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
                    dispatch({ 
                         type: 'CREATE_FOOD_SUCCESS',
                         payload: {
                           user: result.user, 
                           food: result.data._id, 
                         },
                       });
                    navigate(`/app/user/${user._id}`)
               }
          }catch(error){
               alert(error.message)
          }
     }

     useEffect(() => {

     }, [selectedFile])
     return (
          <div className='Createfood d-flex flex-column'>
               <NavbarTwo/>
               <Form className='body-create d-flex flex-row justify-content-between' onSubmit={handleSubmit}>
                         <div className='info-food d-flex flex-column'>
                              <div className='back d-flex flex-row'>
                                   <Link className='link d-flex flex-row' to={`/app/user/${user._id}`}>
                                        <p className='fw-bold d-flex flex-row align-items-center'><span class="material-symbols-outlined">arrow_back</span>Quay lại</p>
                                   </Link>
                              </div>
                              <div className='image-food d-flex flex-column'>
                                   <img className='border border-dark' src = {selectedFile}/>
                                   <input className='file border border-dark' type="file"
                                   onChange={handleFileChange} 
                                   required id='imageFood'></input>
                              </div>
                              <p className='text fw-bold'>Thông tin cơ bản:</p>
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
                                             <option value="Protein">Protein</option>
                                             <option value="Chất xơ">Chất xơ</option>
                                             <option value="Chất đạm">Chất đạm</option>
                                        </select>
                                   </div>

                                   <div className='type d-flex flex-column'>
                                        <p>Loại:</p>
                                        <select className="form-select"
                                        onChange={handleChange}
                                        required id = 'typeFood'>
                                             <option value="Đồ uống">Đồ uống</option>
                                             <option value="Thức ăn liền">Thức ăn liền</option>
                                             <option value="Salad">Salad</option>
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
                                             <option value="100g">100g</option>
                                             <option value="100ml">100ml</option>
                                        </select>
                                   </div>
                              </div>
                              <p>Tổng calo của khẩu phần:</p>
                              <input type="text" className="form-control" 
                                   onChange={handleChange}
                                   required id = 'calo'
                              />
                         </div>
                         <div className='description-food'>
                              <p className='fw-bold'>Mô tả và cách thực hiện:</p>
                              <p>Nguyên liệu chính: </p>
                              <input type="text" className="form-control" onChange={handleChange} required id = 'mainMaterial'/>
                              <p>Nguyên liệu phụ: </p>
                              <input type="text" className="form-control" onChange={handleChange} required id = 'auxiliaryMaterials'/>
                              <p>Phụ gia: </p>
                              <input type="text" className="form-control" onChange={handleChange} required id = 'additives'/>
                              <p>Phương thức chế biến: </p>
                              <input type="text" className="form-control" onChange={handleChange} required id = 'cookingMethod'/>
                              <p>Quốc gia: </p>
                              <input type="text" className="form-control" onChange={handleChange} required id = 'country'/>
                              <p>Mô tả: </p>
                              <textarea className="description form-control" aria-label="With textarea" onChange={handleChange} required id = 'descFood'/>
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
          </div>
  )
}
export default CreateFood