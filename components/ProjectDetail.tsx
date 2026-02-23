import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EAE8E4]">
        <p className="font-serif text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#EAE8E4] min-h-screen pt-24 md:pt-32 pb-24">
      {/* 1. Hero Image */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-16 md:mb-24">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* 2. Title Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-3xl md:text-5xl text-[#35473a] tracking-wide uppercase">
            {project.title}
          </h1>
        </div>

        {/* 3. Info & Description Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
          
          {/* Left Column: Metadata */}
          <div>
            <div className="border-t border-[#35473a]/40 pt-6 mb-12">
              <div className="space-y-3">
                <div className="flex gap-2 text-xs md:text-sm tracking-[0.2em] font-geo uppercase text-[#35473a]">
                  <span className="opacity-60 min-w-[140px]">PROJECT LOCATION:</span>
                  <span>{project.location || 'TAIPEI, TAIWAN'}</span>
                </div>
                <div className="flex gap-2 text-xs md:text-sm tracking-[0.2em] font-geo uppercase text-[#35473a]">
                  <span className="opacity-60 min-w-[140px]">ARCHITECT:</span>
                  <span>{project.architect || 'STILLSPACE'}</span>
                </div>
                <div className="flex gap-2 text-xs md:text-sm tracking-[0.2em] font-geo uppercase text-[#35473a]">
                  <span className="opacity-60 min-w-[140px]">CONSTRUCTION:</span>
                  <span>{project.construction || 'STILLSPACE'}</span>
                </div>
                <div className="flex gap-2 text-xs md:text-sm tracking-[0.2em] font-geo uppercase text-[#35473a]">
                  <span className="opacity-60 min-w-[140px]">PHOTOGRAPHER:</span>
                  <span>{project.photographer || 'UNKOWN'}</span>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12">
              <p className="font-serif italic text-xl text-[#35473a] mb-4">
                Share This Project
              </p>
              <div className="flex gap-6 text-[#35473a]">
                 {/* Facebook Icon */}
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-[#ccb982] transition-colors">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                 </svg>
                 {/* Pinterest Icon */}
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-[#ccb982] transition-colors">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"/>
                 </svg>
                 {/* X / Twitter Icon */}
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-[#ccb982] transition-colors">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                 </svg>
                 {/* Email Icon */}
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-[#ccb982] transition-colors">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                 </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Description */}
          <div>
            <div className="border-t border-[#35473a]/40 pt-6">
              <p className="text-[#26190c]/80 text-base md:text-lg font-light leading-loose tracking-wide text-justify">
                {project.description}
              </p>
            </div>
          </div>

        </div>

        {/* 4. Bottom Images (Gallery) */}
        {project.moreImages && project.moreImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-24">
             {project.moreImages.map((img, idx) => (
                <div key={idx} className="aspect-[3/4] overflow-hidden bg-[#dcdad5]">
                   <img 
                      src={img} 
                      alt={`Detail ${idx + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                   />
                </div>
             ))}
          </div>
        )}

        {/* 5. Footer Navigation */}
        <div className="flex flex-col items-center justify-center border-t border-[#35473a]/20 pt-16">
           <Link 
             to="/projects"
             className="text-[#35473a] text-xs tracking-[0.25em] font-geo uppercase border-b border-[#35473a] pb-1 hover:text-[#ccb982] hover:border-[#ccb982] transition-colors"
           >
             View All Projects
           </Link>
        </div>

      </div>
    </div>
  );
};