
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, Search, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold uppercase tracking-wide text-[#333]">
            DB7
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#0EA5E9] transition-colors">
              ABOUT
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#0EA5E9] transition-colors">
              SHOP
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#0EA5E9] transition-colors">
              CONTACT
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              aria-label="Search" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] hover:bg-[#0EA5E9]/20 transition-colors"
            >
              <Search size={18} />
            </button>
            
            <button 
              aria-label="Menu" 
              className="text-gray-600 hover:text-[#0EA5E9] transition-colors md:hidden"
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
            <a href="/" className="text-xl font-bold uppercase tracking-wider">
              DB7
            </a>
            <button 
              aria-label="Close menu" 
              className="text-gray-600 hover:text-[#0EA5E9] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 text-center mt-20">
            <a href="#" className="text-xl font-medium text-gray-600 hover:text-[#0EA5E9] transition-colors">
              ABOUT
            </a>
            <a href="#" className="text-xl font-medium text-gray-600 hover:text-[#0EA5E9] transition-colors">
              SHOP
            </a>
            <a href="#" className="text-xl font-medium text-gray-600 hover:text-[#0EA5E9] transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
