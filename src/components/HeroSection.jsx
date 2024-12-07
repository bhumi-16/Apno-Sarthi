import backgroundImage from '../assets/header.jpg'; // Ensure correct path

const HeroSection = () => {
  return (
    <section 
      className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Jodhpur Text positioned at the top-left corner */}
      <h1 
        className="absolute top-5 left-5 text-4xl sm:text-5xl lg:text-6xl font-serif text-[#de5c0a] p-4"
        style={{ fontFamily: 'Cinzel Decorative, serif' }}
      >
        JODHPUR
      </h1>

      <div className="absolute bottom-0 w-full bg-[#edeecb] p-6 rounded-t-3xl text-center shadow-lg">
        <p className="text-sm sm:text-lg lg:text-xl text-gray-700 p-4" style={{ fontFamily: 'Garamond, serif' }}>
          Discover Jodhpur with Apno Sarthi — your ultimate guide to exploring this vibrant city. From historical forts to local markets, we help students settle easily and enjoy everything Jodhpur has to offer.
        </p>
        <button 
          className="bg-[#de5c0a] text-white py-2 px-6 mt-4 rounded-lg hover:bg-[#c95100] transition-colors duration-300 text-sm sm:text-base"
          style={{ fontFamily: 'Garamond, serif' }}
        >
          Explore City Guide
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
