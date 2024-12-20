import React from "react";
import './main.css';
import './main.scss';
import { BsArrowRight } from 'react-icons/bs';
import { FaUserLock, FaHeartbeat } from 'react-icons/fa'; // Importing additional icons
import { FaPeopleRoof } from 'react-icons/fa6'; // Importing additional icons
import video from '../../Assets/video (3).mp4';

const Main = () => {
  return (
    <section className="main container section">
      <div className="videoAndContent grid">
        {/* Video Section */}
        <div className="videoSection">
          <video width="100%" height="auto" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Buttons Overlay on Video */}
          <div className="videoButtons">
            <button className="videoBtn checkAvailability">Check Availability</button>
            <button className="videoBtn bookNow">Book Now</button>
          </div>
        </div>

        {/* Content Section */}
        <div className="contentSection">
          <div className="secTitle">
            <h3 className="title">You Deserve to be</h3>
            <h4 className="title">Mentally Healthy</h4>
          </div>
          <p className="smallContent">
            Discover the heart behind our mental health platform. At our core, we are a compassionate community of experts dedicated to guiding you on your journey to emotional well-being and resilience.
          </p>
          <button className="getStartedBtn flex" aria-label="Get Started">
            Get Started <BsArrowRight className="icon" />
          </button>

          {/* Cards Section */}
          <div className="cardsSection">
            <div className="card">
              {/* Adding the FaUserLock icon */}
              <FaUserLock className="cardIcon" />
              <h4 className="cardTitle">Confidentiality</h4>
              <p className="cardDescription">
                Your privacy is sacred; we maintain the highest level of confidentiality.
              </p>
            </div>
            <div className="card">
              {/* Adding the FaHeartbeat icon */}
              <FaHeartbeat className="cardIcon" />
              <h4 className="cardTitle">Accessibility</h4>
              <p className="cardDescription">
                Accessible mental health support to all background and areas.
              </p>
            </div>
            <div className="card">
              {/* Adding the FaPeopleRoof icon */}
              <FaPeopleRoof className="cardIcon" />
              <h4 className="cardTitle">Community</h4>
              <p className="cardDescription">
                We foster supportive community where you can connect and share.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
 