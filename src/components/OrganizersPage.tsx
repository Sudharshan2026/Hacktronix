// import { Linkedin } from "lucide-react";

// interface TeamMember {
//   name: string;
//   position: string;
//   image: string;
//   linkedin?: string; 
// }

// interface TeamSectionProps {
//   title: string;
//   members: TeamMember[];
// }

// const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => (
//   <div className="mb-16 animate-flicker">
//     <h2 className="text-3xl font-bold text-red-600 text-center mb-8 drop-shadow-neon-red uppercase tracking-wider animate-glow-red">
//       {title}
//     </h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//       {members.map((member, index) => (
//         <div
//           key={index}
//           className="bg-black rounded-lg overflow-hidden border border-red-500 hover:border-red-700 transition-all duration-300 transform hover:-translate-y-3 shadow-red-neon hover:shadow-red-neon-lg hover:scale-110 animate-pulse-fast"
//         >
//           <div className="p-6 flex flex-col items-center text-center">
//             <div className="group relative w-36 h-36">
//               <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-red-600 shadow-red-neon animate-border-pulse-fast">
//                 <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
//                 />
//                 {member.linkedin && (
//                   <a 
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse-fast"
//                   >
//                     <Linkedin 
//                       className="text-red-500 hover:text-red-400 transform hover:scale-125 transition-all duration-200 animate-spin-slow" 
//                       size={36}
//                     />
//                   </a>
//                 )}
//               </div>
//             </div>
//             <h3 className="text-xl font-bold text-red-500 mt-4 mb-1 drop-shadow-neon-red animate-glow-red">
//               {member.name}
//             </h3>
//             <p className="text-gray-400 animate-fade-in-slow">{member.position}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const OrganizersPage: React.FC = () => {
//   const keyPersons: TeamMember[] = [
//     { name: "Dr. Sai Prakash Leomuthu", position: "CEO", image: "sairam_ceo.png", linkedin: "https://www.linkedin.com/in/sairamceo/" },
//     { name: "Dr. J Raja", position: "Principal", image: "principal.jpg", linkedin: "https://www.linkedin.com/in/raja-j-32b44164/" },
//     { name: "Dr. Swagata Sarkar", position: "HOD", image: "1591960457895.jpeg", linkedin: "https://www.linkedin.com/in/swagatabsarkar/" }
//   ];
    
//   const staffCoordinators: TeamMember[] = [
//     { name: "Mrs. S. Preethi", position: "AI-DS", image: "Preethi Ma'am.jpg" }
//   ];

//   const overallCoordinators: TeamMember[] = [
//     { name: "Pradeep S", position: "Chairperson", image: "Pradeep.jpg", linkedin: "https://www.linkedin.com/in/pradeeptechno/" },
//     { name: "Tharushi S S", position: "Vice Chairperson", image: "Tharushi.jpg", linkedin: "https://www.linkedin.com/in/tharushi-s-s" }
//   ];

//   const secretaries: TeamMember[] = [
//     { name: "Surya Prakash S", position: "Secretary", image: "Surya.jpg" },
//     { name: "Egadarshan S", position: "Secretary", image: "Egadharshan.jpg", linkedin: "https://www.linkedin.com/in/egadarshan-s-8a6036242" }
//   ];

//   const treasurers: TeamMember[] = [
//     { name: "Hariprashaad S R", position: "Treasurer", image: "hari.png", linkedin: "https://www.linkedin.com/in/hariprashaadsr-off/" },
//     { name: "Harini R", position: "Treasurer", image: "Harini R.jpg", linkedin: "https://www.linkedin.com/in/harini-renganathan-681655258" }
//   ];

//   const webDevelopers: TeamMember[] = [
//     { name: "Chellappan R", position: "Web Developer", image: "Chellappan R.JPG", linkedin: "https://www.linkedin.com/in/chellappan-ramachandran-ba85a1257/" },
//     { name: "Praveen K", position: "Web Developer", image: "Praveen.jpg", linkedin: "https://www.linkedin.com/in/praveen-k2004/" }
//   ];

//   const mediaTeam: TeamMember[] = [
//     { name: "Naaga Dheva Dharshan N", position: "Media Team", image: "Naaga Dheva Dharshan.jpeg", linkedin: "https://www.linkedin.com/in/naagadhevadharshann/" },
//     { name: "Hemanathan", position: "Media Team", image: "Hemanathan.jpg", linkedin: "https://www.linkedin.com/in/r-hemanathan-a5a504257" },
//     { name: "Gokul J", position: "Media Team", image: "Gokul J.jpg" }
//   ];

