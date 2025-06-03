import React from 'react'
import './error.css'

// Importing Images....
import ImgError from '../Assets/GIFS/error.gif'

const Error = () => {
  return (
    <>
    <div className="container">
    <h1>There is an problem, solve it and visit again</h1>
        <img src={ImgError} className="error_img" alt="" srcset="" />
    </div>
    </>
  )
}

export default Error
