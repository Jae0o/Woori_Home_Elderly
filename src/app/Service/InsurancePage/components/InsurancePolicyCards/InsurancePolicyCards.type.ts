export interface PolicyCard {
  title: string;
  description: string;
  icon?: string;
}

export interface InsurancePolicyCardsProps {
  cards: PolicyCard[];
}
