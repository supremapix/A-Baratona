import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// After React has successfully rendered, hide the loading screen
window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    // Small delay to ensure everything is really painted
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 300);
  }
});