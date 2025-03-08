
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, Search, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5] border-b border-[#eaeaea]">
      <div className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-light uppercase tracking-widest">
            Veloretti
          </a>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-sm uppercase tracking-wider hover:text-black transition-colors">
              Home
            </a>
            <a href="#" className="text-sm uppercase tracking-wider hover:text-black transition-colors">
              Features
            </a>
            <a href="#" className="text-sm uppercase tracking-wider hover:text-black transition-colors">
              Product
            </a>
            <a href="#" className="text-sm uppercase tracking-wider hover:text-black transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="text-[#999] hover:text-black transition-colors">
              <Search size={20} />
            </button>
            
            <button 
              aria-label="Menu" 
              className="text-[#999] hover:text-black transition-colors md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 transition-transform duration-300 transform",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center mb-10">
            <a href="/" className="text-xl font-light uppercase tracking-widest">
              Veloretti
            </a>
            <button 
              aria-label="Close menu" 
              className="text-[#999] hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 text-center mt-20">
            <a href="#" className="text-xl uppercase tracking-wider hover:text-black transition-colors">
              Home
            </a>
            <a href="#" className="text-xl uppercase tracking-wider hover:text-black transition-colors">
              Features
            </a>
            <a href="#" className="text-xl uppercase tracking-wider hover:text-black transition-colors">
              Product
            </a>
            <a href="#" className="text-xl uppercase tracking-wider hover:text-black transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
