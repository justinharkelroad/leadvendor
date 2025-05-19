import React, { useState } from 'react';
import { parseLeads, parseSales, parseQuotes } from '../utils/parsing';
import { useAppState } from '../store';

const FileUploadSection: React.FC = () => {
  const { leads, sales, quotes } = useAppState();
  const [leadFile, setLeadFile] = useState<File | null>(null);
  const [salesFile, setSalesFile] = useState<File | null>(null);
  const [quoteFile, setQuoteFile] = useState<File | null>(null);

  const handleFile = (file: File, parser: (csv: string) => any[]) => {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      parser(text); // TODO: store parsed data in context
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h2>Upload Data</h2>
      <div>
        <label>Leads CSV: </label>
        <input type="file" accept=".csv" onChange={e => setLeadFile(e.target.files?.[0] || null)} />
        {leadFile && <button onClick={() => handleFile(leadFile, parseLeads)}>Process</button>}
      </div>
      <div>
        <label>Sales CSV: </label>
        <input type="file" accept=".csv" onChange={e => setSalesFile(e.target.files?.[0] || null)} />
        {salesFile && <button onClick={() => handleFile(salesFile, parseSales)}>Process</button>}
      </div>
      <div>
        <label>Quotes CSV: </label>
        <input type="file" accept=".csv" onChange={e => setQuoteFile(e.target.files?.[0] || null)} />
        {quoteFile && <button onClick={() => handleFile(quoteFile, parseQuotes)}>Process</button>}
      </div>
    </div>
  );
};

export default FileUploadSection;
