export type MemberType = {
  name: string;
  complexies: string;
  production_days: number;
  garanty_months: number;
  prepayment: number;
  price: { full: number; discount: number };
  actions: string;
};