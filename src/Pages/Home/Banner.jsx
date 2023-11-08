

const Banner = () => {
    return (
        <div className="hero mt-4 " style={{backgroundImage: 'url(https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hotel Peradise</h1>
            <p className="mb-5">Welcome to Hotel Paradise, where your dream vacation becomes a reality. Nestled in a tranquil oasis of luxury and comfort, our resort offers the perfect escape from the hustle and bustle of everyday life. Immerse yourself in a world of opulence, breathtaking views, and exceptional hospitality. Your journey to paradise begins here.</p>
            <button className="btn btn-primary">flat 30% discount</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;