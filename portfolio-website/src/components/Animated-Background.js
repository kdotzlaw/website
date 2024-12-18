import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1818] to-[#2D2A32] z-0">
        <div className="absolute w-96 h-96 bg-[#716F81] rounded-full blur-3xl opacity-10 animate-blob top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-[#4A4453] rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000 top-1/2 right-1/4"></div>
        <div className="absolute w-96 h-96 bg-[#2D2A32] rounded-full blur-3xl opacity-10 animate-blob animation-delay-4000 bottom-0 right-0"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;