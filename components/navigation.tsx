"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">enlightii</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <Button className="bg-white text-black hover:bg-white/90 transition-all duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <Button className="w-full mt-4 bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}