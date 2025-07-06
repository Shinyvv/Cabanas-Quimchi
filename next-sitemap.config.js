const nextConfig = {
  async redirects() {
    return [
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
    ];
  },
  // Resto de tu configuración...
};