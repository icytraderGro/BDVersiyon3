export type Service = {
  id: string;
  name: string;
  active: boolean;
};

export type FormData = {
  projectName: string;
  telegramContact: string;
  deck: string;
  githubAddress?: string;
  auditBudget?: string;
  hiringPosition?: string;
  cmcLink?: string;
  coingeckoLink?: string;
  investorsDeck?: string;
};