

function Newsletter() {
    return (
      <div className="mt-4">
          <div className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... border-2 border-solid border-violet-800 rounded flex items-center justify-center flex-col mb-4' style={{height: "50vh"}}>
              <div className='text-center text-violet-700 font-mono'>
                  <h3 className='font-bold text-2xl '>🌟 Discover Our Latest Hotel Newsletter! 🌟</h3>
                  <p className='text-black w-2/3 m-auto  font-medium'>Stay in the loop with our exclusive hotel newsletter. Get ready for an exciting journey through the world of luxury accommodation, travel tips, and irresistible promotions. Whether you are planning your dream vacation or a quick weekend getaway, our newsletter has everything you need.</p>
              </div>
              <div className='flex flex-col w-full px-20'>
                  <input type="email" placeholder='Your email address' className='my-4 bg-white text-black outline-none p-2 rounded'/>
                  <button className='text-white uppercase bg-violet-800 mb-6'>Subscribe</button>
              </div>
          </div>
      </div>
    )
  }
  
  export default Newsletter