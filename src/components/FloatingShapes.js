import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating cube */}
      <div 
        className="absolute top-1/4 right-1/4 w-20 h-20 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
          animation: 'rotate3d 20s linear infinite, float 6s ease-in-out infinite'
        }}
      />
      
      {/* Medium floating sphere */}
      <div 
        className="absolute top-1/2 left-1/6 w-16 h-16 rounded-full opacity-10"
        style={{
          background: 'linear-gradient(45deg, #ffd700, #ffb347)',
          animation: 'floatReverse 8s ease-in-out infinite'
        }}
      />
      
      {/* Small floating pyramid */}
      <div 
        className="absolute bottom-1/4 right-1/6 w-12 h-12 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #ff6b35, #ffd700)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float 10s ease-in-out infinite'
        }}
      />
      
      {/* Floating ring */}
      <div 
        className="absolute top-3/4 left-1/4 w-24 h-24 rounded-full border-4 opacity-10"
        style={{
          borderColor: '#ff6b35',
          animation: 'rotate3d 15s linear infinite, floatReverse 7s ease-in-out infinite'
        }}
      />
      
      {/* Multiple small dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-20"
          style={{
            background: i % 2 === 0 ? '#ff6b35' : '#ffd700',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;