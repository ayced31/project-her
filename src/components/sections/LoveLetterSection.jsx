import React from 'react';
import { Star, Heart } from 'lucide-react';

const LoveLetterSection = ({ letterData }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <Star className="w-8 h-8 mx-auto mb-8 text-pink-400" />
        <h2 className="text-3xl md:text-4xl font-serif mb-8 gradient-text">
          {letterData.title}
        </h2>
        <div className="glass-card rounded-3xl p-12">
          <p className="text-lg leading-relaxed text-gray-700 italic">
            "{letterData.message}"
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                className="w-5 h-5 text-rose-400 heartbeat"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;