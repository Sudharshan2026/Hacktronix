import React, { useEffect, useState } from "react";
import baffle from "baffle";
import dragon from "./assets/dragon_background.mp4"
import brochure from "./assets/hackatronix brochure.pdf";
import { UiverseButton, GlowingButton } from "./Buttons";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Hero: React.FC = () => {
  const targetDate: number = new Date("April 5, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const now: number = new Date().getTime();
    const difference: number = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const glitchEffect = baffle(".glitch-text", {
      characters: "▓▒░█ <>/[]{}".split(""),
      speed: 50,
    });

    glitchEffect.start().reveal(2000, 800);

    setInterval(() => {
      glitchEffect.start().reveal(2000, 800);
    }, 5000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onPlay={() => console.log("Video is playing!")}
        onError={(e) => console.error("Video Error:", e)}
      >
        <source src={dragon} type="video/mp4" />
      </video>


      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Glitch Effect Title */}
            <div className="mb-10">
              <h1 className="glitch-text font-bold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                HackTronix 1.0
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              A 24-hour hackathon exploring the upside-down world of technology
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              <TimeBlock value={timeLeft.days} label="Days" />
              <TimeBlock value={timeLeft.hours} label="Hours" />
              <TimeBlock value={timeLeft.minutes} label="Minutes" />
              <TimeBlock value={timeLeft.seconds} label="Seconds" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowingButton text="Register Now" href="https://forms.gle/YOUR_GOOGLE_FORM_LINK" />
              <UiverseButton text="Brouchre" href={brochure} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimeBlockProps {
  value: number;
  label: string;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ value, label }) => (
  <div className="bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 flex flex-col items-center justify-center">
    <span className="text-3xl md:text-4xl font-bold text-white">{value}</span>
    <span className="text-sm text-gray-400">{label}</span>
  </div>
);

export default Hero;
