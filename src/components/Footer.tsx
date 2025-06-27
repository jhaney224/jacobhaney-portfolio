import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {year} Jacob Haney. All rights reserved.</p>
        
        <div className="flex gap-4 mt-4 md:mt-0">
          <a className="hover:scale-105 transition" href="https://github.com/jhaney224" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a className="hover:scale-105 transition" href="https://www.linkedin.com/in/jacobhaney224" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
