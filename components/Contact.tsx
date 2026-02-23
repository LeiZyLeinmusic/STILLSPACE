import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#EAE8E4]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-[#35473a] text-3xl md:text-4xl font-geo tracking-[0.15em] uppercase mb-6">
            CONTACT
          </h1>
          <div className="w-full h-[1px] bg-[#35473a]/30"></div>
        </div>

        {/* Info & Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 md:mb-24">
          
          {/* Left: Contact Details */}
          <div className="space-y-8 text-[#35473a] font-light text-sm tracking-wide">
            <div>
              <p className="uppercase text-xs font-geo tracking-[0.2em] mb-2 opacity-60">Email / Phone</p>
              <p>sharon01168@gmail.com</p>
              <p>0958 668 705</p>
            </div>
            
            <div>
              <p className="uppercase text-xs font-geo tracking-[0.2em] mb-2 opacity-60">Address</p>
              <p>台中市霧峰區北柳里四德路134巷3號1樓</p>
            </div>

            <div>
              <p className="uppercase text-xs font-geo tracking-[0.2em] mb-2 opacity-60">Studio Hours</p>
              <p>週一至週五 9:00 - 18:00</p>
            </div>
          </div>

          {/* Right: Intro Text */}
          <div className="flex items-center">
            <p className="font-serif italic text-xl md:text-2xl text-[#35473a] leading-relaxed">
              如果您有興趣與我們合作，請填寫以下表格，我們的團隊將盡快與您聯繫，共同打造理想的空間。
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-[#F2F0EC] p-8 md:p-16 shadow-sm">
          <form className="space-y-12">
            
            {/* Row 1: Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                  名字 (First Name)
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] focus:outline-none focus:border-[#35473a] transition-colors"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                  姓氏 (Last Name)
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] focus:outline-none focus:border-[#35473a] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                  電子郵件 (Email Address)
                </label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] focus:outline-none focus:border-[#35473a] transition-colors"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                  聯絡電話 (Phone Number)
                </label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] focus:outline-none focus:border-[#35473a] transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Scope */}
            <div className="group">
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                專案類型 (Scope of Project)
              </label>
              <input 
                type="text" 
                placeholder="例如：舊屋翻新、預售屋客變、商業空間..."
                className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] placeholder-[#35473a]/30 focus:outline-none focus:border-[#35473a] transition-colors"
              />
            </div>

            {/* Row 4: Property Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                  物件地址 (Property Address)
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] focus:outline-none focus:border-[#35473a] transition-colors"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                  室內坪數 (Approximate Square Footage)
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] focus:outline-none focus:border-[#35473a] transition-colors"
                />
              </div>
            </div>

            {/* Row 5: Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                  預計開工日期 (Desired Start Date)
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] focus:outline-none focus:border-[#35473a] transition-colors"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                  預計完工日期 (Desired Completion Date)
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] focus:outline-none focus:border-[#35473a] transition-colors"
                />
              </div>
            </div>

            {/* Row 6: Budget */}
            <div className="group">
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                預算範圍 (Estimated Budget)
              </label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-[#35473a]/20 py-2 text-[#35473a] focus:outline-none focus:border-[#35473a] transition-colors"
              />
            </div>

            {/* Row 7: Comments */}
            <div className="group">
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mb-2 font-geo">
                其他需求或問題 (Additional Comments)
              </label>
              <textarea 
                rows={6}
                className="w-full bg-[#EAE8E4]/50 border border-[#35473a]/10 p-4 text-[#35473a] focus:outline-none focus:border-[#35473a]/30 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button 
                type="submit"
                className="w-full bg-[#35473a] text-[#EAE8E4] py-4 text-xs tracking-[0.2em] uppercase font-geo hover:bg-[#26190c] transition-colors duration-300"
              >
                送出表單 (Submit)
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};