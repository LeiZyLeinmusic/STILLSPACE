import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Works } from './components/Works';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { Philosophy } from './components/Philosophy';
import { Journal } from './components/Journal';
import { JournalDetail } from './components/JournalDetail';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { ScrollToTop } from './components/ScrollToTop';

// Home Page Component - Restored to show full content
const Home = () => (
  <>
    <Hero />
    <Works />
    <Services variant="section" />
    <Philosophy />
  </>
);

function App() {
  return (
    <div className="min-h-screen w-full bg-[#EAE8E4] overflow-x-hidden selection:bg-[#ccb982] selection:text-white flex flex-col">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<Philosophy />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:journalId" element={<JournalDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;