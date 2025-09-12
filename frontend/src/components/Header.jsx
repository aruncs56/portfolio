import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl text-gray-900">
            Arun Kumar M
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('certications')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Certications
            </button>
            <button
              onClick={() => scrollToSection('appliedskills')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Applied Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex bg-gray-900 hover:bg-gray-800 text-white"
          >
            Get In Touch
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('certications')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-left"
              >
                Certications
              </button>
              <button
                onClick={() => scrollToSection('appliedskills')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-left"
              >
                Applied Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;