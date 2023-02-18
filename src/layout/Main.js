import React from 'react';
import { Outlet } from 'react-router-dom';
import Courses from '../pages/Course/Courses';
import Navbar from './../pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           
        </div>
    );
};

export default Main;