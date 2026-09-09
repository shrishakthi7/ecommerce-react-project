import React from 'react'
import logo from '../assets/Images/logo.png'
import { useNavigate } from 'react-router-dom'

const Hedder = () => {

   let navigate =useNavigate()

   let visitToCart = ()=>{
      navigate('/cart-items')
   }
  return (
     <>
        <div className="hedder">
            <div className="logo">
              
              <img src={logo} onClick={()=>navigate('/')} alt="" />
            </div>
            <div className="search">
                 <form action="">
                    <input type="text" placeholder='Search items' />
                    <button>Searc</button>
                 </form>
            </div>
            <div className="btns">
                <button className='login'>login</button>
                <button onClick={visitToCart} className='cart'>cart</button>
                {/* <NavLink to="/cart-items"> Cart </NavLink> */}
            </div>
            
        </div>
     </>
  )
}

export default Hedder
