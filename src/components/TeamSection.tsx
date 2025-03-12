
import React from 'react';
import TeamMemberCard from './TeamMemberCard';

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

const TeamSection = ({ title, members }: TeamSectionProps) => {
  // Determine layout class based on number of members
  const getLayoutClass = () => {
    const count = members.length;
    
    if (count === 1) {
      return "flex justify-center"; // Center single card
    } else if (count === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"; // Two cards side by side on medium screens
    } else if (count === 3) {
      return "flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"; // Three cards in a row, wrapped on smaller screens
    } else {
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto"; // Responsive grid for 4+ cards
    }
  };

  return (
    <div className="mb-16">
      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          {title}
        </h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
      </div>
      
      <div className={getLayoutClass()}>
        {members.map((member, index) => (
          <TeamMemberCard
            key={index}
            index={index}
            name={member.name}
            position={member.position}
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
