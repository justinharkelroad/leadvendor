import React from 'react';
import FileUploadSection from './components/FileUploadSection';
import Dashboard from './components/Dashboard';
import VendorManagement from './components/VendorManagement';
import MatchAnalysis from './components/MatchAnalysis';
import { AppProvider } from './store';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div style={{ padding: '1rem' }}>
        <h1>Lead Vendor Check Up</h1>
        <VendorManagement />
        <FileUploadSection />
        <Dashboard />
        <MatchAnalysis />
      </div>
    </AppProvider>
  );
};

export default App;
