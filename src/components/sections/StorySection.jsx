import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import PhotoWithFallback from '../PhotoWithFallback';

const StorySection = ({ timeline }) => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-observe]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gradient-text">
          Our Beautiful Story
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-pink-200 via-rose-200 to-pink-200" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={i}
                data-observe
                id={`story-${i}`}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${
                  isVisible[`story-${i}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="flex-1">
                  <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart
                        className="w-5 h-5 text-rose-400 heartbeat"
                        fill="currentColor"
                      />
                      <span className="text-sm text-pink-500 font-medium">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-rose-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <p className="text-sm text-rose-400 italic">
                      "{item.memory}"
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center my-4 md:my-0">
                  <Heart
                    className="w-4 h-4 text-rose-400 heartbeat z-10"
                    fill="currentColor"
                  />
                  <div className="absolute w-8 h-8 bg-pink-200 rounded-full animate-ping" />
                </div>

                <div className="flex-1">
                  <div className="group relative aspect-video md:aspect-square glass-card rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all">
                    <PhotoWithFallback
                      src={item.photo}
                      fallback={item.fallback}
                      alt={item.title}
                      className="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm">Click to view memory</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;