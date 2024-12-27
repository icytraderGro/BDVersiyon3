import React from 'react';
import { CircleDot } from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <CircleDot className="w-12 h-12 text-gray-400" />
      </div>
      <h1 className="text-3xl font-semibold text-[#2d4550] mb-3">
        Find the perfect service Now
      </h1>
      <p className="text-gray-500 text-base">
        Click on the services you need and let us handle all the work for free, Let's build together!
      </p>
    </div>
  );
};