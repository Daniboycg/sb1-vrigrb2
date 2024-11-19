# ArtificialBrain - Guía de Configuración Local

## Requisitos Previos

- Node.js 18.17 o superior
- Git
- VSCode
- npm o pnpm (recomendado)

## Pasos de Configuración

1. **Clonar el Repositorio**
```bash
git clone <tu-repositorio>
cd artificial-brain
```

2. **Instalar Dependencias**
```bash
npm install
# o
pnpm install
```

3. **Configurar Variables de Entorno**
Crea un archivo `.env.local` en la raíz del proyecto:
```env
NEXT_PUBLIC_URL=http://localhost:3000
STRIPE_SECRET_KEY=tu_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_stripe_publishable_key
```

4. **Configurar VSCode**
Instala las siguientes extensiones recomendadas:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- PostCSS Language Support

5. **Iniciar el Servidor de Desarrollo**
```bash
npm run dev
# o
pnpm dev
```

## Estructura del Proyecto

```
artificial-brain/
├── app/                    # Rutas y páginas de Next.js
├── components/            # Componentes React reutilizables
├── lib/                   # Utilidades y configuraciones
├── public/               # Archivos estáticos
└── styles/               # Estilos globales
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Inicia el servidor de producción
- `npm run lint`: Ejecuta el linter

## Configuración de Stripe

1. Crea una cuenta en [Stripe](https://stripe.com)
2. Obtén tus claves API desde el dashboard
3. Configura los productos y precios en el dashboard de Stripe
4. Actualiza los `priceId` en `components/PricingPlans.tsx` con los IDs de tus productos

## Notas Importantes

- La aplicación usa Next.js 14 con App Router
- Tailwind CSS para estilos
- shadcn/ui para componentes de UI
- React Scroll para navegación suave
- Stripe para pagos

## Recomendaciones de Desarrollo

1. **Hot Reload**: El servidor de desarrollo incluye hot reload. Los cambios se reflejarán automáticamente.

2. **Componentes**: Mantén los componentes modulares y reutilizables.

3. **Estilos**: Utiliza las clases de Tailwind y mantén la consistencia con el diseño actual.

4. **TypeScript**: Mantén el tipado estricto para mejor mantenibilidad.

## Solución de Problemas

Si encuentras el error "Module not found":
```bash
npm install
# o
pnpm install
```

Para problemas con Stripe:
1. Verifica las variables de entorno
2. Asegúrate de usar los IDs de precio correctos
3. Confirma que tu cuenta de Stripe esté correctamente configurada

## Contribución

1. Crea una rama para tus cambios
2. Sigue las guías de estilo existentes
3. Asegúrate de que los tests pasen
4. Crea un pull request con una descripción clara

## Soporte

Para preguntas o problemas:
- Abre un issue en el repositorio
- Contacta a: cognitiveds.ai@gmail.com