
import { NavLink } from "react-router-dom";
import user from '../../assets/user.png'



const Navbar = () => {
    const navLinks = <>
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/rooms">Rooms</NavLink></li>
            <li><NavLink to="/mybookings">My Bookings</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-orange-600 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
         <NavLink to="/" className="btn btn-ghost normal-case text-orange-600 text-xl">Hotel Peradise</NavLink>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user} />
        </div>
      </label>
        </div>
      </div>
    );
};

export default Navbar;