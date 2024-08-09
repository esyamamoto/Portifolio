import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Competence from './components/Competence';
import HamburgerMenu from './components/HamburgerMenu';
import Project from './components/Project';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ThemeSwitch from './components/ThemeSwitch';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark-mode');

  useEffect(() => {
    document.body.className = theme;

    // Adicionar manipulador de clique para o menu
    const hamburger = document.querySelector('.hamburger');
    const navContent = document.querySelector('.nav-content');
    const body = document.body;

    const handleClick = () => {
      hamburger.classList.toggle('active');
      navContent.classList.toggle('active');
      body.classList.toggle('no-scroll');
    };

    hamburger.addEventListener('click', handleClick);

    return () => {
      // Limpar o manipulador de evento quando o componente for desmontado
      hamburger.removeEventListener('click', handleClick);
    };
  }, [theme]);

  const themeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'));
  };

  return (
    <div>
      <ThemeSwitch theme={theme} toggleTheme={themeSwitch} />
      <HamburgerMenu />
      <Banner />
      <Project />
      <Competence />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
