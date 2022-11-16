import React from 'react'
import "./index.css"
import logo from "../../assets/Logo.svg"

function Header() {
  return (
    <div className='header_container'>
      <div className='header_logo'>
        <img src={logo} />
      </div>
      <div className='header_links'>
        <p className='header_li_items'><a href="#">Products</a></p>
        <p className='header_li_items'><a href="#">Challenges</a></p>
        <p className='header_li_items'><a href="#">Resources</a></p>
        <p className='header_li_items'><a href="#">Other Links</a></p>
      </div>
      <div className='header_sign'>
        <p>Sign In</p>
        <button type='button'>Try for free</button>
      </div>
    </div>
  )
}

export default Header