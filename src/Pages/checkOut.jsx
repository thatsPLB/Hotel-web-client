import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const CheckOut = () => {
    const room = useLoaderData();
    const {image,name,rating,price,size,description,availability,} = room
    const {user} = useContext(AuthContext)

    const handleBookService =event =>{
      event.preventDefault();
    }
    return (
        <div>
           <h2>Room Details: {name}</h2> 
           <div className="card w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{name}!</h2>
    <h2 className="font-semibold">{description}</h2>
    <h2 className="font-semibold">{size}</h2>
    <p className="font-semibold">{price} Per Night</p>
    <p className="font-semibold text-green-600">{availability}</p>
    <p className="font-semibold">Ratings: {rating}</p>
    
    <div className="card-actions">
      <button onClick={handleBookService} className='text-white uppercase bg-violet-800 mb-6'>Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CheckOut;