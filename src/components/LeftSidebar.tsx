
import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start pr-8 pt-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 w-full mb-8 shadow-lg border border-[#eaeaea]">
        <h3 className="text-2xl font-bold mb-4">Models</h3>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
            <span className="text-[#0EA5E9] font-semibold">DB7</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span>DB7 Sport</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span>DB8</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 w-full shadow-lg border border-[#eaeaea]">
        <h3 className="text-xl font-bold mb-4">Performance</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 text-sm">Power</span>
              <span className="text-sm font-semibold">95%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#0EA5E9] rounded-full" style={{
                width: '95%'
              }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 text-sm">Range</span>
              <span className="text-sm font-semibold">88%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#0EA5E9] rounded-full" style={{
                width: '88%'
              }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Alternate Mode</span>
              <div className="w-12 h-6 bg-[#0EA5E9] rounded-full flex items-center p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
