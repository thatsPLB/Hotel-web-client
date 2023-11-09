import { Link, useLocation, useNavigate } from 'react-router-dom';
import logimg from '../../assets/3-Login-Page-Screen.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate=useNavigate()
  console.log(location);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        signIn(email,password)
        .then(result =>{
          const loggedInUser = result.user
          console.log(loggedInUser);
          const user = {email}
       
          // get access token
          axios.post('https://assignment-11-server-hazel.vercel.app/jwt', user,{withCredentials: true })
          .then(res =>{
            console.log(res.data);
            if(res.data.success){
                navigate(location?.state ? location?.state: '/')
            }
          })
        })
        .catch(error=> console.log(error))
    }

    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" mr-12 w-1/2">
      <img src={logimg} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-violet-300">
      <div className="card-body ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    <form onSubmit={handleLogin}>
   <div className="form-control ">
          <label className="label ">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input bg-violet-200 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input bg-violet-200  input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link text-black link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
        
    </form>
    
      </div>
      <p className='m-4 text-center'>New to Hotel Peradise? <Link className='text-violet-600 font-bold' to="/signup">Sign UP</Link></p>
    </div>
    
  </div>
  
</div>
    );
};

export default Login;