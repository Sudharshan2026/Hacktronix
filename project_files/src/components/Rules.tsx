import React from 'react';
import { Shield } from 'lucide-react';

const Rules = () => {
  return (
    <section id="organizer" className="py-16 bg-gray-950 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-8">
            <Shield className="text-red-600" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                Rules & Regulations
              </span>
            </h2>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-900/20 rounded-xl p-6 md:p-8 shadow-xl shadow-red-900/5">
            <div className="max-h-80 overflow-y-auto pr-2 custom-scrollbar">
              <RuleItem number="01" title="Team Composition">
                Teams should consist of 2–4 members. Cross-college teams are allowed.
              </RuleItem>
              
              <RuleItem number="02" title="Registration Fee">
                Registration fee is ₹400 per team. This is non-refundable.
              </RuleItem>
              
              <RuleItem number="03" title="Domains">
                Projects must fall under one of these domains: Cybersecurity, AI/ML, Blockchain, or IoT.
              </RuleItem>
              
              <RuleItem number="04" title="Original Work">
                All submissions must be original work created during the hackathon. Pre-existing projects are not allowed.
              </RuleItem>
              
              <RuleItem number="05" title="Intellectual Property">
                Participants retain ownership of their intellectual property, but grant organizers the right to showcase their projects.
              </RuleItem>
              
              <RuleItem number="06" title="Code of Conduct">
                Participants must maintain professional behavior throughout the event. Any form of harassment or discrimination will result in immediate disqualification.
              </RuleItem>
              
              <RuleItem number="07" title="Judging Criteria">
                Projects will be judged based on innovation, technical complexity, practicality, presentation, and adherence to the chosen domain.
              </RuleItem>
              
              <RuleItem number="08" title="Resources">
                Participants must bring their own laptops and necessary equipment. Power outlets and internet will be provided.
              </RuleItem>
              
              <RuleItem number="09" title="Submission Deadline">
                All projects must be submitted by the designated deadline. Late submissions will not be accepted.
              </RuleItem>
              
              <RuleItem number="10" title="Organizer's Decision">
                The decision of the judges and organizers will be final and binding in all matters related to the hackathon.
              </RuleItem>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Organized by the Department of Artificial Intelligence and Data Science
            </p>
            <div className="inline-block bg-gray-900/50 backdrop-blur-sm border border-red-900/20 rounded-lg px-6 py-3">
              <h3 className="text-xl font-semibold text-white mb-2">Sri Sairam Engineering College</h3>
              <p className="text-gray-400 text-sm">West Tambaram, Chennai - 600044</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RuleItem = ({ number, title, children }) => (
  <div className="mb-6 border-b border-gray-800 pb-6 last:border-0 last:pb-0 last:mb-0">
    <div className="flex items-start gap-4">
      <div className="bg-red-900/20 text-red-500 font-bold rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{children}</p>
      </div>
    </div>
  </div>
);

export default Rules;