import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/about-us.png';
import storyBackground from '../assets/testimonials.png';
import studentIcon from '../assets/student.png';
import communityIcon from '../assets/community.png';
import verifiedIcon from '../assets/verified.png';
import aiIcon from '../assets/ai.png';
import teamMember1 from '../assets/bhumika.jpg'; 
import teamMember2 from '../assets/bhumika.jpg';
import teamMember3 from '../assets/bhumika.jpg';



const AboutUs = () => {
  return (
    <section>
      {/* Background Section */}
      <div
        className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-[#edeecb] text-4xl lg:text-6xl font-bold bg-black/40 px-6 py-2 rounded-md">
          About Us
        </h1>
      </div>

      {/* Mission Section */}
      <div className="bg-[#f8f4e6] py-10 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto bg-[#623e28] text-[#edeecb] p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6">
            Our Mission
          </h2>
          <p className="text-lg lg:text-xl text-center leading-relaxed">
            "Empowering students to navigate the city with ease by providing
            tailored resources, accessible information, and a supportive
            community that simplifies urban living and fosters a seamless
            transition into their new environment."
          </p>
        </div>

        {/* Our Story Section */}
        <div
          className="about-us-container"
          style={{
            backgroundImage: `url(${storyBackground})`,
          }}
        >
          <h1 className="about-us-title">
            Our <span>STORY</span>
          </h1>
          <div className="about-us-content">
            <p>
              The idea for this platform was born from a shared experience—navigating the challenges of adjusting to a new city as students. Our team, hailing from different backgrounds, vividly remembers the overwhelming process of finding a place to stay, figuring out the city's transportation system, and locating reliable local services.
            </p>
            <p>
              While some of us spent weeks hunting for affordable accommodations that were both safe and close to our campuses, others struggled with long commutes, missed buses, or confusing transit systems. Add to that the frustration of finding essential services like affordable eateries, laundry, and repair shops, and it became clear: students need a better solution.
            </p>
            <p>
              We realized that while cities offer endless opportunities, they often lack centralized resources tailored to students' needs. This gap inspired us to create a platform that simplifies the transition for students moving to a new city.
            </p>
          </div>
        </div>
      </div>
      <div className="why-choose-container">
      <h2 className="why-choose-title">Why Choose Us?</h2>
      <div className="features-grid">
        {/* Box 1 */}
        <div className="feature-item">
          <div className="feature-icon">
            <img src={studentIcon} alt="Tailored for Students" />
            <p>Tailored for Students</p>
          </div>
          <div className="feature-description">
            <p>
              Our platform is designed specifically for students, addressing their unique needs, budgets, and preferences for accommodation, transportation, and local services.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="feature-item">
          <div className="feature-icon">
            <img src={communityIcon} alt="Community-Driven Support" />
            <p>Community-Driven Support</p>
          </div>
          <div className="feature-description">
            <p>
              Access peer reviews, ratings, and an active student community for trusted advice and tips.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="feature-item">
          <div className="feature-icon">
            <img src={verifiedIcon} alt="Verified and Reliable" />
            <p>Verified and Reliable</p>
          </div>
          <div className="feature-description">
            <p>
              Every listing and service is carefully verified to ensure quality and safety, so you can trust the resources you find.
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="feature-item">
          <div className="feature-icon">
            <img src={aiIcon} alt="Real-Time Assistance" />
            <p>Real-Time Assistance</p>
          </div>
          <div className="feature-description">
            <p>
              From live transit tracking to our AI chatbot, we’re here to provide instant support whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="team-container">
      <h2 className="team-title">Our Team</h2>
      <p className="team-description">
        "Meet our dedicated team of innovators! Anjali drives database and UI/UX design, Bhumika excels in frontend development and data gathering, and Juhi powers our project with machine learning expertise. Together, we're crafting solutions that make an impact!"
      </p>

      <div className="team-grid">
        {/* Team Member 1 */}
        <div className="team-member">
          <div className="team-photo">
            <img src={teamMember1} alt="Team Member 1" />
          </div>
          <div className="team-info">
            <p className="team-name">Anjali</p>
            <p className="team-designation">UI/UX Designer</p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="team-member">
          <div className="team-photo">
            <img src={teamMember2} alt="Team Member 2" />
          </div>
          <div className="team-info">
            <p className="team-name">Bhumika</p>
            <p className="team-designation">Frontend Developer</p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="team-member">
          <div className="team-photo">
            <img src={teamMember3} alt="Team Member 3" />
          </div>
          <div className="team-info">
            <p className="team-name">Juhi</p>
            <p className="team-designation">Machine Learning Expert</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};


export default AboutUs;
