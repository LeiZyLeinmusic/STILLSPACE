import React from 'react';
import { Link } from 'react-router-dom';
import { JOURNAL_POSTS } from '../constants';

export const Journal: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#EAE8E4]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="flex flex-col items-center mb-20 md:mb-32">
          <h1 className="text-[#35473a] text-4xl md:text-6xl font-serif italic mb-6">
            Journal
          </h1>
          <div className="w-24 h-[1px] bg-[#35473a]/30 mb-6"></div>
          <p className="text-[#26190c]/60 font-light tracking-wide max-w-md text-center text-sm md:text-base">
            Exploring design, culture, and the art of living.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
          {JOURNAL_POSTS.map((post) => (
            <Link 
              to={`/journal/${post.id}`} 
              key={post.id}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden mb-6 md:mb-8 bg-[#dcdad5]">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#ccb982] text-[10px] tracking-[0.2em] uppercase font-geo">
                  {post.category}
                </span>
                <span className="w-8 h-[1px] bg-[#ccb982]/50"></span>
                <span className="text-[#26190c]/40 text-[10px] tracking-[0.1em] uppercase font-geo">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[#35473a] text-xl md:text-2xl font-serif leading-snug mb-4 group-hover:text-[#ccb982] transition-colors duration-300">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-[#26190c]/70 font-light text-sm leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <div className="mt-auto inline-flex items-center text-[#35473a] text-[10px] tracking-[0.2em] uppercase font-geo group-hover:opacity-70 transition-opacity">
                Read Story
                <span className="ml-2 w-8 h-[1px] bg-[#35473a] group-hover:w-12 transition-all duration-300"></span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};