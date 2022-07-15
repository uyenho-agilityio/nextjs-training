import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FilterableProductTable from './components/thinking-in-react/FilterableProductTable';
import { PRODUCTS } from './data';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-10')!).render(
  <React.StrictMode>
    <FilterableProductTable products={PRODUCTS} />
  </React.StrictMode>,
);
