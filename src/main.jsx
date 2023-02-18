import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Inicio from './components/Inicio'
import './Main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>     
      
    </Routes>
    <Footer/>
  </BrowserRouter>,
)
