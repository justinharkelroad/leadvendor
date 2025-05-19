import { LeadData, SalesData, QuoteData, VendorPerformance } from '../models';

function normalize(str: string) {
  return str.trim().toLowerCase();
}

export function matchSalesToLeads(leads: LeadData[], sales: SalesData[]): SalesData[] {
  const matches: SalesData[] = [];
  const leadMap = new Map<string, LeadData[]>();
  leads.forEach(l => {
    const key = `${normalize(l.firstName)}_${normalize(l.lastName)}`;
    if (!leadMap.has(key)) leadMap.set(key, []);
    leadMap.get(key)!.push(l);
  });

  sales.forEach(s => {
    const key = `${normalize(s.firstName)}_${normalize(s.lastName)}`;
    if (leadMap.has(key)) {
      matches.push({ ...s, matchPattern: 'exact' });
    }
  });
  return matches;
}

export function calculatePerformance(
  leads: LeadData[],
  sales: SalesData[],
  quotes: QuoteData[],
  vendors: Record<string, { costPerLead: number }>
): VendorPerformance[] {
  const perf: VendorPerformance[] = [];
  const leadByVendor = new Map<string, LeadData[]>();
  leads.forEach(l => {
    if (!leadByVendor.has(l.vendor)) leadByVendor.set(l.vendor, []);
    leadByVendor.get(l.vendor)!.push(l);
  });

  leadByVendor.forEach((vendorLeads, vendor) => {
    const vendorSales = sales.filter(s => s.vendor === vendor);
    const vendorQuotes = quotes.filter(q => q.vendor === vendor);
    const matchedSales = matchSalesToLeads(vendorLeads, vendorSales);
    const conversionRate = vendorLeads.length
      ? (matchedSales.length / vendorLeads.length) * 100
      : 0;
    const quoteConversionRate = vendorLeads.length
      ? (vendorQuotes.length / vendorLeads.length) * 100
      : 0;
    const costPerLead = vendors[vendor]?.costPerLead || 0;
    perf.push({
      vendor,
      leads: vendorLeads.length,
      matchedSales: matchedSales.length,
      conversionRate,
      quotes: vendorQuotes.length,
      quoteConversionRate,
      costPerLead,
      totalCost: costPerLead * vendorLeads.length,
    });
  });
  return perf;
}
