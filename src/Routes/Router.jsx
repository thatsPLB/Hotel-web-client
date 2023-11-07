import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/Signup";
import Rooms from "../Pages/Home/Rooms";
import CheckOut from "../Pages/checkOut";
import BookService from "../Pages/BookService/BookService";
import AboutUs from "../Pages/Home/AboutUs";
import ContactUs from "../Pages/Home/ContactUs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path:'rooms',
          element:<Rooms></Rooms>
        },
        {
          path:'aboutus',
          element:<AboutUs></AboutUs>
        },
        {
          path:'contactus',
          element:<ContactUs></ContactUs>
        },
        {
          path:'book/:id',
          element:<BookService></BookService>,
          loader: ({params}) => fetch(`http://localhost:5000/Rooms/${params.id}`)
        },
        {
          path: 'checkout/:id',
          element:<CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/Rooms/${params.id}`)
        }
      ]
    },
  ]);

  export default router;