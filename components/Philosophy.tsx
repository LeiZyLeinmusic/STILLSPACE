import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-24 md:pb-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Visual - Asymmetric placement */}
          <div className="md:col-span-5 relative md:translate-y-12">
            <div className="relative overflow-hidden aspect-[3/4] group">
              <img 
                src="https://docs.google.com/drawings/d/e/2PACX-1vRPXKo1lyg2JC739WpTos-1UawiVRr1nx6U4TmhjIuGZaDMq0RXSTKTpohXgF28BZ5FSQVcs09fMgkz/pub?w=960&h=720" 
                alt="Texture detail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Decorative Border Frame */}
              <div className="absolute inset-4 border border-[#f9f8f4]/50 z-10"></div>
            </div>
            {/* Background Accent Box */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full bg-[#f9f8f4]"></div>
          </div>

          {/* Right Text Content */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="h-[1px] w-8 bg-[#ccb982]"></span>
              <span className="font-geo text-xs tracking-[0.2em] text-[#ccb982] uppercase">
                Brand Philosophy | 品牌理念
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#35473a] leading-normal tracking-wide font-light mb-8">
              不僅是設計，<br/>
              更是生活方式的延伸。
            </h3>

            <div className="space-y-6 text-[#26190c] font-light text-base md:text-lg leading-[2] tracking-wide text-justify md:text-left">
              <p>
                唯觀相信，家是心靈的容器。我們透過減法設計，將自然光影引入室內，創造出舒適、自在且具備溫度的生活場域。
              </p>
              <p>
                在每一個案場中，我們試圖尋找材質最純粹的語言，讓空間不只是視覺的堆疊，而是能隨著時間推移，與居住者共同生長的有機體。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};