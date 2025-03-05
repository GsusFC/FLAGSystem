/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Configurar rutas de ambiente de producción si es necesario
  // basePath: '/flag-system',
  // Configuración para optimizar la compilación
  swcMinify: true,
  // Otras configuraciones
  compiler: {
    // Remover console.logs en producción
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
