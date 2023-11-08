

const SpecialPrice = () => {
    return (
        
        <div>
            <h2 className="text-center font-bold text-2xl">Our Special Deals</h2>
            <div className="flex gap-4">
            <div className="card mb-2 bg-violet-300 w-96 shadow-xl">
                <figure className="p-2">
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Luxury Vila</h2>
                    <div className="rounded-lg ">
                        <div className="text-gray-600 line-through"> 1000$</div>
                        <div className="text-4xl font-bold text-orange-600">
                            $800
                        </div>
                        <span className="discount-badge">Save 20%</span>
                    </div>
                    <p className="font-bold">Private luxury villa with a personal pool</p>
                    <p className="font-bold">Free Wifi Zone</p>
                    <p className="font-bold">buffet Dinner</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
            </div>
        </div>
            <div className="card bg-blue-200 w-96 shadow-xl">
  <figure className="p-2">
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl">Standard Room</h2>
    <div className="rounded-lg ">
  <div className="text-gray-600 line-through"> 195$</div>
  <div className="text-4xl font-bold text-orange-600">
    $150
    
  </div>
  <span className="discount-badge">Save 30%</span>
</div>

    <p className="font-bold">Comfortable standard room for a relaxing stay</p>
    <p className="font-bold">Free Wifi Zone</p>
    <p className="font-bold">Dinner</p>
    <div className="card-actions">
      <button className="btn btn-primary">Book Now</button>
    </div>
    
  </div>
</div>
            <div className="card bg-purple-200 w-96 shadow-xl">
  <figure className="p-2">
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl">Honeymoon Suite</h2>
    <div className="rounded-lg ">
  <div className="text-gray-600 line-through"> 800$</div>
  <div className="text-4xl font-bold text-orange-600">
    $400
    
  </div>
  <span className="discount-badge">Save 50%</span>
</div>

    <p className="font-bold">Romantic suite perfect for honeymooners</p>
    <p className="font-bold">Free Wifi Zone</p>
    <p className="font-bold">Candle Light Dinner</p>
    <div className="card-actions">
      <button className="btn btn-primary">Book Now</button>
    </div>
    
  </div>
</div>
            </div>
            
        </div>
    );
};

export default SpecialPrice;
