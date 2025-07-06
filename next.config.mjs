/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: false, // Importante: debe ser false
  env: {
    SITE_URL: 'https://cabañasplayaguardiamo.cl',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-netlify-redirect-override',
            value: 'manual' // Esto desactiva las redirecciones automáticas de Netlify
          },
          {
            key: 'Cache-Control',
            value: 'no-cache'
          }
        ],
      },
    ]
  },
  async redirects() {
    return []
  }
}

export default nextConfig