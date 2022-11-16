import React from 'react'
import './index.css'
import logo1 from "../../assets/Capterra Logo.svg"
import logo2 from "../../assets/AlternativeTo Logo.svg"
import logo3 from "../../assets/Capterra Logo.svg"

function Reviews() {
  return (
    <div className='Reviewer_container'>
        <p>5.0 rating based on current reviews from: </p>
        <div className='Reviewers'>
            <img src={logo1} />
            <img src={logo2} />
            <img src={logo3} />
        </div>
    </div>
  )
}

export default Reviews