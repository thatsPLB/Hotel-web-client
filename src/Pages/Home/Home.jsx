
import Footer from "../Footer/Footer";
import Location from "../Home/location";
import Banner from "./Banner";
import Newsletter from "./Newsletter";
import SpecialPrice from "./SpecialPrice";
// import Rooms from "./Rooms";



const Home = () => {
    return (
        <div>
           {/* <Rooms></Rooms>  */}
           
           <Banner></Banner>
           <Location></Location>
           <SpecialPrice></SpecialPrice>
           <Newsletter></Newsletter>  
           <Footer></Footer>    
        </div>
    );
};

export default Home;