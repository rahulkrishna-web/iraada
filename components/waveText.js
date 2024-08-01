"use client"
import { useEffect } from 'react';

const WaveText = () => {
  useEffect(() => {
    const handleScroll = () => {
      const waveText = document.querySelector('.wave-text');
      const scrollPosition = window.scrollY;
      waveText.style.transform = `translateX(${scrollPosition}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="160px" viewBox="0 0 1098.72 89.55">
        <path id="curve" fill="transparent" d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"></path>
        
    </svg>
    </div>
  );
};

export default WaveText;
