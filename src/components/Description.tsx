import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Description = () => {
  return (
    <section id="event" className="py-16 bg-gray-950 relative">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-950 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              About Hacktronix
            </span>
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-900/20 rounded-xl p-6 md:p-8 shadow-xl shadow-red-900/5 mb-12">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hacktronix is a 24-hour hackathon held at Sri Sairam Engineering College on April 16–17, 2025. 
              It aims to bring together students, professionals, and startups to develop cutting-edge AI and 
              IoT-based solutions for real-world industrial and workforce-related challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center gap-3">
                <Calendar className="text-red-500" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="font-medium">April 16-17, 2025</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="text-red-500" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="font-medium">24 Hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Sri Sairam Engineering College</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard 
              title="Innovative Challenges" 
              description="Tackle real-world problems in Cybersecurity, AI/ML, Blockchain, and IoT domains with creative solutions."
            />
            <FeatureCard 
              title="Networking Opportunities" 
              description="Connect with industry professionals, mentors, and like-minded innovators from across the country."
            />
            <FeatureCard 
              title="Learning Experience" 
              description="Gain hands-on experience with cutting-edge technologies and enhance your problem-solving skills."
            />
            <FeatureCard 
              title="Exciting Prizes" 
              description="Win attractive prizes and potential internship opportunities with our sponsor companies."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-900/30 backdrop-blur-sm border border-red-900/10 rounded-lg p-6 hover:border-red-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/5 group">
    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-500 transition-colors">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Description;