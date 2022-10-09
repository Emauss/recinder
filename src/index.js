import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './layouts/Layout';
import Dashboard from './dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout pageTitle={'Dashboard'}>
      <Dashboard />
    </Layout>
  </React.StrictMode>
);
