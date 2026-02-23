import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  "https://docs.google.com/drawings/d/e/2PACX-1vQ_5a_dzLEm-oEu88RN4u_4lgqkf-u6Us5myF6mm7nkUdqWAIasK8NBvCsoyVSi2wSTFcpwatGkNyvP/pub?w=1440&h=1080",
  "https://docs.google.com/drawings/d/e/2PACX-1vSFhXAeyNVF-_oZrLgv5QdaGSQxQj4vR97zj6ysMKXPRgmLSYfZlLfUai11Erp7Ys4G5ZAI7ZHSfN-W/pub?w=1440&h=1080",
  "https://docs.google.com/drawings/d/e/2PACX-1vS6r_oU6H3Qk4ElExR7pqbltO5WJ7HhzpyXwelgG22mUaQODyJ1tMAUrRiXMMdXgB7yRE6lKkpkb4_u/pub?w=1440&h=1080"
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#EAE8E4] relative pt-24 md:pt-32 pb-20 px-6 md:px-12">
      
      {/* Hero Image Slider */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-16 md:mb-24 relative">
        {HERO_IMAGES.map((image, index) => (
          <div 
            key={image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Interior Hero ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Intro Text Section (Split Layout) */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Left: Main Heading */}
          <div className="max-w-xl">
            <h1 className="text-[#35473a] text-3xl md:text-4xl lg:text-5xl font-light leading-snug tracking-wide font-serif italic">
              全方位室內設計工作室，<br/>
              <span className="not-italic">打造永恆的居住空間。</span>
            </h1>
          </div>

          {/* Right: Body Text */}
          <div className="pt-2">
            <p className="text-[#26190c]/80 text-sm md:text-base font-light leading-loose tracking-wide text-justify">
              唯觀相信，家是心靈的容器。我們透過減法設計，將自然光影引入室內，創造出舒適、自在且具備溫度的生活場域。在每一個案場中，我們試圖尋找材質最純粹的語言，讓空間不只是視覺的堆疊，而是能隨著時間推移，與居住者共同生長的有機體。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};