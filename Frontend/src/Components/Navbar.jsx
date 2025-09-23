import React, { useState, useEffect } from 'react';
import { Home } from './Home';
import { AboutMe } from './AboutMe';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Services } from './Services';
import { Footer } from './Footer';
import { FaBars, FaTimes } from 'react-icons/fa';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    // Set CSS variables for GitHub theme
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--gh-bg', '#0d1117');
      root.style.setProperty('--gh-nav', '#161b22');
      root.style.setProperty('--gh-card', '#161b22');
      root.style.setProperty('--gh-border', '#30363d');
      root.style.setProperty('--gh-text', '#c9d1d9');
      root.style.setProperty('--gh-link', '#58a6ff');
      root.style.setProperty('--gh-link-hover', '#1f6feb');
      root.style.setProperty('--gh-accent', '#238636');
    } else {
      root.style.setProperty('--gh-bg', '#f6f8fa');
      root.style.setProperty('--gh-nav', '#ffffff');
      root.style.setProperty('--gh-card', '#ffffff');
      root.style.setProperty('--gh-border', '#d0d7de');
      root.style.setProperty('--gh-text', '#24292f');
      root.style.setProperty('--gh-link', '#0969da');
      root.style.setProperty('--gh-link-hover', '#1a7f37');
      root.style.setProperty('--gh-accent', '#2da44e');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const sections = ['Home', 'About', 'Experience', 'Projects', 'Contact', 'Services'];

  return (
    <div className="min-h-screen w-full scroll-smooth" style={{ background: 'var(--gh-bg)' }}>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 shadow-md px-8 py-4 flex justify-between items-center w-full"
        style={{ background: 'var(--gh-nav)', borderBottom: '1px solid var(--gh-border)' }}
      >
        {/* Logo */}
        <div
          className="text-3xl font-extrabold tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer"
          style={{ color: 'var(--gh-link)' }}
        >
          DG
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium" style={{ color: 'var(--gh-text)' }}>
          {sections.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer transition-colors duration-300"
              style={{}}
            >
              <a
                href={`#${item.toLowerCase()}`}
                style={{ color: 'var(--gh-link)' }}
                className="hover:underline"
              >
                {item}
              </a>
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{ background: 'var(--gh-link-hover)' }}
              ></span>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 text-2xl focus:outline-none bg-transparent border-none shadow-none p-0"
          style={{ background: 'none', border: 'none', color: 'var(--gh-link)', boxShadow: 'none' }}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>

        {/* Mobile menu icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} style={{ color: 'var(--gh-link)' }}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul
            className="absolute top-20 left-0 w-full shadow-md px-6 py-4 space-y-4 md:hidden text-lg font-medium z-40"
            style={{ background: 'var(--gh-nav)', color: 'var(--gh-text)', borderBottom: '1px solid var(--gh-border)' }}
          >
            {sections.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full hover:underline"
                  style={{ color: 'var(--gh-link)' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Page Sections */}
      <div id="home"><Home /></div>
      <div id="about"><AboutMe /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};