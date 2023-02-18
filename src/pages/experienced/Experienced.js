import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesGrid from "../Course/CoursesGrid";
import Home from "../Home/Home";
import ExperiencedGrid from "./ExperiencedGrid";


const Experienced = () => {
 const [experienced, setExperienced] = useState([]);

 fetch('http://localhost:5002/experienced')
 .then(res => res.json())
 .then(data => setExperienced(data))
  return (
    <div> 
    <h1 className="text-white text-4xl font-bold mt-28 mb-4">Experienced Job here For You !!</h1>
    <div className="grid grid-cols-12 ">
      
      <div className="col-span-12 md:col-span-12 px-5 grid grid-cols-1 md:grid-cols-3 gap-5 my-5 ">
        {experienced?.map((option) => (
          <ExperiencedGrid key={option.id} data={option}></ExperiencedGrid>
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default Experienced;
