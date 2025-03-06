import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-red-900/30 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Hacktronix 1.0</h3>
              <p className="text-gray-400 mb-4">
                A 24-hour hackathon exploring the upside down world of technology.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Linkedin size={18} />} />
                <SocialIcon icon={<Github size={18} />} />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#event" className="hover:text-red-500 transition-colors">Event Details</a></li>
                <li><a href="#organizer" className="hover:text-red-500 transition-colors">Organizers</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Sponsors</h3>
              <div className="grid grid-cols-3 gap-4">
                <SponsorLogo name="Tata TCS" />
                <SponsorLogo name="Jio" />
                <SponsorLogo name="BlackRock" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>© 2025 Hacktronix 1.0 | Sri Sairam Engineering College</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
    {icon}
  </a>
);

const SponsorLogo = ({ name }) => (
  <div className="bg-gray-800/50 rounded p-2 flex items-center justify-center h-12">
    <span className="text-xs text-gray-400 font-medium">{name}</span>
  </div>
);

export default Footer;