import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const room = useLoaderData();
    const {image,name,rating} = room
    return (
        <div>
           <h2>Room Details: {name}</h2> 
           <div className="card w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}!</h2>
    <p>Ratings: {rating}</p>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <input className="btn btn-primary" type="submit" value="Book Now" />
    </div>
  </div>
</div>
        </div>
    );
};

export default CheckOut;