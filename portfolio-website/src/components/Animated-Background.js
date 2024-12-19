import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#2D2A32]">
      <div className="relative h-full w-full">
        {/* Large central blob */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-full h-full bg-[#B97375] rounded-full blur-3xl opacity-20 animate-blob"></div>
        </div>

        {/* Upper left corner */}
        <div className="absolute top-0 left-0 w-64 h-64">
          <div className="absolute w-full h-full bg-[#9A9483] rounded-full blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        {/* Upper right corner */}
        <div className="absolute top-0 right-0 w-72 h-72">
          <div className="absolute w-full h-full bg-[#716F81] rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Lower left corner */}
        <div className="absolute bottom-0 left-0 w-80 h-80">
          <div className="absolute w-full h-full bg-[#B97375] rounded-full blur-2xl opacity-20 animate-blob animation-delay-3000"></div>
        </div>

        {/* Lower right corner */}
        <div className="absolute bottom-0 right-0 w-72 h-72">
          <div className="absolute w-full h-full bg-[#9A9483] rounded-full blur-3xl opacity-20 animate-blob animation-delay-5000"></div>
        </div>

        {/* Additional floating blobs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48">
          <div className="absolute w-full h-full bg-[#716F81] rounded-full blur-2xl opacity-15 animate-blob animation-delay-1000"></div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56">
          <div className="absolute w-full h-full bg-[#B97375] rounded-full blur-2xl opacity-15 animate-blob animation-delay-6000"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;

/*const AnimatedBackground = () => {
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
*/