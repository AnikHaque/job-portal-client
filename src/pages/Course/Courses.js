import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesGrid from "../Course/CoursesGrid";
import Experienced from "../experienced/Experienced";
import Home from "../Home/Home";


const Courses = () => {
  const data = useLoaderData();
  return (
    <div>
<Home></Home>
    
    <h1 className="text-white text-4xl font-bold mt-28 mb-4">Fresher Job here For You !!</h1>
    <div className="grid grid-cols-12 ">
      
      <div className="col-span-12 md:col-span-12 px-5 grid grid-cols-1 md:grid-cols-3 gap-5 my-5 ">
        {data.map((option) => (
          <CoursesGrid key={option.id} data={option}></CoursesGrid>
        ))}
      </div>
      
    </div>
    <Experienced></Experienced>
    </div>
  );
};

export default Courses;
