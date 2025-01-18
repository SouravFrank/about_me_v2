import React, { useEffect, useState } from 'react';

interface HexagonPreloaderProps {
  isDark: boolean;
}

const HexagonPreloader: React.FC<HexagonPreloaderProps> = ({ isDark }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10; // Increment progress
        } else {
          clearInterval(interval);
          return prev; // Stop at 100%
        }
      });
    }, 150); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-200'} z-50`}>
      <div className="hexagon" aria-label="Animated hexagonal ripples">
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
      </div>
      <p className={`text-2xl mt-4 loading-text ${isDark ? 'text-gray-300' : 'text-gray-800'}`} aria-label="Loading">Loading...</p>
      
      {/* Centered Small Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
        
        :root {
          --bg: #e3e4e8;
          --fg: #17181c;
          --dur: 8s;
        }
        .loading-text {
          font: bold 1em/1.5 "Comfortaa", sans-serif;
        }
        .hexagon {
          margin-bottom: 1.5em;
          overflow: hidden;
          position: relative;
          width: 15em;
          height: 15em;
        }
        .hexagon__group, .hexagon__sector, .hexagon__sector:before, .hexagon__sector:after {
          position: absolute;
        }
        .hexagon__group {
          width: 100%;
          height: 100%;
        }
        .hexagon__group:nth-child(2) .hexagon__sector,
        .hexagon__group:nth-child(2) .hexagon__sector:before,
        .hexagon__group:nth-child(2) .hexagon__sector:after {
          animation-delay: calc(var(--dur) * -1/6);
        }
        .hexagon__group:nth-child(3) .hexagon__sector,
        .hexagon__group:nth-child(3) .hexagon__sector:before,
        .hexagon__group:nth-child(3) .hexagon__sector:after {
          animation-delay: calc(var(--dur) * -2/6);
        }
        .hexagon__group:nth-child(4) .hexagon__sector,
        .hexagon__group:nth-child(4) .hexagon__sector:before,
        .hexagon__group:nth-child(4) .hexagon__sector:after {
          animation-delay: calc(var(--dur) * -3/6);
        }
        .hexagon__group:nth-child(5) .hexagon__sector,
        .hexagon__group:nth-child(5) .hexagon__sector:before,
        .hexagon__group:nth-child(5) .hexagon__sector:after {
          animation-delay: calc(var(--dur) * -4/6);
        }
        .hexagon__group:nth-child(6) .hexagon__sector,
        .hexagon__group:nth-child(6) .hexagon__sector:before,
        .hexagon__group:nth-child(6) .hexagon__sector:after {
          animation-delay: calc(var(--dur) * -5/6);
        }
        .hexagon__group:nth-child(odd) {
          transform: rotate(30deg);
        }
        .hexagon__sector, .hexagon__sector:before, .hexagon__sector:after {
          animation-duration: var(--dur);
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          width: 0.2em;
          height: 0.2em;
        }
        .hexagon__sector {
          animation-name: moveOut1;
          top: calc(50% - 0.1em);
          left: calc(50% - 0.1em);
          background-color: ${isDark ? '#ffffff' : '#000000'};
        }
        .hexagon__sector:nth-child(2) {
          animation-name: moveOut2;
        }
        .hexagon__sector:nth-child(3) {
          animation-name: moveOut3;
        }
        .hexagon__sector:nth-child(4) {
          animation-name: moveOut4;
        }
        .hexagon__sector:nth-child(5) {
          animation-name: moveOut5;
        }
        .hexagon__sector:nth-child(6) {
          animation-name: moveOut6;
        }
        .hexagon__sector:before, .hexagon__sector:after {
          animation-name: ripple;
          background-color: ${isDark ? '#ffffff' : '#000000'};
          border-radius: 0.1em;
          content: "";
          display: block;
          top: 0;
          left: 0;
          transform-origin: 0.1em 0.1em;
        }
        .hexagon__sector:before {
          transform: rotate(-30deg);
        }
        .hexagon__sector:after {
          transform: rotate(-150deg);
        }
        @keyframes moveOut1 {
          from { transform: translateY(0) scale(0); }
          3% { transform: translateY(0.2em) scale(1); }
          97% { transform: translateY(7.3em) scale(1); }
          to { transform: translateY(7.5em) scale(0); }
        }
        @keyframes moveOut2 {
          from { transform: rotate(60deg) translateY(0) scale(0); }
          3% { transform: rotate(60deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(60deg) translateY(7.3em) scale(1); }
          to { transform: rotate(60deg) translateY(7.5em) scale(0); }
        }
        @keyframes moveOut3 {
          from { transform: rotate(120deg) translateY(0) scale(0); }
          3% { transform: rotate(120deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(120deg) translateY(7.3em) scale(1); }
          to { transform: rotate(120deg) translateY(7.5em) scale(0); }
        }
        @keyframes moveOut4 {
          from { transform: rotate(180deg) translateY(0) scale(0); }
          3% { transform: rotate(180deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(180deg) translateY(7.3em) scale(1); }
          to { transform: rotate(180deg) translateY(7.5em) scale(0); }
        }
        @keyframes moveOut5 {
          from { transform: rotate(240deg) translateY(0) scale(0); }
          3% { transform: rotate(240deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(240deg) translateY(7.3em) scale(1); }
          to { transform: rotate(240deg) translateY(7.5em) scale(0); }
        }
        @keyframes moveOut6 {
          from { transform: rotate(300deg) translateY(0) scale(0); }
          3% { transform: rotate(300deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(300deg) translateY(7.3em) scale(1); }
          to { transform: rotate(300deg) translateY(7.5em) scale(0); }
        }
        @keyframes ripple {
          from, to { width: 0.2em; }
          33% { width: 2.4em; }
        }
        .progress-bar-container {
          width: 50%; /* Adjust width as needed */
          max-width: 300px; /* Maximum width for larger screens */
          height: 0.4em; /* Smaller height */
          background-color: ${isDark ? '#444' : '#ddd'};
          border-radius: 0.25em;
          margin-top: 1em;
          overflow: hidden;
          box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: center; /* Center the progress bar */
        }
        .progress-bar {
          height: 100%;
          background-color: ${isDark ? '#000000' : '#000000'}; /* Black color for both modes */
          transition: width 0.4s ease-in-out; /* Smooth transition */
          border-radius: 0.25em;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default HexagonPreloader;