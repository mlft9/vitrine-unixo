import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaShieldAlt, FaMicrochip, FaDesktop, FaFolder, FaHeadset, FaUsers, FaMemory, FaHdd, FaCloud, FaMapMarkerAlt } from 'react-icons/fa';

const productOptions = [
  {
    id: 1,
    name: 'Serveur de développement',
    price: '4.99€',
    description: 'Idéal pour commencer à développer votre serveur !',
    link: '/checkout/base',
    features: [
      { icon: <FaMicrochip />, text: 'PROCESSEUR' },
      { icon: <FaUsers />, text: 'Idéal pour environ 8 joueurs' },
      { icon: <FaMemory />, text: '4 Go RAM DDR4 ECC' },
      { icon: <FaHdd />, text: '50 Go SSD' },
      { icon: <FaCloud />, text: '10 Gb/s' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
  {
    id: 2,
    name: 'Option Avancée',
    price: '11.99€',
    description: 'Idéal pour les serveurs plus grands avec des fonctionnalités supplémentaires.',
    link: '/checkout/advanced',
    features: [
      { icon: <FaMicrochip />, text: 'PROCESSEUR' },
      { icon: <FaUsers />, text: 'Idéal pour environ 30 joueurs' },
      { icon: <FaMemory />, text: '8 Go RAM DDR4 ECC' },
      { icon: <FaHdd />, text: '100 Go NVMe SSD' },
      { icon: <FaCloud />, text: '10 Gb/s' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
  {
    id: 3,
    name: 'Option Premium',
    price: '39.99€',
    description: 'La meilleure solution pour des performances optimales et une sécurité accrue.',
    link: '/checkout/premium',
    features: [
      { icon: <FaMicrochip />, text: 'PROCESSEUR' },
      { icon: <FaUsers />, text: 'Idéal pour environ 100 joueurs' },
      { icon: <FaMemory />, text: '16 Go RAM DDR4 ECC' },
      { icon: <FaHdd />, text: '200 Go NVMe SSD' },
      { icon: <FaCloud />, text: '10 Gb/s' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
  {
    id: 4,
    name: 'Option Ultra',
    price: '€69.99',
    description: 'Conçu pour les serveurs de grande envergure nécessitant une performance inégalée.',
    link: '/checkout/ultra',
    features: [
      { icon: <FaMicrochip />, text: 'PROCESSEUR' },
      { icon: <FaUsers />, text: 'Idéal pour environ 250 joueurs' },
      { icon: <FaMemory />, text: '32 Go RAM DDR4 ECC' },
      { icon: <FaHdd />, text: '500 Go NVMe SSD' },
      { icon: <FaCloud />, text: '10 Gb/s' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
  {
    id: 5,
    name: 'Serveur Sur-Mesure',
    price: 'Nous contacter',
    description: 'Si les offres ci-dessus ne répondent pas à vos besoins, contactez-nous pour une solution personnalisée.',
    link: '/checkout/ultimate',
    features: [
      { icon: <FaMicrochip />, text: 'Des performances de pointe pour des besoins spécifiques' },
      { icon: <FaUsers />, text: 'Support personnalisé pour votre projet' },
      { icon: <FaMemory />, text: 'RAM extensible' },
      { icon: <FaHdd />, text: 'Stockage personnalisable' },
      { icon: <FaCloud />, text: 'Protection DDoS maximale' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
];

const includedFeatures = [
  { icon: <FaShieldAlt />, title: 'ANTI-DDOS', description: 'Mitigation automatique' },
  { icon: <FaMicrochip />, title: 'AMD RYZEN / EPYC', description: '3.10 / 4.6 GHz' },
  { icon: <FaDesktop />, title: 'PANEL', description: 'Comme si vous étiez sur votre machine' },
  { icon: <FaFolder />, title: 'WEB-FTP', description: 'Explorez et éditez sans logiciel' },
  { icon: <FaHeadset />, title: 'SUPPORT 24/7', description: 'Un support à votre écoute' },
];

export default function FiveM() {
  const [selectedProduct, setSelectedProduct] = useState(productOptions[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
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
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'}`}>
      <Head>
        <title>Offres FiveM - Unixo</title>
      </Head>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      {/* Section Bannière de Service */}
      <motion.div
        className="bg-cover bg-center text-white py-32 dark:bg-gray-800 bg-white"
        style={{ backgroundImage: `url('/fivembanner.png')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Serveurs FiveM</h1>
          <p className="text-lg">Profitez de performances optimales pour vos serveurs GTA V Roleplay avec nos offres adaptées à vos besoins.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 text-center text-black dark:text-gray-200">Nos Offres FiveM</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {productOptions.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`p-6 rounded-lg shadow-lg cursor-pointer ${selectedProduct.id === product.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-black dark:text-white'} hover:bg-indigo-500 dark:hover:bg-indigo-600 transition`}
            >
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-gray-200">{product.name}</h3>
              <p className="text-lg font-bold text-black dark:text-gray-300">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <motion.img
              src="/images/fivem-product.png"
              alt="FiveM Product"
              className="w-full h-auto rounded-lg shadow-lg max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-gray-200">{selectedProduct.name}</h2>
            <p className="text-gray-700 dark:text-gray-400 mb-6">{selectedProduct.description}</p>
            <p className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{selectedProduct.price}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-indigo-600 dark:text-indigo-400 text-lg">{feature.icon}</span>
                  <span className="text-gray-800 dark:text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>
            <a href={selectedProduct.link}>
              <button className="bg-indigo-600 dark:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-800 transition transform hover:scale-105 mt-6">
                {selectedProduct.name === 'Serveur Sur-Mesure' ? 'Nous Contacter' : 'Acheter Maintenant'}
              </button>
            </a>
          </div>
        </div>

        {/* Section des Fonctionnalités Incluses */}
        <div className="bg-indigo-600 dark:bg-indigo-700 text-white py-12 mt-16">
          <h2 className="text-center text-3xl font-bold mb-6">Inclus avec votre serveur GTA V RP</h2>
          <p className="text-indigo-200 dark:text-indigo-300 text-center mb-8">
            Hébergé sur des serveurs de dernière génération pour une expérience optimale. Nous utilisons des processeurs Intel Xeon ou AMD Ryzen, ainsi que des disques SSD ou NVMe à haute performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-16">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="bg-indigo-700 dark:bg-indigo-800 flex items-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-200">
                <span className="text-white text-3xl mr-4">{feature.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-white">{feature.title}</h3>
                  <p className="text-indigo-200 dark:text-indigo-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
