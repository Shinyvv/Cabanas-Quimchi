/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://xn--cabaasplayaguardiamo-66b.cl', // Usar Punycode aquí
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      'https://xn--cabaasplayaguardiamo-66b.cl/sitemap.xml', // Punycode
    ],
  },
  // Transforma las URLs en el sitemap para mostrar ñ a usuarios:
  transform: async (config, path) => {
    return {
      loc: path.replace(
        'https://xn--cabaasplayaguardiamo-66b.cl',
        'https://cabañasplayaguardiamo.cl' // Versión con ñ visible
      ),
      changefreq: 'weekly',
      priority: 0.7,
    };
  },
};