
import React from 'react';

const ProductNavigation = () => {
  return (
    <div className="lg:w-48 shrink-0 mb-10 lg:mb-0">
      <ul className="space-y-3">
        <li>
          <a href="#" className="text-[#999] hover:text-black transition-colors">Brands</a>
        </li>
        <li>
          <a href="#" className="text-[#999] hover:text-black transition-colors">Models</a>
        </li>
        <li>
          <a href="#" className="text-[#999] hover:text-black transition-colors">Updates</a>
        </li>
      </ul>
    </div>
  );
};

export default ProductNavigation;
