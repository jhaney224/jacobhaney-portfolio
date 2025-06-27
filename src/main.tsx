import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/App.css';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import App from './App.tsx';
import registerPlugins from './gsapUtils.tsx';

// Initialize GSAP plugins
registerPlugins();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar brandName='Jacob Haney' imageSrcPath='/jhlogo.png'/>
    <main>
      <App/>
    </main>
    <Footer/>
  </StrictMode>,
)
