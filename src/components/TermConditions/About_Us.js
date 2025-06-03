import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

// Importing CSS....
import './TermCondition.css'

const About_Us = () => {
  return (
    <>
    <Navbar/>
    <div className="bg_autho">
        <div className="py-5">
          <h1 className="autho_title">About Us</h1>
          <p className="autho_para">Create Marketing and Festivals posts with Your Business Information In Just few seconds.</p>
        </div>
      </div>
      <div className="p-5">
        <div className="info_autho">
          <span>Welcome to 365 Posts App | Festival Post | Brand Post | Daily Banner.</span> <br />
          <span>365 Posts App allow users to create festival posts with their own brand, user can create multiple business in application and use our FREE & PREMIUM FRAMES for daily posts & festivals.</span>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default About_Us
