import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDetails from "../../pages/CoursesDetails/CourseDetails";
import Courses from "../../pages/Course/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";
import PrivetRoute from "../PrivateRoute/PrivateRoute";
import FAQ from '../../pages/FAQ/faq';
import AllHome from "../../pages/AllHome";
import Experienced from "../../pages/experienced/Experienced";
import ExperiencedDetails from "../../pages/experienced/ExperiencedDetails";



export const router = createBrowserRouter([
  {
    paht: "/",
    element: <Main></Main>,
    children: [
      
      {
        path: "login",
        element: <Login></Login>,
      },
     
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5002/freshers"),
      },
      
      {
        path: "fresher/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5002/fresher/${params.id}`),
      },
      {
        path: "experienced/:id",
        element: <ExperiencedDetails />,
      
      },
      {
        path: "experienced/:id",
        element: <ExperiencedDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5002/experienced/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5002/coursee/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
