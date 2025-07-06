/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Necesario para despliegues estáticos en Netlify
  },
  trailingSlash: false, // Cambiado a false para evitar conflictos con Netlify
  env: {
    SITE_URL: 'https://cabañasplayaguardiamo.cl',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests"
          },
          // Cabecera crucial para resolver el bucle de redirección
          {
            key: 'x-netlify-redirect-override',
            value: 'manual' // Desactiva redirecciones automáticas de Netlify
          }
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Redirección para versión Punycode
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'xn--cabaasplayaguardiamo-66b.cl',
          },
        ],
        destination: 'https://cabañasplayaguardiamo.cl/:path*',
        permanent: true,
      },
      // Redirección para versión sin ñ
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'cabanasplayaguardiamo.cl',
          },
        ],
        destination: 'https://cabañasplayaguardiamo.cl/:path*',
        permanent: true,
      },
      // Redirección adicional para evitar bucles
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'cabañasplayaguardiamo.cl',
          },
        ],
        destination: '/',
        permanent: false,
      }
    ]
  },
  // Nueva configuración para manejar el prefijo de ruta en Netlify
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

export default nextConfig