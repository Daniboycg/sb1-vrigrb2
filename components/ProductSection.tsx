'use client';

import { useState } from 'react';
import { Brain, Workflow, Search, Zap } from 'lucide-react';
import { Card } from './ui/card';

const features = [
  {
    id: "ia",
    icon: <Brain className="w-6 h-6" />,
    title: "IA Avanzada",
    description: "Nuestro cerebro artificial aprende continuamente de tus interacciones, mejorando su capacidad para organizar y conectar información.",
    details: [
      "Procesamiento de lenguaje natural avanzado",
      "Aprendizaje personalizado",
      "Sugerencias contextuales inteligentes",
      "Análisis predictivo de necesidades"
    ]
  },
  {
    id: "organization",
    icon: <Workflow className="w-6 h-6" />,
    title: "Organización Inteligente",
    description: "Sistema de organización que evoluciona con tu contenido, creando conexiones significativas automáticamente.",
    details: [
      "Categorización automática de contenido",
      "Enlaces contextuales dinámicos",
      "Etiquetado inteligente",
      "Jerarquías adaptativas"
    ]
  },
  {
    id: "search",
    icon: <Search className="w-6 h-6" />,
    title: "Búsqueda Semántica",
    description: "Encuentra exactamente lo que necesitas, incluso cuando no recuerdas las palabras exactas.",
    details: [
      "Búsqueda por concepto",
      "Filtros contextuales",
      "Resultados predictivos",
      "Histórico de búsquedas inteligente"
    ]
  }
];

const ProductSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Una Nueva Era de Organización Digital
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          ArtificialBrain revoluciona la forma en que interactúas con tu información digital,
          combinando la potencia de la IA con una organización intuitiva.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center space-x-4 bg-black/20 backdrop-blur-sm p-2 rounded-lg">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeFeature === feature.id
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-white/10'
              }`}
            >
              {feature.icon}
              <span className="hidden md:inline">{feature.title}</span>
            </button>
          ))}
        </div>

        {features.map((feature) => (
          <div
            key={feature.id}
            className={`transition-all duration-300 ${
              activeFeature === feature.id ? 'opacity-100' : 'hidden'
            }`}
          >
            <Card className="bg-black/20 backdrop-blur-sm border-gray-800">
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      {feature.icon}
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-purple-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-full min-h-[300px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 relative">
                        {feature.icon}
                        <div className="absolute inset-0 bg-purple-500/20 blur-3xl animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;