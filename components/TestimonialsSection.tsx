'use client';

import { Card } from "./ui/card";

const testimonials = [
  {
    name: "María González",
    role: "Investigadora Académica",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    content: "ArtificialBrain ha transformado completamente mi proceso de investigación. La capacidad de conectar automáticamente conceptos relacionados me ha ayudado a descubrir patrones que antes pasaba por alto."
  },
  {
    name: "Carlos Rodríguez",
    role: "Emprendedor Digital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    content: "La integración de IA es impresionante. No solo organiza mi información, sino que también aprende de mis hábitos y me sugiere conexiones relevantes. Es como tener un asistente personal que realmente entiende mis necesidades."
  },
  {
    name: "Ana Martínez",
    role: "Escritora Freelance",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    content: "Como escritora, necesito acceso rápido a mis investigaciones y notas. ArtificialBrain no solo mantiene todo organizado, sino que también me sugiere referencias relevantes mientras escribo."
  },
  {
    name: "David Torres",
    role: "Gerente de Proyecto",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    content: "La capacidad de ArtificialBrain para manejar múltiples proyectos y mantener todo conectado de manera significativa es increíble. Ha mejorado significativamente la eficiencia de nuestro equipo."
  }
];

const TestimonialsSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Experiencias Reales
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Descubre cómo ArtificialBrain está transformando la manera en que las personas
          organizan y aprovechan su conocimiento digital.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-black/20 backdrop-blur-sm border-gray-800 p-6">
            <div className="flex flex-col h-full space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-300 flex-grow">
                "{testimonial.content}"
              </blockquote>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;