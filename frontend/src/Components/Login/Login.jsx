import React, {useReducer, useState, useContext, useEffect} from 'react'
import axios from 'axios'
import './login.css';
import {Link, useNavigate} from 'react-router-dom'
import {Form, FormGroup} from 'reactstrap'
import arrow from '../../assets/Arrow.png'

import faceImg from '../../assets/Facebook.png'
import ggImg from '../../assets/Google.png'
import imageLg from '../../assets/LogoTHF.png'

import background from '../../assets/background-login.jpg'
import clipCr7 from '../../assets/ronaldo-2.mp4'


import {BASE_URL} from '../Utils/config.js'
import { AuthContext } from '../../Context/AuthContext';

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

  const handleLogin = async(e) => {
    dispatch({type: 'LOGIN_START'})
    try{

    }catch{
      
    }
  }


  const handleClick = async(e) => {
    e.preventDefault()
    dispatch({type: 'LOGIN_START'})

    try{
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type':'application/json'
        }, 
        credentials: 'include',
        body: JSON.stringify(credentials)
      })

      const result = await res.json()
      if(!res.ok){
        alert(result.message)
        navigate('/')
      } else if(res.ok){
        console.log(result.data)
        dispatch({type: 'LOGIN_SUCCESS', payload: result.data})
        navigate('/app/home')
      }
        

    }catch(error){
      dispatch({type: 'LOGIN_FAILURE', payload: error.message})
    }
  }

  
  return (
    <div className='Login d-flex flex-rows justify-content-between'>


      <div className='image-login d-flex flex-column align-items-center'>
          <video src={clipCr7} autoPlay muted loop className='video-back'></video>
          {/* <p className='fs-1 fw-bold'>TITFitness</p> */}
      </div>



      <div className='information d-flex flex-column'>
        <p className='title-login fs-2 fw-bold'>Đăng nhập</p>
        <p className='fs-6 fw-bold'>Bạn chưa có tài khoản, <Link className='link' to='/register'> Đăng ký</Link></p>

        {/* {error && <div className="error">{error}</div>} */}


        <Form className='form-sub d-flex flex-column w-100' onSubmit={handleClick}>
          <input type="email" className="form-control email" placeholder="Email" required id = 'email'
            onChange={handleChange}
          />
          <input type="password" className="form-control pass" placeholder="Mật khẩu" required id = 'password'
            onChange={handleChange}
          />
          <div className='checkpass-login d-flex flex-row justify-content-between'>
            <div className='checkpass d-flex flex-row'>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <p>Nhớ mật khẩu</p>
            </div>
            <div className='btn-login'>
              {/* <button type="submit" className="btn btn-primary"><Link to='/app/home'>Đăng nhập<img src={arrow}/></Link></button> */}
              <button type="submit" className="btn btn-primary">Đăng nhập</button>
            </div>
          </div>
        </Form>


        <p className='fs-6 fw-bold'>Đăng nhập bằng:</p>
        <div className='face-gg d-flex flex-row justify-content-between'>
          <div className='facebook d-flex flex-row'>
            <img src={faceImg}/>
            <p>Facebook</p>
          </div>
          <div className='google d-flex flex-row'>
            <img src={ggImg}/>
            <p>Google</p>
          </div>
        </div>
      </div>
      
    </div>

  )
}
export default Login
