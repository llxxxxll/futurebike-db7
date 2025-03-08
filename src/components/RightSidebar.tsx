
import React from 'react';
import { ChevronRight, Info } from 'lucide-react';

const RightSidebar = () => {
  return (
    <div className="w-full flex flex-col pt-12 pl-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold tracking-tight">
          DB7
        </h1>
        <h2 className="text-xl text-[#0EA5E9] font-semibold mt-2">
          UNMATCHED PROTECTION
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          The DB7 represents the future of electric motorcycles with its revolutionary design and cutting-edge technology. Experience unparalleled performance with zero emissions.
        </p>
        
        <button className="mt-8 bg-[#0EA5E9] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#0EA5E9]/90 transition-all flex items-center space-x-2">
          <span>Reserve Now</span>
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronRight size={16} className="text-white" />
          </span>
        </button>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#eaeaea]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Potential</h3>
          <Info size={18} className="text-gray-400" />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-end space-x-2">
            <div className="w-3 bg-[#0EA5E9] rounded-t-md h-10"></div>
            <div className="w-3 bg-[#0EA5E9] rounded-t-md h-16"></div>
            <div className="w-3 bg-[#0EA5E9] rounded-t-md h-12"></div>
            <div className="w-3 bg-[#0EA5E9] rounded-t-md h-20"></div>
            <div className="w-3 bg-[#0EA5E9] rounded-t-md h-14"></div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>1.56k</span>
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-[#0EA5E9]"></div>
              <div className="w-3 h-3 rounded-full bg-[#22D3EE]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
