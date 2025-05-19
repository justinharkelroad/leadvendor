import React, { createContext, useContext, useState } from 'react';
import { LeadData, SalesData, QuoteData, VendorPerformance } from '../models';

interface AppState {
  leads: LeadData[];
  sales: SalesData[];
  quotes: QuoteData[];
  vendors: Record<string, { costPerLead: number }>;
  performance: VendorPerformance[];
  matches: SalesData[];
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [sales, setSales] = useState<SalesData[]>([]);
  const [quotes, setQuotes] = useState<QuoteData[]>([]);
  const [vendors, setVendors] = useState<Record<string, { costPerLead: number }>>({});
  const [performance, setPerformance] = useState<VendorPerformance[]>([]);
  const [matches, setMatches] = useState<SalesData[]>([]);

  const value: AppState = {
    leads,
    sales,
    quotes,
    vendors,
    performance,
    matches,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppState = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppState must be used within AppProvider');
  return ctx;
};

// TODO: Add actions to update state and run calculations
