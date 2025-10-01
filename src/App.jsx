import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Cart from './Pages/Cart'


function App() {

  return (
    <>
    <Header/>
   
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
   </Routes>


    
    </>
  )
}

export default App
