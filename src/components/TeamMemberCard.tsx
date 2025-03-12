
import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  index: number;
}

const TeamMemberCard = ({
  name,
  position,
  image,
  linkedin,
  index
}: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate staggered animation delay based on index
  const animationDelay = `${0.1 + index * 0.05}s`;

  return (
    <div 
      className={cn(
        "bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-red-900/30",
        "transition-all duration-500 animate-fade-in opacity-0",
        "hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20",
        "transform hover:-translate-y-2",
        "w-full max-w-xs mx-auto" // Fixed width with auto margins for centering
      )}
      style={{
        animationDelay
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative w-28 h-28 mb-6">
          <div className={cn(
            "absolute inset-0 rounded-full overflow-hidden",
            "border-4 border-red-600/30 shadow-lg shadow-red-900/20",
            isHovered && "animate-pulse-glow"
          )}>
            <div className="w-full h-full overflow-hidden rounded-full">
              <img 
                src={image} 
                alt={name} 
                className={cn(
                  "w-full h-full object-cover",
                  "transition-transform duration-700 ease-in-out",
                  isHovered ? "scale-110" : "scale-100"
                )} 
              />
            </div>
            
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "absolute inset-0 bg-black/60 flex items-center justify-center",
                  "transition-all duration-300 ease-in-out",
                  isHovered ? "opacity-100" : "opacity-0"
                )} 
                aria-label={`LinkedIn profile of ${name}`}
              >
                <div className="transform transition-transform duration-300 hover:scale-110">
                  <Linkedin className="text-red-500 hover:text-red-400" size={28} />
                </div>
              </a>
            )}
          </div>
          
          {/* Decorative element - orbital ring */}
          <div className={cn(
            "absolute -inset-3 border border-red-500/20 rounded-full",
            "transition-opacity duration-500",
            isHovered ? "opacity-100 animate-rotate-slow" : "opacity-0"
          )}></div>
        </div>
        
        <h3 className={cn(
          "text-xl font-bold text-red-400 mb-1",
          "transform transition-transform duration-300",
          isHovered && "translate-y-[-4px]"
        )}>
          {name}
        </h3>
        
        <p className={cn(
          "text-gray-400",
          "transform transition-transform duration-300",
          isHovered && "translate-y-[-2px]"
        )}>
          {position}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
