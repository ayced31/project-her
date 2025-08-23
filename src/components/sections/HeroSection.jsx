import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';

const HeroSection = ({ config, currentTime }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const getTimeGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return config.greetings.morning;
    if (hour < 17) return config.greetings.afternoon;
    if (hour < 21) return config.greetings.evening;
    return config.greetings.night;
  };

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          <Heart
            className="w-3 h-3 text-pink-300 opacity-20"
            fill="currentColor"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingParticles />

      {/* Time-sensitive greeting in top-left corner */}
      <div className="absolute top-6 left-6 z-20">
        <div className="glass-card px-6 py-3 rounded-2xl shadow-lg">
          <p className="text-rose-500 font-medium">{getTimeGreeting()}</p>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 105, 180, 0.3), transparent 50%)`,
        }}
      />

      <div className="relative z-10 text-center px-6">
        <div className="mb-8 animate-pulse">
          <Sparkles className="w-8 h-8 mx-auto text-pink-400" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-4 gradient-text break-words">
          {config.hero.title}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-rose-600 mb-8 font-light tracking-wide typewriter break-words px-4">
          {config.hero.subtitle}
        </p>

        <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-medium transform transition-all hover:scale-105 hover:shadow-2xl">
          <span className="relative z-10">{config.hero.buttonText}</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
        </button>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 mx-auto text-pink-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;