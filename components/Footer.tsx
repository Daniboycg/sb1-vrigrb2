'use client';

import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/30 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              ArtificialBrain
            </h3>
            <p className="text-gray-400 max-w-md">
              Transforma tu vida digital con organización potenciada por IA
            </p>
            <p className="text-gray-400 mt-2">
              Contacto: cognitiveds.ai@gmail.com
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Daniboycg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-carreong/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} ArtificialBrain. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;