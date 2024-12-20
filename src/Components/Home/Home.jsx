import React, { useState } from "react";
import "./home.css";
import "./home.scss";
import { BsArrowRight } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import pp1 from "../../Assets/pp1.jpeg"; // Update paths based on your file structure
import pp2 from "../../Assets/pp2.jpeg";
import pp3 from "../../Assets/pp3.jpeg";

const Home = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(null);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((year) => year - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((year) => year + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <section className="home">
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Counseling <BsArrowRight className="icon" />
          </span>
          <span className="smallText">
            Group Therapy <BsArrowRight className="icon" />
          </span>
        </div>

        <div className="cardDiv">
          <div className="cardContent">
            <h2>Join our active healthy community</h2>
            <p>As easy as a click away.</p>
          </div>
          <CiCirclePlus className="plusIcon" />

          {/* Profile Pictures Section */}
          <div className="profilePictures">
            <img src={pp1} alt="Profile 1" className="profilePic" />
            <img src={pp2} alt="Profile 2" className="profilePic" />
            <img src={pp3} alt="Profile 3" className="profilePic" />
          </div>
        </div>

        {/* Image Above Calendar with Text */}
    <div className="imageContainer">
      <img src={require("../../Assets/mu.jpeg")} alt="Community" className="communityImage" />
      <p className="imageText">Join our community for better well-being</p>
    </div>

        <div className="scheduleDiv">
          <h3>Book a Schedule</h3>
          <div className="monthSelector">
            <button className="prevMonth" onClick={handlePrevMonth}>
              &lt;
            </button>
            <span>{months[currentMonth]} {currentYear}</span>
            <button className="nextMonth" onClick={handleNextMonth}>
              &gt;
            </button>
          </div>
          <div className="calendar">
            {Array.from({ length: daysInMonth }, (_, index) => (
              <div
                key={index}
                className={`day ${selectedDay === index + 1 ? "selected" : ""}`}
                onClick={() => handleDayClick(index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <div className="getStartedDiv">
          <button className="getStartedBtn">Get Started <BsArrowRight /> </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
