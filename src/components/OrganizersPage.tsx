import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string; 
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-green-500 text-center mb-8">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2 shadow-neon-sm hover:shadow-neon"
        >
          <div className="p-6 flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="group relative w-32 h-32">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-green-600 shadow-neon">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* LinkedIn Overlay (Only if LinkedIn link exists) */}
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Linkedin 
                      className="text-green-500 hover:text-green-400 transform hover:scale-110 transition-all duration-200" 
                      size={32}
                    />
                  </a>
                )}
              </div>
            </div>
            {/* Member Details */}
            <h3 className="text-xl font-bold text-green-400 mt-4 mb-1">{member.name}</h3>
            <p className="text-gray-300">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 🎯 Organizers Page Component
const OrganizersPage: React.FC = () => {
  // ✅ Team Data (Typed Using TeamMember Interface)
  const keyPersons: TeamMember[] = [
    { name: "Dr. Sai Prakash Leomuthu", position: "CEO", image: "sairam_ceo.png", linkedin: "https://www.linkedin.com/in/sairamceo/" },
    { name: "Dr. J Raja", position: "Principal", image: "principal.jpg", linkedin: "https://www.linkedin.com/in/raja-j-32b44164/" },
    { name: "Dr. Swagata Sarkar", position: "HOD", image: "1591960457895.jpeg", linkedin: "https://www.linkedin.com/in/swagatabsarkar/" }
  ];

  const staffCoordinators: TeamMember[] = [
    { name: "Mrs. S. Preethi", position: "AI-DS", image: "Preethi Ma'am.jpg" }
  ];

  const overallCoordinators: TeamMember[] = [
    { name: "Pradeep S", position: "Chairperson", image: "Pradeep.jpg", linkedin: "https://www.linkedin.com/in/pradeeptechno/" },
    { name: "Tharushi S S", position: "Vice Chairperson", image: "Tharushi.jpg", linkedin: "https://www.linkedin.com/in/tharushi-s-s" },
    { name: "Tharushi S S", position: "Vice Chairperson", image: "Tharushi.jpg", linkedin: "https://www.linkedin.com/in/tharushi-s-s" }
  ];

  const secretaries: TeamMember[] = [
    { name: "Surya Prakash S", position: "Secretary", image: "Surya.jpg" },
    { name: "Egadarshan S", position: "Secretary", image: "Egadharshan.jpg", linkedin: "https://www.linkedin.com/in/egadarshan-s-8a6036242" }
  ];

  const treasurers: TeamMember[] = [
    { name: "Hariprashaad S R", position: "Treasurer", image: "hari.png", linkedin: "https://www.linkedin.com/in/hariprashaadsr-off/" },
    { name: "Harini R", position: "Treasurer", image: "Harini R.jpg", linkedin: "https://www.linkedin.com/in/harini-renganathan-681655258" }
  ];

  const webDevelopers: TeamMember[] = [
    { name: "Chellappan R", position: "Web Developer", image: "Chellappan R.JPG", linkedin: "https://www.linkedin.com/in/chellappan-ramachandran-ba85a1257/" },
    { name: "Praveen K", position: "Web Developer", image: "Praveen.jpg", linkedin: "https://www.linkedin.com/in/praveen-k2004/" }
  ];

  const mediaTeam: TeamMember[] = [
    { name: "Naaga Dheva Dharshan N", position: "Media Team", image: "Naaga Dheva Dharshan.jpeg", linkedin: "https://www.linkedin.com/in/naagadhevadharshann/" },
    { name: "Hemanathan", position: "Media Team", image: "Hemanathan.jpg", linkedin: "https://www.linkedin.com/in/r-hemanathan-a5a504257" },
    { name: "Gokul J", position: "Media Team", image: "Gokul J.jpg" }
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
            MEET THE TEAM
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Team Sections */}
        <TeamSection title="KEY PERSONS" members={keyPersons} />
        <TeamSection title="STAFF CO-ORDINATORS" members={staffCoordinators} />
        <TeamSection title="OVERALL CO-ORDINATORS" members={overallCoordinators} />
        <TeamSection title="SECRETARIES" members={secretaries} />
        <TeamSection title="TREASURERS" members={treasurers} />
        <TeamSection title="WEB DEVELOPERS" members={webDevelopers} />
        <TeamSection title="MEDIA TEAM" members={mediaTeam} />
      </div>
    </div>
  );
};

export default OrganizersPage;
