import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Gowthaman. Built with React & Tailwind.</p>
    </footer>
  );
};

export default Footer;
