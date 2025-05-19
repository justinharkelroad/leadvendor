import React from 'react';
import { useAppState } from '../store';

const Dashboard: React.FC = () => {
  const { performance } = useAppState();

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Leads</th>
            <th>Matched Sales</th>
            <th>Conversion %</th>
            <th>Quotes</th>
            <th>Quote Conversion %</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {performance.map(p => (
            <tr key={p.vendor}>
              <td>{p.vendor}</td>
              <td>{p.leads}</td>
              <td>{p.matchedSales}</td>
              <td>{p.conversionRate.toFixed(2)}</td>
              <td>{p.quotes}</td>
              <td>{p.quoteConversionRate?.toFixed(2)}</td>
              <td>{p.totalCost?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
