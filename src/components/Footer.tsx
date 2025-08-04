import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>For further information, to sign up for notification of future events or to just say hello please email <a href="mailto:southpoolskeptics@gmail.com">southpoolskeptics@gmail.com</a></p>
      <p>&copy; {new Date().getFullYear()} South Pool Skeptics. All rights reserved.</p>
    </footer>
  );
};

export default Footer;