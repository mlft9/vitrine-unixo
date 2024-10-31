// pages/minecraft/Minecraft.js
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Switch from 'react-switch';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Accordion, AccordionItem, AccordionTrigger, AccordionHeader, AccordionContent } from '@radix-ui/react-accordion';
import Head from 'next/head';
import Link from 'next/link';

// Offres pour les serveurs Minecraft
const javaOffers = [
    {
        id: 1,
        name: 'Java Standard',
        price: '€19.99',
        description: 'Serveur Java basique pour jouer avec des amis.',
        features: [
            'Jusqu\'à 20 joueurs',
            'Support moddé',
            'Hébergement SSD',
        ],
        link: '/checkout/java-standard'
    },
    {
        id: 2,
        name: 'Java Premium',
        price: '€39.99',
        description: 'Serveur Java avec plus de puissance et de stockage.',
        features: [
            'Jusqu\'à 50 joueurs',
            'Support moddé complet',
            'Hébergement NVMe rapide',
            'Assistance prioritaire',
        ],
        link: '/checkout/java-premium'
    },
];

const bedrockOffers = [
    {
        id: 1,
        name: 'Bedrock Standard',
        price: '€14.99',
        description: 'Serveur Bedrock standard pour les joueurs mobiles et consoles.',
        features: [
            'Jusqu\'à 10 joueurs',
            'Hébergement SSD',
            'Accès rapide',
        ],
        link: '/checkout/bedrock-standard'
    },
    {
        id: 2,
        name: 'Bedrock Premium',
        price: '€29.99',
        description: 'Serveur Bedrock haute performance pour plus de joueurs.',
        features: [
            'Jusqu\'à 30 joueurs',
            'Hébergement NVMe',
            'Assistance prioritaire',
            'Protection DDoS avancée',
        ],
        link: '/checkout/bedrock-premium'
    },
];

export default function Minecraft() {
    const [isJava, setIsJava] = useState(true); // État pour choisir entre Java et Bedrock
    const selectedOffers = isJava ? javaOffers : bedrockOffers;

    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>Offres Minecraft - Unixo</title>
            </Head>
            <Navbar />

            {/* Titre et Switch Java/Bedrock */}
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-8">Nos Offres Minecraft</h1>
                <div className="flex items-center justify-center space-x-4 mb-8">
                    <span>Java</span>
                    <Switch
                        onChange={() => setIsJava(!isJava)}
                        checked={!isJava}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#4A90E2"
                    />
                    <span>Bedrock</span>
                </div>

                {/* Affichage des offres en fonction du choix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {selectedOffers.map((offer) => (
                        <motion.div
                            key={offer.id}
                            className="bg-white p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
                            <p className="text-lg font-bold text-indigo-600 mb-4">{offer.price}</p>
                            <p className="text-gray-600 mb-4">{offer.description}</p>
                            <ul className="mb-4 space-y-2">
                                {offer.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="material-icons text-indigo-600 mr-2">check_circle</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={offer.link} passHref>
                                <motion.button
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Acheter Maintenant
                                </motion.button>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Comparaison des fonctionnalités */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Comparaison des Fonctionnalités</h2>
                    <div className="overflow-x-auto px-4">
                        <table className="w-full max-w-2xl mx-auto bg-white rounded-md border border-gray-200">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="p-3 text-sm font-medium text-gray-600 text-left">Fonctionnalité</th>
                                    <th className="p-3 text-sm font-medium text-gray-600 text-center">Java</th>
                                    <th className="p-3 text-sm font-medium text-gray-600 text-center">Bedrock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="p-3 text-gray-700 border-t border-gray-200 text-sm">Mods</td>
                                    <td className="p-3 text-center border-t border-gray-200 align-middle">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mx-auto" />
                                    </td>
                                    <td className="p-3 text-center border-t border-gray-200 align-middle">
                                        <XCircleIcon className="h-5 w-5 text-red-500 mx-auto" />
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="p-3 text-gray-700 border-t border-gray-200 text-sm">Cross-platform</td>
                                    <td className="p-3 text-center border-t border-gray-200 align-middle">
                                        <XCircleIcon className="h-5 w-5 text-red-500 mx-auto" />
                                    </td>
                                    <td className="p-3 text-center border-t border-gray-200 align-middle">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mx-auto" />
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="p-3 text-gray-700 border-t border-gray-200 text-sm">Plugins</td>
                                    <td className="p-3 text-center border-t border-gray-200 align-middle">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mx-auto" />
                                    </td>
                                    <td className="p-3 text-center border-t border-gray-200 align-middle">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mx-auto" />
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="p-3 text-gray-700 border-t border-gray-200 text-sm">Redstone Avancé</td>
                                    <td className="p-3 text-center border-t border-gray-200 align-middle">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mx-auto" />
                                    </td>
                                    <td className="p-3 text-center border-t border-gray-200 align-middle">
                                        <XCircleIcon className="h-5 w-5 text-red-500 mx-auto" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
