// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Head from 'next/head';

const texts = [
  "L'avenir du cloud commence avec vous.",
  "Optimisez vos projets avec une infrastructure cloud puissante.",
  "Fiabilité, sécurité, et innovation à chaque étape.",
  "Un cloud pensé pour les créateurs d'aujourd'hui et de demain.",
  "Le cloud n'a jamais été aussi simple et performant.",
  "Connectez-vous à l'avenir avec UnixoCloud.",
  "Sécurité renforcée, performances inégalées.",
  "Transformez vos idées en réalité avec une infrastructure flexible.",
  "Votre potentiel, notre cloud.",
  "Prêt à repousser les limites du cloud computing ?",
  "Puissance et sécurité, au service de votre réussite.",
  "Un cloud qui s'adapte à vos besoins, en toute confiance.",
  "Accélérez votre croissance avec une infrastructure évolutive.",
  "Innovation, performance, et simplicité en un seul service.",
  "Le cloud qui propulse vos projets vers l'infini."
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialisation du mode sombre selon les préférences système ou locales
    const darkModePreference = localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(darkModePreference);
    document.documentElement.classList.toggle('dark', darkModePreference);
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    document.documentElement.classList.toggle('dark', newDarkModeState);
    localStorage.setItem('darkMode', newDarkModeState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
      <Head>
        <title>UnixoCloud - Hébergement</title>
      </Head>
      {/* Navbar */}
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} className="relative z-10" />

      {/* Section de bannière */}
      <div className="bg-banner flex flex-col items-center justify-center h-screen text-center px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenue sur <span className="text-white">Unixo<span className="text-[#000000] dark:text-white">Cloud</span></span>
        </motion.h1>

        <motion.p
          key={index}
          className="text-lg md:text-xl mb-8 max-w-lg text-gray-200 min-h-[60px] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {texts[index]}
        </motion.p>

        <Link to="offersSection" smooth={true} duration={800}>
          <motion.button
            className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Découvrir nos services
          </motion.button>
        </Link>
      </div>

      {/* Effet d'animation en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-80 h-80 bg-indigo-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Section des offres */}
      <div id="offersSection" className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">Nos Offres</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 dark:text-gray-300">Offre 1</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Description de l'offre 1...</p>
            <button className="px-4 py-2 bg-indigo-500 dark:bg-indigo-600 text-white rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors">
              En savoir plus
            </button>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 dark:text-gray-300">Offre 2</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Description de l'offre 2...</p>
            <button className="px-4 py-2 bg-indigo-500 dark:bg-indigo-600 text-white rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors">
              En savoir plus
            </button>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 dark:text-gray-300">Offre 3</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Description de l'offre 3...</p>
            <button className="px-4 py-2 bg-indigo-500 dark:bg-indigo-600 text-white rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
