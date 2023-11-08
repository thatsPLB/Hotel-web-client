
import { Map, Marker } from "pigeon-maps";
function AMap() {
  return (
    
    <div>
      <div>
        <h2 className="text-center font-bold text-2xl">Our Location</h2>
      </div>
      <Map
        height={300}
        defaultCenter={[23.844610300207815, 90.2461498938375]}
        defaultZoom={18}
      >
        <Marker width={50} anchor={[23.844610300207815, 90.2461498938375]} />
        <Marker width={50} anchor={[23.844993734751508, 90.24578327791006]} />
        <Marker width={50} anchor={[23.84423578387108, 90.24720026237003]} />
      </Map>
    </div>
  );
}

export default AMap;