import { Link } from 'react-router-dom';
import logimg from '../../assets/3-Login-Page-Screen.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const SignUp = () => {
  const {createUser} = useContext(AuthContext)
    const handleSingUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name,email,password);

        createUser(email,password)
        .then(result =>{
          const user = result.user
          console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-12 w-1/2">
            <img src={logimg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-violet-300">
            <div className="card-body ">
            <h1 className="text-5xl font-bold">Resister now!</h1>
          <form onSubmit={handleSingUp}>
         <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-black">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input bg-violet-200 input-bordered" required />
              </div>
         <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-black">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input bg-violet-200 input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black"> Confirm Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input bg-violet-200  input-bordered" required />
                <label className="label">
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Resister" />
              </div>
          </form>
          
            </div>
            <p className='m-4 text-center'>Already have an account? <Link className='text-violet-600 font-bold' to="/login">Login</Link></p>
          </div>
          
        </div>
      </div>
    );
};

export default SignUp;