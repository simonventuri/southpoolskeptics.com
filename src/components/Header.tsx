import React from 'react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header>
      <img src="/logo.png" alt="South Pool Skeptics Logo" />
      <nav>
        <a href="/" className={location.pathname === '/' ? 'active' : ''}>Home</a>
        <a href="/skepticism" className={location.pathname === '/skepticism' ? 'active' : ''}>What is Scientific Skepticism?</a>
      </nav>
    </header>
  );
};

export default Header;