import React, { useState } from 'react';
import { Header } from './components/Header';
import { ServiceSelector } from './components/ServiceSelector';
import { DynamicForm } from './components/DynamicForm';
import { Service, FormData } from './types';
import { sendEmail } from './utils/email';
import toast, { Toaster } from 'react-hot-toast';

const services: Service[] = [
  { id: 'audit', name: 'Audit', active: true },
  { id: 'funding', name: 'Funding', active: true },
  { id: 'otc', name: 'OTC', active: true },
  { id: 'hiring', name: 'Hiring', active: true },
  { id: 'marketMaker', name: 'Market Maker', active: false },
  { id: 'launchpad', name: 'Launchpad', active: false },
  { id: 'marketing', name: 'Marketing', active: false },
  { id: 'listing', name: 'Listing', active: false },
];

function App() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    projectName: '',
    telegramContact: '',
    deck: '',
  });

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await sendEmail(formData, selectedServices);
      toast.success('Form submitted successfully!');
      setFormData({
        projectName: '',
        telegramContact: '',
        deck: '',
      });
      setSelectedServices([]);
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />
        <ServiceSelector
          services={services}
          selectedServices={selectedServices}
          onServiceToggle={handleServiceToggle}
        />
        <DynamicForm
          selectedServices={selectedServices}
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;