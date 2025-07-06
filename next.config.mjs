/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Necesario para despliegues estáticos (como Netlify)
  },
  // --- Nuevas configuraciones añadidas ---
  trailingSlash: true, // Para consistencia en URLs
  env: {
    SITE_URL: 'https://cabañasplayaguardiamo.cl', // Variable de entorno con ñ
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests" // Fuerza HTTPS
          }
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'xn--cabaasplayaguardiamo-66b.cl', // Redirige Punycode
          },
        ],
        destination: 'https://cabañasplayaguardiamo.cl/:path*',
        permanent: true, // 301
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'cabanasplayaguardiamo.cl', // Redirige versión sin ñ
          },
        ],
        destination: 'https://cabañasplayaguardiamo.cl/:path*',
        permanent: true, // 301
      },
    ]
  }
}

export default nextConfig