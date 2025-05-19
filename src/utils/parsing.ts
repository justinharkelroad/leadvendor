import Papa from 'papaparse';
import { LeadData, SalesData, QuoteData } from '../models';

export function parseLeads(csv: string): LeadData[] {
  const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
  return (data as any[]).map(row => ({
    vendor: row.vendor || '',
    firstName: row.firstName || '',
    lastName: row.lastName || '',
    leadCount: Number(row.leadCount) || 1,
    date: row.date,
  }));
}

export function parseSales(csv: string): SalesData[] {
  const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
  return (data as any[]).map(row => ({
    vendor: row.vendor || '',
    firstName: row.firstName || '',
    lastName: row.lastName || '',
    items: Number(row.items) || 0,
    premium: Number(row.premium) || 0,
    date: row.date,
    transactionId: row.transactionId,
  }));
}

export function parseQuotes(csv: string): QuoteData[] {
  const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
  return (data as any[]).map(row => ({
    vendor: row.vendor || '',
    firstName: row.firstName || '',
    lastName: row.lastName || '',
    quoteCount: Number(row.quoteCount) || 1,
    date: row.date,
  }));
}
