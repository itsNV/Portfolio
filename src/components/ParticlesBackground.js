import React from 'react';

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      {/* CSS-based particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`particle particle-${i}`}
            style={{
              '--delay': `${i * 0.5}s`,
              '--duration': `${3 + i % 3}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticlesBackground;
