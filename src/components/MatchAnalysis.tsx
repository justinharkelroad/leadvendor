import React from 'react';
import { useAppState } from '../store';

const MatchAnalysis: React.FC = () => {
  const { matches } = useAppState();
  return (
    <div>
      <h2>Match Analysis</h2>
      <table>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Match Pattern</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((m, idx) => (
            <tr key={idx}>
              <td>{m.vendor}</td>
              <td>{m.firstName}</td>
              <td>{m.lastName}</td>
              <td>{m.matchPattern}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchAnalysis;
