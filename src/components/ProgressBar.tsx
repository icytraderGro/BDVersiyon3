import React from 'react';

type ProgressBarProps = {
  services: Array<{ id: string; name: string }>;
  activeService: string;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ services, activeService }) => {
  return (
    <div className="flex justify-between items-center mb-16 px-4">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold 
            ${activeService === service.id 
              ? 'bg-[#2d4550] text-white' 
              : 'bg-gray-100 text-gray-400'}`}
        >
          {String.fromCharCode(65 + index)}
        </div>
      ))}
    </div>
  );
};