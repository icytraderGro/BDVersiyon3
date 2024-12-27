import React from 'react';
import { Service } from '../types';

type ServiceSelectorProps = {
  services: Service[];
  selectedServices: string[];
  onServiceToggle: (serviceId: string) => void;
};

export const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  services,
  selectedServices,
  onServiceToggle,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => service.active && onServiceToggle(service.id)}
          className={`
            p-3 rounded-lg text-center transition-all text-sm
            ${
              service.active
                ? selectedServices.includes(service.id)
                  ? 'bg-[#5d7d8b] text-white'
                  : 'bg-white text-[#2d4550] border border-[#2d4550] hover:bg-gray-50'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }
            ${service.active ? 'shadow-sm hover:shadow-md' : ''}
          `}
          disabled={!service.active}
        >
          {service.name}
        </button>
      ))}
    </div>
  );
};