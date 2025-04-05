'use client'

import React, { useEffect, useRef, useState } from 'react';
import { siteContent } from '../content/text';
import '../styles/global.css';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, ArrowRight, Send } from 'lucide-react';

export default function App() {
  // animate background
  useEffect(() => {
    const background = document.querySelector('.background-gradient') as HTMLElement | null;
    
    if (background) {
      // track mouse movement and adjust background style accordingly
      document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        background.style.background = `radial-gradient(circle at ${x}px ${y}px, #330979, #00bbff)`;
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen relative overflow-hidden bg-gray-900 hero-pattern landing-page">
        <div className="absolute inset-0 animated-background"></div>
        <div className="absolute inset-0 background-gradient opacity-50"></div>
        <div className="container mx-auto px-6 py-24 relative">
          <nav className="flex justify-between items-center mb-16">
            <span className="text-white font-bold text-xl hover-scale">MS</span>
            <div className="flex items-center space-x-8 navbar-text">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors hover-scale">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors hover-scale">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors hover-scale">Projects</a>
              <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 animate-pulse-glow">
                Contact
              </a>
            </div>
          </nav>
          <div className="flex flex-col items-center text-center mt-32">
            <div className="mb-6 animate-fade-in">
              <span className="text-indigo-400 text-xl font-semibold">Full Stack Developer</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-8xl font-bold mb-8">
                Marcellus Simanjuntak
              </h1>
            </div>

            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl animate-fade-in delay-200">
              {siteContent.headingText}
            </p>
            <div className="flex items-center space-x-6 animate-fade-in delay-300">
              <a href="#contact" className="bg-[#17c3a0] text-white px-8 py-4 rounded-lg hover:bg-[#109a7e] transition-all hover:scale-105 flex items-center group animate-pulse-glow floating-button">
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full hover-scale">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full hover-scale">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full hover-scale">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}