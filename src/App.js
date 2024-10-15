import React, {  useRef } from 'react';
import { FaTools, FaTint, FaWater, FaHotTub } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import { gsap } from 'gsap';

function App() {
  const cardRefs = useRef([]);

  // Function to rotate the card on hovering on the card container below the circular icon container
  const handleMouseEnter = (index) => {
    gsap.to(cardRefs.current[index], { rotationY: 360, duration: 1 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], { rotationY: 0, duration: 1 });
  };

  return (
    <div id="assignment" className='flex items-center min-h-screen justify-center '>
      <div className='diagonal-split-background py-10 w-[80%]'>
        <h2 className="text-5xl font-semibold ml-[75px] text-white mb-[80px] ">OUR SERVICES</h2>
        <div className="flex flex-wrap justify-center gap-10">

          {/* Card 1 */}
          <div className='flex justify-center mb-2 h-[280px]'>
            <div className="w-20 h-20 mt-[-40px] border-[4px] border-[#33006F] absolute rounded-full  bg-purple-100 flex items-center justify-center shadow-md">
              <FaTools className="text-4xl text-purple-700" />
            </div>
            <div
              className="card-container relative p-6 w-60 shadow-lg overflow-hidden z-10 flex justify-center"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
              ref={(el) => (cardRefs.current[0] = el)}
            >
              <div className='text-center'>
                <div className="text-xl font-bold mb-2 mt-10 w-[200px] text-center">Emergency Plumbing Services</div>
                <p className="text-gray-600 text-sm mb-4 font-medium text-center">
                  Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays.
                </p>
                <a href="#" className="text-purple-600 font-bold flex text-md items-center gap-1 justify-center ">EXPLORE THIS SERVICE <span className='text-sm'><MdArrowForwardIos/></span></a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='flex justify-center mb-2 h-[280px]'>
            <div className="w-20 h-20 mt-[-40px] border-[4px] border-[#33006F] absolute rounded-full bg-purple-100 flex items-center justify-center shadow-md">
              <FaTint className="text-4xl text-purple-700" />
            </div>
            <div
              className="card-container relative p-6 w-60 shadow-lg overflow-hidden z-10 flex justify-center"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
              ref={(el) => (cardRefs.current[1] = el)}
            >
              <div className='text-center'>
                <div className="text-xl font-bold mb-2 mt-10 w-[200px] text-center">Plumbing and Drains</div>
                <p className="text-gray-600 text-sm mb-4 font-medium text-center">
                  As the largest plumbing and drain service company, we make thousands of repairs every day.
                </p>
                <a href="#" className="text-purple-600 font-bold flex text-md items-center gap-1 justify-center">EXPLORE THIS SERVICE <span className='text-sm'><MdArrowForwardIos/></span></a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='flex justify-center h-[280px]'>
            <div className="w-20 h-20 mt-[-40px] border-[4px] border-[#33006F] absolute rounded-full bg-purple-100 flex items-center justify-center shadow-md">
              <FaWater className="text-4xl text-purple-700" />
            </div>
            <div
              className="card-container relative p-6 w-60 shadow-lg overflow-hidden z-10 flex justify-center"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
              ref={(el) => (cardRefs.current[2] = el)}
            >
              <div className='text-center'>
                <div className="text-xl font-bold mb-2 mt-10 w-[200px] text-center">Water Damage</div>
                <p className="text-gray-600 text-sm mb-4 font-medium text-center">
                  Our teams are equipped with state-of-the-art water extraction and cleanup equipment.
                </p>
                <a href="#" className="text-purple-600 font-bold flex text-md items-center gap-1 justify-center">EXPLORE THIS SERVICE <span className='text-sm'><MdArrowForwardIos/></span></a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className='flex justify-center h-[280px]'>
            <div className="w-20 h-20 mt-[-40px] border-[4px] border-[#33006F] absolute rounded-full bg-purple-100 flex items-center justify-center shadow-md">
              <FaHotTub className="text-4xl text-purple-700" />
            </div>
            <div
              className="card-container relative p-6 w-60 shadow-lg overflow-hidden z-10 flex justify-center"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
              ref={(el) => (cardRefs.current[3] = el)}
            >
              <div className='text-center'>
                <div className="text-xl font-bold mb-2 mt-10 w-[200px] text-center">Water Heaters</div>
                <p className="text-gray-600 text-sm mb-4 font-medium text-center">
                  Trust us for repair and replacement of gas, electric, and tankless water heaters.
                </p>
                <a href="#" className="text-purple-600 font-bold flex text-md items-center gap-1 justify-center">EXPLORE THIS SERVICE <span className='text-sm'><MdArrowForwardIos/></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
