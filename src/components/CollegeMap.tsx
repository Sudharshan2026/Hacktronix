import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MapLocation: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle intersection observer to trigger animations when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Handle map loading
  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  return (
    <section 
      ref={containerRef}
      id="location" 
      className="w-full py-24 bg-gradient-to-b from-[#f8f8fc] to-[#f0f0f4] dark:from-[#0c0c10] dark:to-[#14141a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-black/80 dark:text-white/80 bg-black/5 dark:bg-white/5 rounded-full mb-3">
              LOCATION
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Find Us Here
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 text-balance"
          >
            Visit us at <span className="font-medium">Sri Sairam Engineering College</span>, 
            the venue for <span className="font-medium">Hacktronix 1.0</span>. 
            Navigate using the interactive map below.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Map loading overlay */}
          {!isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Loading map...</p>
              </div>
            </div>
          )}

          {/* Fancy decorative elements */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-100 dark:bg-blue-800/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-100 dark:bg-purple-800/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten"></div>
          
          <div className="relative lg:flex items-stretch overflow-hidden">
            {/* Map information panel */}
            <div className="lg:w-1/3 bg-white/70 dark:bg-black/70 backdrop-blur-lg p-8 lg:p-10 z-10">
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Sri Sairam Engineering College<br />
                    West Tambaram, Chennai - 600044<br />
                    Tamil Nadu, India
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="https://maps.google.com/?q=Sri+Sairam+Engineering+College+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium transition-all hover:bg-black/80 dark:hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map container */}
            <div className="lg:w-2/3 h-[500px] lg:h-auto relative">
              <iframe 
                ref={mapRef}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.181780386284!2d80.05483217484118!3d12.960217087354076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1742156150816!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={handleMapLoad}
              ></iframe>
              
              {/* Pin animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="relative">
                  <div className="w-6 h-6 bg-red-500 rounded-full animate-map-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Map overlay for enhanced aesthetic */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.1)]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapLocation;
