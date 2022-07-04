import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';

export const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <NavBar />
      <Hero />
    </header>
  );
};
