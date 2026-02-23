import React from 'react';
import { Link } from 'react-router-dom';

interface ServicesProps {
  variant?: 'page' | 'section';
}

export const Services: React.FC<ServicesProps> = ({ variant = 'page' }) => {
  const isPage = variant === 'page';

  return (
    <div className={`w-full bg-[#EAE8E4] ${!isPage ? 'py-24' : ''}`}>
      
      {/* Hero Section - Page Only */}
      {isPage && (
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
          <img 
            src="https://docs.google.com/drawings/d/e/2PACX-1vTFB3hcEjDZJ7qedTXdCX1zmlDkv_XRtZy27Gct7PfnOlWkNj71jb3_O50QPrf76UQ6XOJE1oLx3oxi/pub?w=960&h=720" 
            alt="Services Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 flex items-center">
            <h1 className="text-white text-2xl md:text-3xl font-geo tracking-[0.2em] uppercase mr-6 whitespace-nowrap">
              Services
            </h1>
            <div className="h-[1px] bg-white w-full opacity-80"></div>
          </div>
        </section>
      )}

      {/* Services List Section */}
      <section className={`${isPage ? 'py-24' : ''} px-6 md:px-12 max-w-7xl mx-auto`}>
        {!isPage && (
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#35473a] mb-4">
              Services
            </h2>
            <div className="w-24 h-[1px] bg-[#35473a]/30"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Service 1 */}
          <div className="flex flex-col">
            <h2 className="text-[#35473a] text-xl md:text-2xl font-geo tracking-[0.15em] uppercase mb-2">
              全案設計服務
            </h2>
            <h3 className="text-[#35473a] font-serif italic text-lg md:text-xl mb-6">
              新成屋 / 中古屋 / 老屋翻新
            </h3>
            <p className="text-[#26190c]/80 font-light leading-relaxed mb-10 text-sm md:text-base">
              我們提供從概念發想、平面配置、3D模擬到工程施作的完整服務。不論是新成屋的空間規劃，或是老屋的結構補強與翻新，我們都以專業的態度，為您打造理想的居住環境。
            </p>
            <Link to="/contact" className="group flex items-center gap-4 text-[#35473a] text-sm tracking-[0.2em] uppercase font-geo hover:opacity-70 transition-opacity">
              諮詢服務
              <span className="w-12 h-[1px] bg-[#35473a] group-hover:w-16 transition-all duration-300"></span>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col">
            <h2 className="text-[#35473a] text-xl md:text-2xl font-geo tracking-[0.15em] uppercase mb-2">
              客變與軟裝諮詢
            </h2>
            <h3 className="text-[#35473a] font-serif italic text-lg md:text-xl mb-6">
              預售屋客變 / 軟裝配置
            </h3>
            <p className="text-[#26190c]/80 font-light leading-relaxed mb-10 text-sm md:text-base">
              針對預售屋提供客變規劃，協助您在建商施工階段調整格局與水電配置，節省日後裝修成本。同時提供軟裝佈置建議，透過家具、窗簾、燈飾的搭配，營造獨特的空間氛圍。
            </p>
            <Link to="/contact" className="group flex items-center gap-4 text-[#35473a] text-sm tracking-[0.2em] uppercase font-geo hover:opacity-70 transition-opacity">
              諮詢服務
              <span className="w-12 h-[1px] bg-[#35473a] group-hover:w-16 transition-all duration-300"></span>
            </Link>
          </div>

        </div>
      </section>

      {/* The Design Process Section - Page Only */}
      {isPage && (
        <section className="relative py-32 px-6 md:px-12 text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://docs.google.com/drawings/d/e/2PACX-1vRMNtZXNJkVLDez2Ws8pWp4DRxHwKq33E-5RGacgMAMSOJaw-FOCUK0HJdbygt3mgEb8il10q0E90cL/pub?w=960&h=720" 
              alt="Design Process Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#26190c]/60 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-center text-2xl md:text-3xl font-geo tracking-[0.15em] uppercase mb-20 md:mb-24">
              The Design Process
            </h2>

            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto gap-8 md:gap-12 pb-12 snap-x snap-mandatory scrollbar-custom -mx-6 px-[calc(50vw-140px)] md:mx-0 md:px-12 lg:px-24">
              {[
                {
                  id: '01',
                  title: '初步接洽',
                  description: ['了解業主需求及預算', '介紹設計流程與費用']
                },
                {
                  id: '02',
                  title: '現場丈量',
                  description: ['精確丈量並繪製平面圖樣', '拍照存檔作為設計之參考']
                },
                {
                  id: '03',
                  title: '設計提案',
                  description: ['依需求風格進行平面規劃', '平面配置細節討論與確認']
                },
                {
                  id: '04',
                  title: '簽訂設計合約',
                  description: ['平面設計圖確認定案', '簽訂合約並收取設計費用']
                },
                {
                  id: '05',
                  title: '圖面討論',
                  description: ['建材/材質/色彩搭配建議', '提供3D圖,展現設計樣貌', '編列細部工程預算書']
                },
                {
                  id: '06',
                  title: '簽訂工程合約',
                  description: ['提供各項工程細部估價單', '項目預算確定並簽訂工程合約', '工程款支付說明,確認開工日期']
                },
                {
                  id: '07',
                  title: '工程階段',
                  description: ['專人監工協調,維持工程品質', '依工程合約收取階段性費用', '家具/燈飾/軟件等挑選定案']
                },
                {
                  id: '08',
                  title: '完工交屋',
                  description: ['業主驗收交屋,收取工程尾款', '提供工程品质一年保固', '及永久售後諮詢服務']
                }
              ].map((step) => (
                <div key={step.id} className="flex-none w-[280px] md:w-[320px] snap-center flex flex-col">
                  <span className="text-4xl md:text-5xl font-geo text-white/20 mb-6 font-light">
                    {step.id}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl mb-6 text-[#ccb982]">
                    {step.title}
                  </h3>
                  <div className="space-y-2">
                    {step.description.map((line, index) => (
                      <p key={index} className="text-white/70 font-light leading-relaxed text-sm md:text-base">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator Hint */}
            <div className="flex justify-center mt-12">
              <div className="flex flex-col items-center gap-3 opacity-80">
                <div className="relative flex items-center">
                  <span className="text-[10px] font-geo tracking-[0.3em] uppercase mr-4">SCROLL</span>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-slide-right"
                  >
                    <path 
                      d="M4 12H20M20 12L14 6M20 12L14 18" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Page Only */}
      {isPage && (
        <section className="py-24 bg-[#EAE8E4] flex justify-center">
          <Link 
            to="/contact"
            className="bg-[#26190c] text-[#EAE8E4] px-12 py-4 text-sm tracking-[0.2em] uppercase font-geo hover:bg-[#35473a] transition-colors duration-300"
          >
            聯繫我們
          </Link>
        </section>
      )}

    </div>
  );
};