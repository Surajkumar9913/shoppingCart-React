import React,{useState} from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Navbar item={cartItems}/>
      <Outlet context={{ cartItems, setCartItems }} />
      <Footer/>
    </div>
  )
}

export default Layout
