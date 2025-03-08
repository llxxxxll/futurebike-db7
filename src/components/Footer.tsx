
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md py-6 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} DB7 Motors. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xs uppercase text-gray-500 hover:text-[#0EA5E9] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs uppercase text-gray-500 hover:text-[#0EA5E9] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs uppercase text-gray-500 hover:text-[#0EA5E9] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
