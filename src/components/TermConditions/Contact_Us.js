import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

// Importing CSS.....
import './TermCondition.css'

const Contact_Us = () => {
  return (
    <>
    <Navbar/>
    <div className="bg_autho">
        <div className="py-5">
          <h1 className="autho_title">Contact Us</h1>
          <p className="autho_para">Create Marketing and Festivals posts with Your Business Information In Just few seconds.</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-5 mb-5 px-2 gap-3">
          <div className="col-md-7 p-3 contact_box_one">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div class="row form_title">
                <div class="col-md-4">
                  <div class="md-form mb-0">
                    <label for="name" class="">Name</label>
                    <input type="text" id="name" name="name" class="form-control" placeholder="Enter your name" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form mb-0">
                    <label for="email" class="">E-mail</label>
                    <input type="text" id="email" name="email" class="form-control" placeholder="Enter your E-mail" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form mb-0">
                    <label for="email" class="">Subject</label>
                    <input type="text" id="email" name="email" class="form-control" placeholder="Select.." />
                  </div>
                </div>
              </div>

              <div class="mt-4 mb-3">
                <div class="md-form form_title">
                  <label for="message">Your message</label>
                  <textarea type="text" id="message" name="message" rows="4" class="form-control md-textarea" placeholder="Type your Message Here!!"></textarea>
                </div>
                <button type="button" class="btn btn-primary mt-3 mb-3">Submit</button>
              </div>
            </form>
          </div>
          {/* This Second part of Contact page....... */}
          <div className="col-md-4 p-4 contact_box_two">
            <h2>Address Info</h2>
            <div className="under_line"></div>

            <div className="info_box shadow-lg bg-white rounded p-2 mt-3">
              <div className="contact_icon d-flex mt-3 gap-2">
                <i class="fa-solid fa-location-dot"></i>
                <div className="address_info">
                  <h5>Location</h5>
                  <span>3rd Floor, Shyam Complex,Parivar Park, Near Mayani Chowk,Rajkot-360005</span>
                </div>
              </div>
            </div>

            <div className="info_box shadow-lg bg-white rounded p-2 mt-3">
              <div className="contact_icon d-flex mt-3 gap-2">
              <i class="fa-solid fa-envelope"></i>
                <div className="address_info">
                  <h5>E-mail Address</h5>
                  <a href="/365postsapp@gmail.com">365postsapp@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="info_box shadow-lg bg-white rounded p-2 mt-3">
              <div className="contact_icon d-flex mt-3 gap-2">
              <i class="fa-solid fa-phone"></i>
                <div className="address_info">
                  <h5>Phone Number</h5>
                  <a href="tel:+918160245100" telephone>(+91) 8160245100</a>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Footer/> 
    </>
  )
}

export default Contact_Us
