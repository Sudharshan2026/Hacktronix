import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { renderCanvas } from './ui/canvas';
import { GooeyText } from './ui/gooey-text-morphing';

const Hero = () => {
  const targetDate = new Date('April 5, 2025 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    renderCanvas();

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <canvas
        className="absolute inset-0 pointer-events-none"
        id="canvas"
      ></canvas>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <GooeyText
                texts={["HackerTronix 1.0", "Hack The Future", "Code The Unknown", "Build Tomorrow"]}
                morphTime={4}
                cooldownTime={0.15}
                className="font-bold"
                textClassName="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
              />
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              A 24-hour hackathon exploring the upside down world of technology
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              <TimeBlock value={timeLeft.days} label="Days" />
              <TimeBlock value={timeLeft.hours} label="Hours" />
              <TimeBlock value={timeLeft.minutes} label="Minutes" />
              <TimeBlock value={timeLeft.seconds} label="Seconds" />
            </div>
            
            <a 
              href="https://sudharshan.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-red-600/20"
            >
              Register Now <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeBlock = ({ value, label }) => (
  <div className="bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 flex flex-col items-center justify-center">
    <span className="text-3xl md:text-4xl font-bold text-white">{value}</span>
    <span className="text-sm text-gray-400">{label}</span>
  </div>
);

export default Hero;