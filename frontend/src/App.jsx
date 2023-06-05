import React from 'react'
import './App.css'

import Navbar from '../src/Components/Navbar/Navbar'
import Routers from '../src/router/Routers'
import background from '../src/assets/background-app.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
      <div className='App'>
        <Navbar/>
        <Routers/>
    </div>
  )
}
export default  App
