import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer className='bg-danger text-white mt-5 pt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className='list-unstyled'>
                                <li>
                                    <img className='maaa ' src="https://tripturbo.com/static/tripturboLogo-fd06b644.png" alt="" />
                                   <br /> Making Travel Simple</li>
                                    <br />
                                <li>Visit kupondole Rd 162, <br />
                                    Lalitpur 44700, Nepal.</li> <br />
                                <li> Tel: 01-5970565 <br />
                                    Enquiry: <br />  support@tripturbo.com</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 mid">
                            <div className="bro d-flex justify-content-between align-items-center">
                                <div className="rob">
                                    <h3>Company</h3>
                                    <ul className='list-unstyled'>
                                        <li>About</li>
                                        <li>Blog</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                                <div className="rob">
                                    <h3>Product</h3>
                                    <ul className='list-unstyled'>
                                        <li>Flights</li>
                                        <li>Activities</li>
                                        <li>Hotels</li>
                                    </ul>
                                </div>
                                <div className="rob">
                                    <h3>Support</h3>
                                    <ul className='list-unstyled'>
                                        <li>FAQs</li>
                                        <li>Privacy Policy</li>
                                        <li>T&C</li>
                                    </ul>
                                </div>
                            </div>
                            <h5 className='px-5 mt-5'>Powered by: 
                            <img src="https://tripturbo.com/static/natLogo-187068c8.png" alt="" />
                            </h5>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <h3>Download</h3>
                            <div className="btn1 bg-dark text-white p-3 d-flex justify-content-between align-items-center">
                                <FaApple className='apple'/>
                              <div className="a">
                               Download on the
                               <h4>App Store</h4>
                               </div>
                            </div>
                            <div className="btn2 bg-dark text-white p-3 d-flex justify-content-between align-items-center mt-3">
                                <IoLogoGooglePlaystore className='play'/>
                              <div className="a">
                              GET IT ON
                               <h4>Google Play</h4>
                               </div>
                            </div>

                            <h5 className='mt-5'>Follow Us:</h5>
                                <ul className='d-flex align-items-center list-unstyled gapl'>
                                    <li className='ff'><FaFacebookSquare /></li>
                                    <li className='ff'><FaSquareInstagram /></li>
                                    <li className='ff'><FaYoutube /></li>
                                    <li className='ff'><BsLinkedin /></li>
                                    <li className='ff'><FaXTwitter /></li>
                                    <li className='ff'><FaTiktok /></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </footer>

            {/* copyrignt section */}
            <section className='copy text-white text-center bg-danger py-2'>
                <p>© 2025 TripTurbo | All Rights Reserved | Made with <FaRegHeart /> in Nepal</p>
            </section>
        </div>
    )
}

export default Footer
