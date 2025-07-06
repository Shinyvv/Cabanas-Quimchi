/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cabañasplayaguardiamo.cl',
  generateRobotsTxt: true, // (Optional)
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://cabañasplayaguardiamo.cl/sitemap.xml',
    ],
  },
  // ...other options
};