

// const ContactUs = () => {
//     return (
//         <div>
//            <h2>Contact us</h2> 
//         </div>
//     );
// };

// export default ContactUs;
import { FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa';
// import Navbar from '../Home/Navbar';




const ContactUs = () => {
    return (
        <div>
              <div className='p-4 mb-6 text-center'>
        <h2 className="text-3xl mb-4">Contact Us on</h2>
        <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
            <FaFacebook className='mr-3'></FaFacebook>
            <span>Facebook</span>
        </a>
            <a className='p-4 flex text-lg items-center border-x' href="">
                <FaTwitter className='mr-2'></FaTwitter>
                <span>Twitter</span>
            </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Facebook</span>
                </a>
    </div>
        </div>
    );
};

export default ContactUs;