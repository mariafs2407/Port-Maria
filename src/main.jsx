import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Header from './components/header/Header'
import './Main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route element={<Header/>}/>
      
    </Routes>
  </BrowserRouter>,
)
