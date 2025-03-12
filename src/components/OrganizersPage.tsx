
import React, { useEffect } from 'react';
import TeamSection from '@/components/TeamSection';
import ParticleBackground from '@/components/ParticleBackground';

const OrganizersPage = () => {
  const keyPersons = [
    {
      name: "Dr. Sai Prakash Leomuthu",
      position: "CEO",
      image: "sairam_ceo.png",
      linkedin: "https://www.linkedin.com/in/sairamceo/"
    },
    {
      name: "Dr. J Raja",
      position: "Principal",
      image: "principal.jpg",
      linkedin: "https://www.linkedin.com/in/raja-j-32b44164/"
    },
    {
      name: "Dr. Swagata Sarkar",
      position: "HOD",
      image: "1591960457895.jpeg",
      linkedin: "https://www.linkedin.com/in/swagatabsarkar/"
    }
  ];

  const staffCoordinators = [
    {
      name: "Mrs. S. Preethi",
      position: "AI-DS",
      image: "Preethi Ma'am.jpg"
    }
  ];

  const overallCoordinators = [
    {
      name: "Pradeep S",
      position: "Chairperson",
      image: "Pradeep.jpg",
      linkedin: "https://www.linkedin.com/in/pradeeptechno/"
    },
    {
      name: "Tharushi S S",
      position: "Vice Chairperson",
      image: "Tharushi.jpg",
      linkedin: "https://www.linkedin.com/in/tharushi-s-s"
    }
  ];

  const secretaries = [
    {
      name: "Surya Prakash S",
      position: "Secretary",
      image: "Surya.jpg"
    },
    {
      name: "Egadarshan S",
      position: "Secretary",
      image: "Egadharshan.jpg",
      linkedin: "https://www.linkedin.com/in/egadarshan-s-8a6036242"
    }
  ];

  const treasurers = [
    {
      name: "Hariprashaad S R",
      position: "Treasurer",
      image: "hari.png",
      linkedin: "https://www.linkedin.com/in/hariprashaadsr-off/"
    },
    {
      name: "Harini R",
      position: "Treasurer",
      image: "Harini R.jpg",
      linkedin: "https://www.linkedin.com/in/harini-renganathan-681655258"
    }
  ];

  const webDevelopers = [
    {
      name: "Chellappan R",
      position: "Web Developer",
      image: "Chellappan R.JPG",
      linkedin: "https://www.linkedin.com/in/chellappan-ramachandran-ba85a1257/"
    },
    {
      name: "Praveen K",
      position: "Web Developer",
      image: "Praveen.jpg",
      linkedin: "https://www.linkedin.com/in/praveen-k2004/"
    }
  ];

  const mediaTeam = [
    {
      name: "Naaga Dheva Dharshan N",
      position: "Media Team",
      image: "Naaga Dheva Dharshan.jpeg",
      linkedin: "https://www.linkedin.com/in/naagadhevadharshann/"
    },
    {
      name: "Hemanathan",
      position: "Media Team",
      image: "Hemanathan.jpg",
      linkedin: "https://www.linkedin.com/in/r-hemanathan-a5a504257"
    },
    {
      name: "Gokul J",
      position: "Media Team",
      image: "Gokul J.jpg"
    }
  ];

  // Scroll reveal effect
  useEffect(() => {
    // We're handling animation using CSS with delays based on index
    // This empty useEffect hook is kept for potential future enhancements
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gray-950 relative overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700">
            MEET THE TEAM
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-red-700 mx-auto mb-6"></div>
          <p className="text-red-300/70 max-w-2xl mx-auto">
            The passionate individuals behind our success, working together to create exceptional experiences.
          </p>
        </div>

        <TeamSection title="KEY PERSONS" members={keyPersons} />
        <TeamSection title="STAFF CO-ORDINATORS" members={staffCoordinators} />
        <TeamSection title="OVERALL CO-ORDINATORS" members={overallCoordinators} />
        <TeamSection title="SECRETARIES" members={secretaries} />
        <TeamSection title="TREASURERS" members={treasurers} />
        <TeamSection title="WEB DEVELOPERS" members={webDevelopers} />
        <TeamSection title="MEDIA TEAM" members={mediaTeam} />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-950 to-transparent z-10"></div>
    </div>
  );
};

export default OrganizersPage;
