import React from 'react'
import './home.css'

import Calendar from 'react-calendar'
const Home = () => {
  return (
    <div className='Home'>
    <Calendar/>
      <div className='rank border border-dark'>
          <p className='fs-6 fw-bold'>Kế hoạch, món ăn, bài tập nối bật tuần này:</p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">TOP</th>
                <th scope="col">Tên kế hoạch</th>
                <th scope="col">Tác giả</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}
export default Home
