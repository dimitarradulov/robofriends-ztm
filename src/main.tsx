import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App.tsx';
import './index.css';
import 'tachyons';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
