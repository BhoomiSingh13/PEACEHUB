import React from "react";
import './footer.css';
import './footer.scss'
import video2 from '../../Assets/video (2).mp4'
import {FiSend} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'
import {MdOutlineTravelExplore} from 'react-icons/md'



const Footer = () => {
    return(
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel With Us</h2>
                </div>
                <div className="inputDiv flex">
                    <input type="text" placeholder="Enter Your Email" />
                    <button className='btn flex' type="submit">
                  SEND  <FiSend className="icon"/>
                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="a" className="logo flex">
                            <MdOutlineTravelExplore className="icon"/>  Travel.
                        </a>
                    </div>

                    <div className="footerParagraph">
                    At Travel, we believe that adventure awaits just beyond the horizon. Our mission is to connect you with the most breathtaking destinations around the globe, offering unparalleled experiences and unforgettable memories. Whether you're dreaming of a tropical escape, a cultural journey, or a scenic adventure, we provide curated travel solutions tailored to your unique desires. Join us and embark on a journey of discovery—where every trip is a new story and every destination is a chapter waiting to be written. Let’s explore the world together, one adventure at a time.
                    </div>

                    <div className="footerSocials flex">
                        <AiOutlineTwitter className="icon"/>
                        <AiFillInstagram className="icon"/>
                        <AiFillYoutube className="icon"/>
                        <FaTripadvisor className="icon"/>

                    </div>
                </div>

                <div className="footerLinks grid" >
                    <div className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <FaChevronRight className="icon"/>
                            Services
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className="icon"/>
                            Insurance
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className="icon"/>
                            Agency
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className="icon"/>
                            Tourism
                        </li>

                        <li className="footerList flex">
                            <FaChevronRight className="icon"/>
                            Payment
                        </li>

                    </div>
                </div>
            </div>
        </div>

        </section>
    )
}

export default Footer