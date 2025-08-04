import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header>
      <img src="/logo.png" alt="South Pool Skeptics Logo" />
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/skepticism" className={location.pathname === '/skepticism' ? 'active' : ''}>What is Scientific Skepticism?</Link>
      </nav>
    </header>
  );
};

export default Header;