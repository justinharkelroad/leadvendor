import React, { useState } from 'react';
import { useAppState } from '../store';

const VendorManagement: React.FC = () => {
  const { vendors } = useAppState();
  const [vendorName, setVendorName] = useState('');
  const [costPerLead, setCostPerLead] = useState(0);

  const addVendor = () => {
    // TODO: add vendor to context
    setVendorName('');
    setCostPerLead(0);
  };

  return (
    <div>
      <h2>Vendors</h2>
      <div>
        <input
          type="text"
          placeholder="Vendor name"
          value={vendorName}
          onChange={e => setVendorName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cost per lead"
          value={costPerLead}
          onChange={e => setCostPerLead(parseFloat(e.target.value))}
        />
        <button onClick={addVendor}>Add Vendor</button>
      </div>
      <ul>
        {Object.entries(vendors).map(([name, info]) => (
          <li key={name}>{name}: ${info.costPerLead.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default VendorManagement;
