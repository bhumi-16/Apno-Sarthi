import React from 'react';
import mehrangarh from '../assets/pexels-abhinav-tripathi-473877923-15774210.jpg';
import umaidBhawan from '../assets/pexels-axp-photography-500641970-19160099.jpg';

const InfoSection = () => {
  return (
    <section className="bg-[#edeecb] py-5 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 overflow-hidden">
          <img
            src={mehrangarh}
            alt="Mehrangarh Fort"
            className="w-[70%] lg:w-[80%] h-auto object-cover rounded-[30px] transition-transform transform hover:scale-105"
          />
          <img
            src={umaidBhawan}
            alt="Umaid Bhawan"
            className="absolute bottom-[-20px] left-[30%] transform -translate-x-1/2 w-[60%] lg:w-[60%] rounded-[30px] shadow-lg transition-transform hover:scale-105"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left">
          <p
            className="text-gray-800 text-lg sm:text-xl lg:text-2xl leading-relaxed"
            style={{ fontFamily: 'Garamond, serif' }}
          >
            Jodhpur is a city in the Thar Desert of the northwest Indian state of Rajasthan. Its 15th-century Mehrangarh Fort is a former palace that’s now a museum, displaying weapons, paintings, and elaborate royal palanquins (sedan chairs). Set on a rocky outcrop, the fort overlooks the walled city, where many buildings are painted the city’s iconic shade of blue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
