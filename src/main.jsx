import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CreateAccount from './pages/CreateAccount/index.jsx'
import Home from './pages/Home/index.jsx'
import LoggedHome from './Pages/LoggedHome/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from '../src/services/reducers/store.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<CreateAccount />} />
          <Route path="/" element={<Home />} />
          <Route path="home" element={<LoggedHome />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
