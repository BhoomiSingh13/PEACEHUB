import React from "react";
import "./services.scss";
import { BsArrowRight } from "react-icons/bs";
import highlightImage from '../../Assets/c (2).png';

const Services = () => {
  return (
    <div className="servicesSection">
      <h1>
        <span className="our">Our Mental</span> 
        <span className="mentalHealth"> Health Services</span>
      </h1>
      <p>
        Explore our diverse services designed to nurture your mental health. From online counseling to self-care tools, we offer a holistic approach to help you achieve the emotional balance and strength you deserve.
      </p>
      <div className="topRightBox">
        <img src={highlightImage} alt="Highlight" />
        <div className="imageText">
          <div className="main">Counseling</div>
          <div className="small">One-on-one sessions with our experts as well as with our professional therapists.</div>
        </div>
      </div>
      {/* New Section for Group Therapy and Crisis Helpline */}
      <div className="additionalServices">
        <div className="serviceItem">
          <span className="underline">Group Therapy</span> <BsArrowRight />
        </div>
        <div className="serviceItem">
          <span>Crisis Helpline</span> <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Services;
