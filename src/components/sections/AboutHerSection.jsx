import React from 'react';
import { Sparkles } from 'lucide-react';
import PhotoWithFallback from '../PhotoWithFallback';

const AboutHerSection = ({ aboutHer }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-4 gradient-text break-words px-4">
          The Amazing Woman You Are
        </h2>
        <p className="text-center text-rose-500 mb-16 text-lg">
          Everything that makes you extraordinary
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {aboutHer.qualities.map((quality, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 transform hover:scale-105 transition-all"
              >
                <h3 className="text-2xl font-semibold text-rose-600 mb-3">
                  {quality.title}
                </h3>
                <p className="text-gray-600">{quality.description}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden">
              <PhotoWithFallback
                src="/photos/profile.jpg"
                fallback={<Sparkles className="w-24 h-24 text-white/70" />}
                alt="Beautiful You"
                className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300"
              />
            </div>
            <div
              className="absolute -inset-4 rounded-full border-2 border-pink-200 border-dashed animate-spin"
              style={{ animationDuration: "20s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHerSection;