import { useEffect, useRef, useState } from "react";

export function TimelineSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (!timelineRef.current) {
      console.warn("⏳ timelineRef.current is NULL! Retrying...");
      return;
    }

    console.log("✅ timelineRef Found:", timelineRef.current);
    const timelineItems = timelineRef.current.querySelectorAll(".timeline-item");
    if (timelineItems.length === 0) return;

    const firstItem = timelineItems[0] as HTMLElement;
    const lastItem = timelineItems[timelineItems.length - 1] as HTMLElement;
    const firstOffset = firstItem.offsetTop + firstItem.clientHeight / 2;
    const lastOffset = lastItem.offsetTop + lastItem.clientHeight / 2;
    setLineHeight(lastOffset - firstOffset + 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const timelineEvents = [
    { time: "March 11", title: "HackTronix 1.0 Launch", description: "Official launch of HackTronix 1.0", date: "March 11, 2025" },
    { time: "March 12", title: "Problem Statements Unleashed", description: "Kickoff and problem statement reveal", date: "March 12, 2025" },
    { time: "March 13", title: "Registration Opens", description: "Registration for HackTronix begins", date: "March 13, 2025" },
    { time: "March 13", title: "Start of Idea Submission", description: "Participants start submitting their ideas", date: "March 13, 2025" },
    { time: "April 4", title: "Idea Submission Deadline", description: "Round 1 ends at 11:59 PM", date: "April 4, 2025" },
    { time: "April 5", title: "Finalists Announcement", description: "Top 30 teams are announced", date: "April 5, 2025" },
    { time: "April 6 (8:00 PM)", title: "Round 2 Registration Starts", description: "Registration for the next round begins", date: "April 6, 2025" },
    { time: "April 7-8", title: "Grand Finale", description: "Final round of HackTronix 1.0. Buckle up!", date: "April 7-8, 2025" },
  ];

  return (
    <section id="timeline" className="relative py-16 overflow-hidden">

      <div className="absolute inset-0 z-0"></div>

      {/* Timeline Content */}
      <div className="max-w-4xl mx-auto relative z-10 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
          Event Timeline
        </h2>

        {/* Timeline Line */}
        <div
          className="eventline absolute left-6 sm:left-10 md:left-1/2 w-1 bg-gradient-to-b from-red-600 to-orange-500 transform -translate-x-1/2"
          style={{ height: `${lineHeight}px`, top: "100px" }}
        ></div>

        {/* Timeline Events */}
        <div ref={timelineRef} className="relative space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`eventCards timeline-item flex items-center w-full opacity-0 translate-y-8 transition-all duration-700 ease-out transform ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Circle Indicator */}
              <div className="circle absolute left-6 sm:left-10 md:left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 border-4 border-orange-500 bg-red-900 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full animate-pulse"></div>
              </div>

              {/* Event Card - Custom Media Queries */}
              <div
                className={`w-full md:w-2/5 max-w-[300px] md:max-w-none bg-black/40 border border-red-700 text-white p-4 md:p-6 rounded-2xl shadow-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:border-orange-400 hover:shadow-orange-500/50 ${index % 2 === 0 ? "md:ml-16" : "md:mr-16"
                  }`}
              >
                <p className="text-xs md:text-sm font-semibold text-orange-400">{event.time} | {event.date}</p>
                <h3 className="text-lg md:text-xl font-bold text-red-400">{event.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tailwind Media Queries */}
      <style>{`
        @media (max-width: 640px) {
          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .eventCards {
            padding-left:5vw;
          }
          .circle {
            display: none;
          }
          .eventline {
            display: none;
          }
        }
        @media (min-width: 640px) and (max-width: 1024px) {
          .timeline-item {
            flex-direction: row !important;
          }
          .timeline-item:nth-child(even) {
            flex-direction: row-reverse !important;
          }
        }
        @media (min-width: 1024px) {
          .timeline-item {
            flex-direction: row !important;
          }
          .timeline-item:nth-child(even) {
            flex-direction: row-reverse !important;
          }
        }
      `}</style>
    </section>
  );
}
