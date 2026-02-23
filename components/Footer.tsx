import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#35473a] text-[#f9f8f4] py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#f9f8f4]/10 pb-16 mb-16">
          
          <div className="lg:col-span-2">
            <h2 className="font-geo text-2xl md:text-3xl tracking-[0.15em] mb-2">
              STILLSPACE
            </h2>
            <h3 className="text-lg tracking-widest font-light opacity-80 mb-8">
              唯觀室内裝修有限公司
            </h3>
            <p className="text-sm font-light leading-relaxed opacity-70 max-w-sm tracking-wide">
              我們致力於創造不僅美觀，更具靈魂的空間。每一個設計都是與生活最深層的對話。
            </p>
          </div>

          <div>
            <h4 className="font-geo text-xs tracking-[0.2em] text-[#ccb982] uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-sm font-light tracking-wide opacity-80">
              <p>台中市霧峰區北柳里四德路134巷3號1樓</p>
              <p>0958 668 705</p>
              <p>sharon01168@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-geo text-xs tracking-[0.2em] text-[#ccb982] uppercase mb-6">
              Follow
            </h4>
            <div className="flex gap-6 opacity-80">
              <a href="#" className="hover:text-[#ccb982] transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[#ccb982] transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-geo tracking-widest opacity-40">
          <p>© 2026 STILLSPACE DESIGN. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100">PRIVACY</a>
            <a href="#" className="hover:opacity-100">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
