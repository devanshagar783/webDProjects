import React from 'react'
import "./index.css"
import Netflix from "../../assets/Netflix Logo.svg"
import Shopify from "../../assets/Shopify Logo.svg"
import Spotify from "../../assets/Spotify Logo.svg"
import Walmart from "../../assets/Walmart Logo.svg"

function Brands() {
  return (
    <div className='brands_container'>
        <p>Trusted by 3+ million people at companies like</p>
        <div className='brands_images'>
            <img src={Netflix} alt=''/>
            <img src={Shopify} alt=''/>
            <img src={Spotify} alt=''/>
            <img src={Walmart} alt=''/>
        </div>
    </div>
  )
}

export default Brands