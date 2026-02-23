import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { JOURNAL_POSTS } from '../constants';
import { ArrowLeft } from 'lucide-react';

export const JournalDetail: React.FC = () => {
  const { journalId } = useParams<{ journalId: string }>();
  const navigate = useNavigate();
  
  const post = JOURNAL_POSTS.find(p => p.id === journalId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [journalId]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Post not found</h2>
        <Link to="/journal" className="text-[#ccb982] hover:underline">Back to Journal</Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 min-h-screen bg-[#EAE8E4]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header - Moved above image for visibility */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-[1px] w-8 bg-[#ccb982]"></span>
            <span className="text-[#ccb982] text-xs tracking-[0.2em] uppercase font-geo">
              {post.category}
            </span>
            <span className="h-[1px] w-8 bg-[#ccb982]"></span>
          </div>
          
          <h1 className="text-[#35473a] text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-[#26190c]/60 font-geo text-xs tracking-widest uppercase">
            {post.date}
          </p>
        </div>

        {/* Hero Image - Adjusted to match Home Hero aspect ratio */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-16 md:mb-24 relative">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div 
            className="prose prose-lg prose-stone mx-auto font-light text-justify leading-loose tracking-wide text-[#26190c]/80
              prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#35473a] prose-headings:mt-12 prose-headings:mb-6
              prose-p:mb-8 prose-strong:font-medium prose-strong:text-[#35473a]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer / Navigation */}
          <div className="mt-24 pt-12 border-t border-[#26190c]/10 flex justify-between items-center">
            <Link 
              to="/journal"
              className="group flex items-center gap-3 text-[#35473a] hover:text-[#ccb982] transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs tracking-[0.2em] uppercase font-geo">Back to Journal</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
