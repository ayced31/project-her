import React from 'react';
import PhotoWithFallback from '../PhotoWithFallback';

const GallerySection = ({ photos }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-pink-50">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 gradient-text">
        Moments Captured in Time
      </h2>
      <p className="text-center text-rose-500 mb-16">
        Every photo tells our story
      </p>

      <div className="max-w-6xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((item, i) => (
            <div
              key={i}
              className={`${item.height} break-inside-avoid group relative glass-card rounded-2xl overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all`}
            >
              <PhotoWithFallback
                src={item.photo}
                fallback={item.icon}
                alt={item.label}
                className="absolute inset-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-medium">{item.label}</p>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;