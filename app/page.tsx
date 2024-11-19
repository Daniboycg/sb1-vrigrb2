'use client';

import { Brain, Sparkles, Users, Bot, Database, Lock, Zap } from 'lucide-react';
import PricingPlans from '@/components/PricingPlans';
import ProductSection from '@/components/ProductSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <section id="home" className="section-min-height">
        <div className="container mx-auto px-6 pt-32 pb-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Brain className="w-16 h-16 text-purple-500" />
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Tu Cerebro Digital<br />Potenciado por IA
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Organiza tu vida digital con un asistente inteligente que aprende y evoluciona contigo. 
              Más que un Second Brain, es tu compañero digital del futuro.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a href="#pricing" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-all duration-300">
                Comenzar Ahora
              </a>
              <a href="#product" className="bg-white/10 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300">
                Conoce Más
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Bot className="w-8 h-8 text-purple-500" />,
                title: "IA Avanzada",
                description: "Asistente personal que aprende de tus hábitos y preferencias"
              },
              {
                icon: <Database className="w-8 h-8 text-pink-500" />,
                title: "Organización Inteligente",
                description: "Categorización automática y conexiones entre tu contenido"
              },
              {
                icon: <Lock className="w-8 h-8 text-purple-500" />,
                title: "Seguridad Total",
                description: "Encriptación de nivel militar para tus datos personales"
              },
              {
                icon: <Zap className="w-8 h-8 text-pink-500" />,
                title: "Acceso Instantáneo",
                description: "Encuentra cualquier información en segundos"
              },
              {
                icon: <Users className="w-8 h-8 text-purple-500" />,
                title: "Colaboración",
                description: "Comparte y colabora con tu equipo fácilmente"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-pink-500" />,
                title: "Insights Únicos",
                description: "Descubre conexiones ocultas en tu contenido"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-sm p-6 rounded-xl hover:bg-black/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Video Demo Section */}
          <div className="max-w-4xl mx-auto bg-black/20 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">Mira ArtificialBrain en Acción</h2>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/oEhb9H6kgU8"
                title="ArtificialBrain Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="section-min-height flex items-center justify-center bg-black/20">
        <ProductSection />
      </section>

      <section id="testimonials" className="section-min-height flex items-center justify-center">
        <TestimonialsSection />
      </section>

      <section id="pricing" className="section-min-height flex items-center justify-center bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Planes y Precios
          </h2>
          <PricingPlans />
        </div>
      </section>

      <section id="faq" className="min-h-screen py-20 flex flex-col items-center justify-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Preguntas Frecuentes
          </h2>
          <FAQ />
        </div>
      </section>

      <Footer />
    </main>
  );
}