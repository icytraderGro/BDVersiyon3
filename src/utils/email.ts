import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { FormData } from '../types';

export const sendEmail = async (formData: FormData, selectedServices: string[]) => {
  const templateParams = {
    to_email: 'thortillazk@gmail.com',
    selected_services: selectedServices.join(', '),
    project_name: formData.projectName,
    telegram_contact: formData.telegramContact,
    deck_url: formData.deck,
    github_url: formData.githubAddress,
    audit_budget: formData.auditBudget,
    hiring_position: formData.hiringPosition,
    cmc_link: formData.cmcLink,
    coingecko_link: formData.coingeckoLink,
    investors_deck: formData.investorsDeck
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};