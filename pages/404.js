// pages/404.js
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';


export default function Custom404() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700 min-h-screen text-white flex flex-col items-center justify-center">
      <Head>
        <title>Oups - UnixoCloud</title>
      </Head>
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Oups ! Page non trouvée.
      </motion.h1>
      <p className="text-lg mb-8 text-gray-200">La page que vous cherchez semble introuvable.</p>
      <Link href="/">
        <motion.button
          className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Retour à l'accueil
        </motion.button>
      </Link>
    </div>
  );
}
