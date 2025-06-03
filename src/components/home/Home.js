import React from 'react';
import './home.css'
import Navbar from '../Layout/Navbar';
import FrontPage from '../FrontPage/FrontPage';
import Footer from '../Layout/Footer';

const Home = () => {

  return (
    <div>
      <Navbar />
      <FrontPage/>
      <Footer/>
    </div>
  )
}

export default Home
