import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsFilePdf } from "react-icons/bs";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const ExperiencedDetails = () => {
    const {id} = useParams();
    const [exp,setExp] = useState({})
   
     useEffect(()=>{
         fetch(` http://localhost:5002/experienced/${id}`)
       .then(res=>res.json())
        .then(data=>setExp(data))

     },[])
  
  return (
    
        <div>
          <div className="hero min-h-screen pt-44 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img className="w-[25%] rounded-lg shadow-2xl ms-10 " src={exp.img} alt="" />
                <div>
                    <h1 className="text-5xl font-bold text-teal-500 pb-5">{exp.name}</h1>
                    <h4 className="text-2xl font-bold">{exp.companydetails}</h4>
                    <h4> {exp.location}</h4>
                    <p className="py-6 p-10"><span className="text-teal-500 font-bold text-xl"> Description:</span> {exp.jobdetails}</p>
                    <p className="py-6 p-10"><span className="text-teal-500 font-bold text-xl"> Qualification </span> {exp.qualification}</p>
                    
              
                
                </div>
                
            </div>
        </div>
        
        </div>
    
  );
};

export default ExperiencedDetails;
