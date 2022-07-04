import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Header, Product, Management, Pricing, Footer } from '~components';
import '~styles/main.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="container my-4">
      <Header />
      <Product />
      <Management />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
