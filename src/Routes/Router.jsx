import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/Signup";
import Rooms from "../Pages/Home/Rooms";
import CheckOut from "../Pages/checkOut";


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
          path: 'checkout/:id',
          element:<CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/Rooms/${params.id}`)
        }
      ]
    },
  ]);

  export default router;