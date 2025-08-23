import React, { useState } from 'react';

const IfYouWereSection = ({ data }) => {
  const [flippedCards, setFlippedCards] = useState({});

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gradient-text">
          If You Were...
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="h-40 cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() =>
                setFlippedCards((prev) => ({ ...prev, [i]: !prev[i] }))
              }
            >
              <div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards[i] ? "rotateY(180deg)" : "rotateY(0)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <p className="text-rose-600 font-semibold">If you were</p>
                  <p className="text-rose-500">{item.category}...</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 flex items-center justify-center text-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-gray-700 text-sm">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-rose-400">
          Click cards to reveal answers 💕
        </p>
      </div>
    </section>
  );
};

export default IfYouWereSection;