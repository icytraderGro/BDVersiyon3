import React from 'react';
import { FormData } from '../types';

type DynamicFormProps = {
  selectedServices: string[];
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export const DynamicForm: React.FC<DynamicFormProps> = ({
  selectedServices,
  formData,
  onChange,
  onSubmit,
}) => {
  const renderInput = (
    label: string,
    name: keyof FormData,
    type: string = 'text',
    placeholder: string = '',
    description?: string
  ) => (
    <div className="mb-8">
      <label className="block text-lg font-medium text-[#2d4550] mb-2">
        {label}
      </label>
      {description && (
        <p className="text-gray-500 text-sm mb-2">{description}</p>
      )}
      <input
        type={type}
        name={name}
        value={formData[name] || ''}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2d4550] focus:border-transparent"
        required
      />
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#2d4550] mb-2">Project Details</h2>
        <p className="text-gray-500">Please provide your project information below.</p>
      </div>

      {renderInput('Project Name', 'projectName', 'text', 'Enter your project name')}
      {renderInput('Telegram Contact', 'telegramContact', 'text', '@username')}
      {renderInput('Project Deck', 'deck', 'url', 'Enter your deck URL')}

      {selectedServices.includes('audit') && (
        <>
          {renderInput('GitHub Repository', 'githubAddress', 'url', 'https://github.com/your-repo')}
          {renderInput('Audit Budget', 'auditBudget', 'text', 'Enter your budget')}
        </>
      )}

      {selectedServices.includes('hiring') && (
        renderInput('Position Required', 'hiringPosition', 'text', 'Enter the position you need')
      )}

      {selectedServices.includes('otc') && (
        <>
          {renderInput('CoinMarketCap Link', 'cmcLink', 'url', 'https://coinmarketcap.com/...')}
          {renderInput('CoinGecko Link', 'coingeckoLink', 'url', 'https://coingecko.com/...')}
        </>
      )}

      {selectedServices.includes('funding') && (
        renderInput('Investors Deck', 'investorsDeck', 'url', 'Enter investors deck URL')
      )}

      <button
        type="submit"
        className="w-full bg-[#2d4550] text-white py-3 px-6 rounded-lg hover:bg-[#1d2f38] transition-colors text-lg font-medium"
      >
        Submit Request
      </button>
    </form>
  );
};