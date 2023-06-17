import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './Context/AuthContext'


// import reducers from './reducers/index.js'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, compose} from 'redux'

// const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
  </React.StrictMode>
)
