import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Initialize the React application by creating a root and rendering the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);