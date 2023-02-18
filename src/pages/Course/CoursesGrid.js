import React from "react";
import { Link } from "react-router-dom";

const CoursesGrid = ({ data }) => {
  const { id, img, name, jobtype, location } =
    data;
  return (
    <div>
      <Link to={`/fresher/${id}`}>
        <div className="card rounded-lg card-compact h-full">
          <figure className="h-48 w-full">
            <img className="h-full w-full md:" src={img} alt="" />
          </figure>
          <div className="card-body  bg-gray-900 text-start">
          <div className="h-32">
              <h1 className="card-title mt-1 text-teal-400">{name}</h1>
              <span className="text-gray-200 text-xl">{jobtype}</span>
              <p className="text-gray-200">{location}</p>
            
            </div>
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoursesGrid;
