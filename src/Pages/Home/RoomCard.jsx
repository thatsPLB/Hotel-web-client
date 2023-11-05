

const RoomCard = ({room}) => {
    const {image,name,rating}= room
    return (
        <div className="card w-96  shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="card-actions justify-center">
            <div className="badge badge-outline"> Ratings: {rating}</div> 
          </div>
        </div>
      </div>
    );
};

export default RoomCard;