import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#EAE8E4] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section from Reference */}
        <div className="flex items-center mb-12 md:mb-16">
          <h2 className="text-[#35473a] text-xs md:text-sm tracking-[0.2em] font-geo uppercase mr-6 whitespace-nowrap">
            Portfolio
          </h2>
          <div className="h-[1px] bg-[#35473a] w-full opacity-60"></div>
        </div>
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-12 md:gap-y-16">
          {PROJECTS.map((project) => (
            <Link 
              to={`/projects/${project.id}`}
              key={project.id}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden w-full relative bg-[#dcdad5]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Title Below Image */}
              <h3 className="text-[#26190c] text-[11px] md:text-xs tracking-[0.25em] uppercase font-geo font-medium opacity-90 group-hover:opacity-60 transition-opacity">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Back to Top Footer */}
        <div className="mt-24 md:mt-32 flex justify-center">
          <button 
            onClick={scrollToTop}
            className="text-[#26190c] text-[10px] md:text-[11px] tracking-[0.25em] uppercase border-b border-[#26190c]/40 pb-1.5 hover:border-[#26190c] hover:opacity-70 transition-all font-geo"
          >
            Back to Top
          </button>
        </div>

      </div>
    </section>
  );
};