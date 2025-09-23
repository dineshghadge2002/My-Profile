import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer style={{ background: 'var(--gh-nav)', color: 'var(--gh-text)', borderTop: '1px solid var(--gh-border)' }} className="py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left: Brand Info */}
        <div>
          <h2 className="text-xl font-bold" style={{ color: 'var(--gh-link)' }}>Dinesh Ghadge</h2>
          <p className="text-sm mt-1">Aspiring ML Engineer & Data Scientist</p>
        </div>

        {/* Center: Links */}
        <div className="space-x-6 text-sm">
          <a href="#home" style={{ color: 'var(--gh-link)' }} className="hover:underline">Home</a>
          <a href="#projects" style={{ color: 'var(--gh-link)' }} className="hover:underline">Projects</a>
          <a href="#services" style={{ color: 'var(--gh-link)' }} className="hover:underline">Services</a>
          <a href="#contact" style={{ color: 'var(--gh-link)' }} className="hover:underline">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/dineshghadge2002" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl" style={{ color: 'var(--gh-link)' }} />
          </a>
          <a href="https://linkedin.com/in/dinesh-ghadge-05may02/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl" style={{ color: 'var(--gh-link)' }} />
          </a>
          <a href="mailto:dghadge2002@gmail.com">
            <FaEnvelope className="text-xl" style={{ color: 'var(--gh-link)' }} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm mt-6 border-t pt-4" style={{ color: 'var(--gh-border)', borderTop: '1px solid var(--gh-border)' }}>
        © {new Date().getFullYear()} Dinesh Ghadge. All rights reserved.
      </div>
    </footer>
  );
};