//   return (
//     <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-black text-white animate-bg-flicker">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-neon animate-glow-red uppercase tracking-wide animate-text-pulse">
//             MEET THE TEAM
//           </h1>
//           <div className="w-24 h-1 bg-red-500 mx-auto animate-expand-line-fast"></div>
//         </div>
//         <TeamSection title="KEY PERSONS" members={keyPersons} />
//         <TeamSection title="STAFF CO-ORDINATORS" members={staffCoordinators} /> 
//         <TeamSection title="OVERALL CO-ORDINATORS" members={overallCoordinators} />
//         <TeamSection title="SECRETARIES" members={secretaries} />
//         <TeamSection title="TREASURERS" members={treasurers} />
//         <TeamSection title="WEB DEVELOPERS" members={webDevelopers} />
//         <TeamSection title="MEDIA TEAM" members={mediaTeam} />
//       </div>
//     </div>
//   );
// };

// export default OrganizersPage;



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
    <h2 className="text-3xl font-bold text-red-600 text-center mb-8 drop-shadow-neon-red uppercase tracking-wider">
      {title}
    </h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-black rounded-lg w-80 sm:w-80 md:w-80 lg:w-96 xl:w-86 border border-red-500 hover:border-red-700 transition-all duration-300 transform hover:-translate-y-3 shadow-red-neon hover:shadow-red-neon-lg hover:scale-105"
        >
          <div className="p-6 flex flex-col items-center text-center">
            <div className="group relative w-36 h-36">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-red-600 shadow-red-neon">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Linkedin 
                      className="text-red-500 hover:text-red-400 transform hover:scale-125 transition-all duration-200" 
                      size={36}
                    />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-red-500 mt-4 mb-1 drop-shadow-neon-red">
              {member.name}
            </h3>
            <p className="text-gray-400">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OrganizersPage: React.FC = () => {
  const keyPersons: TeamMember[] = [
    { name: "Dr. Sai Prakash Leomuthu", position: "CEO", image: "sairam_ceo.png", linkedin: "https://www.linkedin.com/in/sairamceo/" },
    { name: "Dr. J Raja", position: "Principal", image: "principal.jpg", linkedin: "https://www.linkedin.com/in/raja-j-32b44164/" },
    { name: "Dr. Swagata Sarkar", position: "HOD", image: "1591960457895.jpeg", linkedin: "https://www.linkedin.com/in/swagatabsarkar/" }
  ];
    
  const staffCoordinators: TeamMember[] = [
    { name: "Mrs.", position: "AI-DS", image: "Preethi Ma'am.jpg" }
  ];

  const overallCoordinators: TeamMember[] = [
    { name: "Prabhu S", position: "Chairperson", image: "Pradeep.jpg", linkedin: "https://www.linkedin.com/in/pradeeptechno/" },
    { name: "Susharshan B", position: "Vice Chairperson", image: "Tharushi.jpg", linkedin: "https://www.linkedin.com/in/tharushi-s-s" }
  ];

  const secretaries: TeamMember[] = [
    { name: " S", position: "Secretary", image: "Surya.jpg" },
    { name: " S", position: "Secretary", image: "Egadharshan.jpg", linkedin: "https://www.linkedin.com/in/egadarshan-s-8a6036242" }
  ];

  const treasurers: TeamMember[] = [
    { name: "R", position: "Treasurer", image: "hari.png", linkedin: "https://www.linkedin.com/in/hariprashaadsr-off/" },
    { name: "R", position: "Treasurer", image: "Harini R.jpg", linkedin: "https://www.linkedin.com/in/harini-renganathan-681655258" }
  ];

  const webDevelopers: TeamMember[] = [
    { name: "Aravind", position: "Web Developer", image: "Chellappan R.JPG", linkedin: "https://www.linkedin.com/in/chellappan-ramachandran-ba85a1257/" },
    { name: "Robin", position: "Web Developer", image: "Praveen.jpg", linkedin: "https://www.linkedin.com/in/praveen-k2004/" }
  ];

  const mediaTeam: TeamMember[] = [
    { name: "N", position: "Media Team", image: "Naaga Dheva Dharshan.jpeg", linkedin: "https://www.linkedin.com/in/naagadhevadharshann/" },
    { name: "H", position: "Media Team", image: "Hemanathan.jpg", linkedin: "https://www.linkedin.com/in/r-hemanathan-a5a504257" },
    { name: "J", position: "Media Team", image: "Gokul J.jpg" }
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-black text-white animate-bg-flicker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-neon animate-glow-red uppercase tracking-wide animate-text-pulse">
            MEET THE TEAM
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto animate-expand-line-fast"></div>
        </div>
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
