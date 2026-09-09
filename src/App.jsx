import { useEffect, useState } from 'react'
 
import './App.css'
import './assets/style/my-style.css'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './componunts/LandingPage'
import Hedder from './componunts/Hedder'
import ViewMore from './componunts/ViewMore'
import CartItems from './componunts/CartItems'
  //  let api = async ()=>{
  //   console.log((await axios.get('http://localhost:4000/prodects')).data)
  //  }
  //  useEffect(()=>{
  //   // api()
  //  })
function App() {

  return (
    <>
    <Hedder/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/more/:id' element={<ViewMore/>} />
        <Route path='/cart-items' element={<CartItems/>} />
      </Routes>
    </>
  )
}

export default App
