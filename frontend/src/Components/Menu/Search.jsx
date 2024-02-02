// Search.js
import React, { useRef, useState} from 'react';
import { useNavigate } from 'react-router';
import {Col, Form, FormGroup} from 'reactstrap'
import { useLocation } from 'react-router';
import { BASE_URL } from '../Utils/config';
const Search = ({ onSearch }) => {
  const location = useLocation()
  const [data] = useState(location.state)
  const navigate = useNavigate()
  const nameFoodRef = useRef('')

  const searchHandler = async() => {
    const nameFood = nameFoodRef.current.value

    const res = await fetch(`${BASE_URL}/foods/search/getFoodBySearch?nameFood=${nameFood}`)

    if(!res.ok) alert('Something went wrong ')
    const result = await res.json()
    // console.log(result.data)
    navigate(`/foods/search/getFoodBySearch?nameFood=${nameFood}`, {state: result.data})
  }
  return (
    <Form className='search-food d-flex flex-row'>
      <FormGroup className='input-search d-flex flex-row justify-content-between'>
          <input className='name-search' type='text' placeholder='Nhập tên món ăn, bài tập' ref={nameFoodRef}/>
          <p className='icons-search d-flex flex-row align-items-center' onClick={searchHandler}><span class="material-symbols-outlined">search</span></p>
        </FormGroup>

        {/* <p className='title-search d-flex flex-row justify-content-between align-items-center'><span class="material-symbols-outlined">search</span>Tìm kiếm</p> */}

    </Form>
  );
};

export default Search;
