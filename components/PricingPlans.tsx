'use client';

import { Check } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const plans = [
  {
    name: 'Personal',
    price: '9.99',
    description: 'Perfecto para uso individual',
    features: [
      'Almacenamiento ilimitado',
      'Asistente IA básico',
      'Integración con 3 apps',
      'Exportación de datos',
    ],
    priceId: 'price_personal'
  },
  {
    name: 'Profesional',
    price: '19.99',
    description: 'Para profesionales exigentes',
    features: [
      'Todo lo del plan Personal',
      'Asistente IA avanzado',
      'Integración con apps ilimitadas',
      'API personalizada',
      'Soporte prioritario'
    ],
    popular: true,
    priceId: 'price_professional'
  },
  {
    name: 'Empresa',
    price: '49.99',
    description: 'Solución completa para equipos',
    features: [
      'Todo lo del plan Profesional',
      'Panel de administración',
      'Usuarios ilimitados',
      'Soporte 24/7',
      'Implementación personalizada'
    ],
    priceId: 'price_enterprise'
  }
];

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PricingPlans = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string) => {
    try {
      setIsLoading(priceId);
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la sesión de pago');
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Error al cargar Stripe');
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });
      
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      alert('Hubo un error al procesar el pago. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl p-8 ${
            plan.popular
              ? 'bg-gradient-to-b from-purple-600 to-pink-600 shadow-xl scale-105'
              : 'bg-black/40 backdrop-blur-sm'
          }`}
        >
          {plan.popular && (
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-400 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Más Popular
            </span>
          )}
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-400 ml-2">/mes</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleSubscribe(plan.priceId)}
            disabled={isLoading !== null}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
              plan.popular
                ? 'bg-white text-purple-600 hover:bg-gray-100'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90'
            } ${isLoading === plan.priceId ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isLoading === plan.priceId ? 'Procesando...' : 'Comenzar Ahora'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;