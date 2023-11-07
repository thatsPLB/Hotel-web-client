

// const BookingRow = ({booking}) => {
//     return (
//         <tr>
//             <th>
//                 <label>
//                     <input type="checkbox" className="checkbox" />
//                 </label>
//             </th>
//             <td>
//                 <div className="flex items-center space-x-3">
//                     <div className="avatar">
//               <div className="mask mask-squircle w-12 h-12">
//                 <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
//             <div>
//               <div className="font-bold">Hart Hagerty</div>
//               <div className="text-sm opacity-50">United States</div>
//             </div>
//           </div>
//         </td>
//         <td>
//           Zemlak, Daniel and Leannon
//           <br/>
//           <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//         </td>
//         <td>Purple</td>
//         <th>
//           <button className="btn btn-ghost btn-xs">details</button>
//         </th>
//       </tr>
        
//     );
// };

// export default BookingRow;

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, date, RoomName, price, image, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {RoomName}
            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;