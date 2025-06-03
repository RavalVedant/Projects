import React from 'react'
import { NavLink } from 'react-router-dom'

// Importing CSS.....
import './layout.css'

// Importing Images.....
import imgs from '../Assets/Thanks.jpeg'
import google from '../Assets/google-play.png'
import apple from '../Assets/app-store.png'


const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer_part_one mt-4">
                    <ul>
                        <li><NavLink to={"/about-us"} className="footer_links">About Us</NavLink></li>
                        <li><NavLink to={"/term-of-use"} className="footer_links">Term of Use</NavLink></li>
                        <li><NavLink to={"/privacy-policy"} className="footer_links">Privacy Policy</NavLink></li>
                        <li><NavLink to={"/contact-us"} className="footer_links">Contact Us</NavLink></li>
                    </ul>
                    <span className="ml-1">Copyright © 2022 www.viaviweb.com. All Rights Reserved.</span>
                </div>
                <div className="footer_part_two mt-4">
                    <span>Connect with Us</span>
                    <div className="under_line"></div>
                    <div className="social_icons mt-2 d-flex gap-3">
                        <i class="fa-brands fa-facebook-f facebook_bg"></i>
                        <i class="fa-brands fa-instagram instagram-bg"></i>
                    </div>
                </div>
                <div className="footer_part_third mt-4">
                    <span>Download App</span>
                    <div className="under_line"></div>
                    <div className="download_app_links mt-3">
                        <a href={imgs} download><img src={google} alt="Image_of_play_store" /></a>
                        <img src={apple} alt="Image_of_app_store" />
                    </div>
                </div>
            </footer>
    )
}

export default Footer
