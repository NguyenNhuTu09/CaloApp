import React, { useContext, useEffect, useState } from 'react'
import './createExercise.css'
import { Link, useNavigate } from 'react-router-dom'
import arrow from '../../assets/Arrow.png'
import arrowLeft from '../../assets/ArrowLeft.png'
import Create from '../../assets/Create.png'

import { BASE_URL } from '../Utils/config.js'
import { AuthContext } from '../../Context/AuthContext'

import { Form } from 'reactstrap'
import useFetch from '../Hooks/useFetch'
import axios from 'axios'

const CreateExercise = () => {
     const {user, dispatch} = useContext(AuthContext)
     const [selectedFile, setSelectedFile] = useState(null);
     const [credentials, setCredentials] = useState({
          userID: user._id,
          nameExer: undefined,
          typeExer: undefined,
          imageExer: selectedFile,
          support: undefined,
          ration: undefined,
          calo: undefined,
          descExer: undefined
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
                    imageExer: imageUrl,
                  }));
          }catch(err){
               console.error('Error uploading image:', err.message);
          }
     };
      
     const handleSubmit = async(e) => {
          e.preventDefault()
          try{
               const res = await fetch(`${BASE_URL}/exercise/`, {
                    method: 'post',
                    headers: {
                         'content-type':'application/json',
                    },
                    body: JSON.stringify(credentials)
               })
               const result = await res.json()

               if(!res.ok){
                    alert(result.message)
                    navigate(`/app/user/${user._id}/createExer/`)
               }else if(res.ok){
                    alert("Tạo bài tập thành công")
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
     // console.log(user)
     return (
    <Form className='CreateFood d-flex flex-row justify-content-between' onSubmit={handleSubmit}>
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
               <p>Tên bài tập:</p>
               <input type="text" className="form-control"
                    onChange={handleChange}
                    required id = 'nameExer'
               />

               <div className='support-type d-flex flex-row justify-content-between'>
                    <div className='support d-flex flex-column'>
                         <p>Hỗ trợ:</p>
                         <select className="form-select"
                         onChange={handleChange}
                         required id = 'support'>
                              <option value="Cơ vai">Cơ vai</option>
                              <option value="Cơ đùi">Cơ đùi</option>
                              <option value="Toàn thân">Toàn thân</option>
                              <option value="Cơ tay">Cơ tay</option>
                         </select>
                    </div>

                    <div className='type d-flex flex-column'>
                         <p>Loại:</p>
                         <select className="form-select"
                         onChange={handleChange}
                         required id = 'typeExer'>
                              <option value="Vận động mạnh">Vận động mạnh</option>
                              <option value="Thể dục nhịp điệu">Thể dục nhịp điệu</option>
                              <option value="Nhẹ nhàng">Nhẹ nhàng</option>
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
                         <p>Thời gian:</p>
                         <select className="form-select">
                              <option value="30m">30m</option>
                              <option value="45m">45m</option>
                              <option value="60m">60m</option>
                         </select>
                    </div>
               </div>
               <p>Tổng calo đốt cháy:</p>
               <input type="text" className="form-control" 
                    onChange={handleChange}
                    required id = 'calo'
               />
          </div>
          <div className='description-food'>
               <p>Mô tả: </p>
               <textarea className="description form-control" aria-label="With textarea" onChange={handleChange} required id = 'descExer'/>
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
export default CreateExercise