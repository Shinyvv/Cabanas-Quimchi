/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cabañasplayaguardiamo.cl', // Usar la versión con ñ
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/500'], // Excluye páginas de error
      },
    ],
    additionalSitemaps: [
      'https://cabañasplayaguardiamo.cl/sitemap.xml', // Canonical con ñ
    ],
  },
  exclude: [
    '/server-sitemap.xml', 
    '/404',
    '/500',
    '/icon.svg',
    '/favicon.ico'
  ],
  // Opcional: Prioridad y frecuencia de rastreo
  changefreq: 'weekly',
  priority: 0.7,
}