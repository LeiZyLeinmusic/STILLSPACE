import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

export const Works: React.FC = () => {
  // Only show the first 3 projects on the home page
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section className="pt-24 md:pt-32 pb-0 bg-[#EAE8E4] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-16 flex items-end justify-between">
        <div>
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#35473a] mb-2">
            Selected Works
          </h2>
          <p className="text-[#26190c]/60 text-sm tracking-widest font-light">
            CURATED RESIDENTIAL PROJECTS
          </p>
        </div>
        <div className="hidden md:block h-[1px] bg-[#35473a]/20 flex-grow ml-12 mb-4"></div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {featuredProjects.map((project, index) => (
          <Link 
            to={`/projects/${project.id}`}
            key={project.id}
            className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] snap-center group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden mb-6 relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            
            <div className="flex justify-between items-start border-t border-[#35473a]/20 pt-4">
              <div className="flex flex-col">
                <span className="font-geo text-xs tracking-[0.2em] text-[#ccb982] uppercase mb-1">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-[#35473a]">
                  {project.title}
                </h3>
              </div>
              <span className="font-geo text-[10px] tracking-[0.2em] uppercase text-[#35473a]/60 mt-1">
                {project.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
};