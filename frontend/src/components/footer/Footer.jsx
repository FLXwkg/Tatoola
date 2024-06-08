// src/components/Footer.jsx
import React from 'react';
import { Link } from '@nextui-org/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: contact@tattoola.com</p>
            <p>Téléphone: +33 1 23 45 67 89</p>
            <p>Adresse: 123 Rue de Tattoo, Paris, France</p>
          </div>

          {/* Section Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">Accueil</Link>
              </li>
              <li>
                <Link href="/tattoo-finder" className="hover:text-gray-300">Trouver un tatoueur</Link>
              </li>
              <li>
                <Link href="/tattoo-mag" className="hover:text-gray-300">TattooMag</Link>
              </li>
              <li>
                <Link href="/tattoo-view" className="hover:text-gray-300">TattooView</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Section Réseaux sociaux */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gray-300">
                <FaFacebook size="24" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FaTwitter size="24" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FaInstagram size="24" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-indigo-500 pt-4 text-center">
          <p>&copy; 2024 Tattoola. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
