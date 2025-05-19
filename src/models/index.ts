export interface LeadData {
  vendor: string;
  firstName: string;
  lastName: string;
  leadCount: number;
  date?: string | Date;
}

export interface SalesData {
  vendor: string;
  firstName: string;
  lastName: string;
  items?: number;
  premium?: number;
  date?: string | Date;
  transactionId?: string;
  matchPattern?: string;
  transactionCount?: number;
  originalVendor?: string;
}

export interface QuoteData {
  vendor: string;
  firstName: string;
  lastName: string;
  quoteCount?: number;
  date?: string | Date;
  matchPattern?: string;
}

export interface VendorPerformance {
  vendor: string;
  leads: number;
  matchedSales?: number;
  conversionRate: number;
  items?: number;
  premium?: number;
  quotes?: number;
  quoteConversionRate?: number;
  costPerLead?: number;
  totalCost?: number;
}
