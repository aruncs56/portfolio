import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
              Available for new opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Software Architect &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
                AI Innovator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building scalable solutions and AI-powered applications with over a decade of experience in 
              software development, solution architecture, and emerging technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg"
            >
              Let's Work Together
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://www.linkedin.com/in/arun-kumar-m-a616364a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <a 
              href="mailto:aruncs56@gmail.com"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <Mail size={24} className="text-gray-700" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <Github size={24} className="text-gray-700" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown size={32} className="text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;