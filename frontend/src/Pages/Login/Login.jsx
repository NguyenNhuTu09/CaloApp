import React, {useReducer, useState, useContext, useEffect} from 'react'
import './login.css';
import {Link, useNavigate} from 'react-router-dom'
import {Form, FormGroup} from 'reactstrap'
import clipCr7 from '../../assets/ronaldo-2.mp4'


import { AuthContext } from '../../Context/AuthContext.jsx';
import { BASE_URL } from '../../Components/Utils/config.js';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  })

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
  }


  const handleClick = async(e) => {
    e.preventDefault()
    dispatch({type: 'LOGIN_START'})

    try{
      const res = await fetch(`${BASE_URL}/users/auth/login`, {
        method: 'post',
        headers: {
          'content-type':'application/json',
          'Access-Control-Allow-Origin':`${BASE_URL}`
        }, 
        credentials: 'include',
        body: JSON.stringify(credentials)
      })

      const result = await res.json()
     
      if(!res.ok){
        alert(result.status)
        navigate('/')
      } else if(res.ok){ 
        localStorage.setItem('token', result.token)

        fetchData()

      }
    }catch(error){
      dispatch({type: 'LOGIN_FAILURE', payload: error.message})
    }
  }

  const fetchData = async () => {
    try {
        const token = localStorage.getItem('token');

        const res = await fetch(`${BASE_URL}/users/byToken/${token}`, {
          method: 'get',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await res.json();

        console.log(data);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data }); 
        navigate('/app/home')
    } catch (error) {
        console.error('Error fetching data:', error);
        dispatch({ type: 'LOGIN_FAILURE', payload: error.message }); 
    }

}

  
  return (
    <div className='Login d-flex flex-rows justify-content-between'>
      <div className='image-login d-flex flex-column align-items-center'>
        <img src='https://res.cloudinary.com/dozs7ggs4/image/upload/v1716914866/home-fixma_x03waz.jpg'/>
      </div>
      <div className='information d-flex flex-column'>

        <img src='https://res.cloudinary.com/dozs7ggs4/image/upload/v1702894592/LogoTHF_wldie6.png'/>
        <p className='title-login fw-bold'>TIT Fitness</p>
        
        <Form className='form-sub d-flex flex-column' onSubmit={handleClick}>
          <TextField fullWidth margin='normal' size='small' label="Email" variant="outlined" required id = "email" onChange={handleChange} />
          <TextField fullWidth margin='normal' size='small' type='password' label="Password" variant="outlined" required id = "password" onChange={handleChange} />

          <div className='checkpass-login d-flex flex-row justify-content-between align-items-center'>
            <div className='checkpass d-flex flex-row align-items-center'>
              <Checkbox defaultChecked />
              <p>Nhớ mật khẩu</p>
            </div>
            <p className='fw-bold'><Link className='link'> Quên mật khẩu</Link></p>
          </div>
          
          <Button variant='contained' type='submit'>Đăng nhập</Button>
        </Form>

        <p className='title-register fs-6 fw-bold'>Bạn chưa có tài khoản, <Link className='link' to='/register'> Đăng ký</Link></p>
      </div>

      
      
    </div>

  )
}
export default Login



