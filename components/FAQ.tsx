'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "¿Qué es un Second Brain?",
    answer: "Un Second Brain es un sistema de organización digital que te permite almacenar, organizar y acceder a toda tu información digital de manera eficiente, funcionando como una extensión de tu memoria natural."
  },
  {
    question: "¿Cuál es la diferencia entre ArtificialBrain y un Second Brain?",
    answer: "Mientras un Second Brain es un sistema pasivo de organización, ArtificialBrain incorpora inteligencia artificial que activamente comprende, conecta y mejora tu contenido digital. No solo almacena información, sino que aprende de ella para ofrecerte insights y conexiones que no habías considerado."
  },
  {
    question: "¿Mis datos personales están seguros?",
    answer: "Sí, tu seguridad es nuestra prioridad. Implementamos encriptación de nivel empresarial, autenticación de dos factores y seguimos los más altos estándares de seguridad en la industria. Además, tus datos nunca son compartidos con terceros y mantenemos copias de seguridad regulares."
  },
  {
    question: "¿Puedo integrarlo con otras herramientas?",
    answer: "Sí, ArtificialBrain está diseñado para integrarse perfectamente con tus herramientas digitales existentes a través de nuestra API completa y sistema de integración, permitiéndote mantener tu flujo de trabajo actual."
  }
];

const FAQ = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-700 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm px-6"
          >
            <AccordionTrigger className="text-lg font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;