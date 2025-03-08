
import React from 'react';

const ProductNavigation = () => {
  return (
    <div className="lg:w-48 shrink-0 mb-10 lg:mb-0">
      <ul className="space-y-4">
        <li>
          <a href="#" className="text-gray-500 hover:text-neon-blue transition-all duration-300 border-l-2 border-transparent hover:border-neon-blue pl-3 py-1 block">
            Models
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-neon-blue transition-all duration-300 border-l-2 border-transparent hover:border-neon-blue pl-3 py-1 block">
            Technology
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-neon-blue transition-all duration-300 border-l-2 border-transparent hover:border-neon-blue pl-3 py-1 block">
            Performance
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-neon-blue transition-all duration-300 border-l-2 border-transparent hover:border-neon-blue pl-3 py-1 block">
            Gallery
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductNavigation;
