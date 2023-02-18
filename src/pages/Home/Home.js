import React from "react";
import { Link } from "react-router-dom";
import Courses from "../Course/Courses";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://www.roberthalf.com/sites/default/files/2021-04/shutterstock_412257712-2.jpg")`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold text-white">JobMission.com</h1>
            <p className="mb-5  text-white text-lg ml-8">
            Desire! That’s the one secret of every man’s career. Not education. Not being born with hidden talents. Desire.
            </p>
            <Link to="/courses">
              <button className="btn btn-primary  bg-teal-700 border-0 text-lg ">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Home;
