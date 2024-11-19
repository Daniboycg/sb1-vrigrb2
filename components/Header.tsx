'use client';

import { Link } from 'react-scroll';
import { Brain } from 'lucide-react';

const Header = () => {
  const menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'product', label: 'Producto' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'pricing', label: 'Planes' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed w-full z-50 glass-effect">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Brain className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              ArtificialBrain
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-300 text-sm font-medium"
                activeClass="text-purple-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="pricing"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium 
              hover:opacity-90 transition-all duration-300 active:scale-95 
              before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:animate-ping before:opacity-0 hover:before:opacity-100">
              Comenzar Ahora
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;