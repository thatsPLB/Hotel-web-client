import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";


const Rooms = () => {
    const [rooms,setRooms] = useState([]);
    useEffect ( () =>{
        fetch('http://localhost:5000/Rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    } , [])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl text-bold text-violet-800">Explore Our Rooms</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {
                rooms.map(room =><RoomCard
                key={room.id}
                room={room}
                ></RoomCard>)
               } 
            </div>
        </div>
    );
};

export default Rooms;