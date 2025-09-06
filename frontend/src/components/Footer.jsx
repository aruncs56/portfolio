import React from 'react';
import { Separator } from './ui/separator';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Arun Kumar M</h3>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Software Architect & AI Specialist passionate about building scalable solutions 
                that drive business innovation and transformation.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/arun-kumar-m-a616364a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:aruncs56@gmail.com"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Skills
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Solution Architecture</li>
                <li>Full-Stack Development</li>
                <li>AI/ML Implementation</li>
                <li>Technical Consulting</li>
                <li>Team Leadership</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Arun Kumar M. All rights reserved. Built with React & Tailwind CSS.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowUp size={16} className="mr-1" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;