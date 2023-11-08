
import { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Providers/AuthProvider';


const BookService = () => {
    const room = useLoaderData();
    const { name, _id, description, price, image } = room;
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        // const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            RoomName: name, 
            email, 
            date, 
            image,
            room_id: _id, 
            price: price
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Room book successfully')
            }
        })

    }

    return (
        <div>
            <h2 className='text-center text-3xl'>!!Please Check Your Information!! </h2>
            <h2 className='text-center text-s'>Room name: {name} </h2>
            <h2 className='text-center text-s'>Room Description: {description} </h2>
            <h2 className='text-center text-s'>Room Price: {price} </h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-purple-200">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input bg-white input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Date</span>
                        </label>
                        <input type="date" name="date" className="input bg-white input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input bg-white input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Due amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input bg-white input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Booking Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default BookService;