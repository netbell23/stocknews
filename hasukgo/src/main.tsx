import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { setupH5 } from './h5';
import './ui/styles.css';

setupH5();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
