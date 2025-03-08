
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] border-t border-[#eaeaea] py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#999] mb-4 md:mb-0">
            © {new Date().getFullYear()} DST Electric. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xs uppercase text-[#999] hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs uppercase text-[#999] hover:text-black transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs uppercase text-[#999] hover:text-black transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
