import React from 'react';
import { Newspaper } from 'lucide-react';

const NewspaperSection = ({ config, data, currentTime }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="border-b-4 border-double border-rose-300 pb-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Newspaper className="w-6 h-6 text-rose-600" />
              <h1 className="text-4xl md:text-5xl font-serif text-rose-600">
                The Daily {config.herName}
              </h1>
              <Newspaper className="w-6 h-6 text-rose-600" />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>
                Vol.{" "}
                {Math.floor(
                  (currentTime - new Date(config.dates.firstMet)) / 30
                )}{" "}
                • No. {currentTime.getDate()}
              </span>
              <span>
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>Price: Priceless</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {data.headlines.map((headline, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {headline.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {headline.content}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t-2 border-rose-200">
            {data.sections.map((section, i) => (
              <div key={i}>
                <h3 className="font-bold text-rose-600 mb-2">
                  {section.icon} {section.title}
                </h3>
                <p className="text-sm text-gray-600">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewspaperSection;