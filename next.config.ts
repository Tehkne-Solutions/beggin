import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/premios-beg',
        destination: '/premios',
        permanent: true,
      },
      {
        source: '/historia',
        destination: '/nossa-historia',
        permanent: true,
      },
      {
        source: '/sobre',
        destination: '/nossa-historia',
        permanent: true,
      },
      {
        source: '/experience',
        destination: '/agendamento',
        permanent: true,
      },
      {
        source: '/beg-experience',
        destination: '/agendamento',
        permanent: true,
      },
      {
        source: '/privacidade',
        destination: '/politica-de-privacidade',
        permanent: true,
      },
      {
        source: '/politica',
        destination: '/politica-de-privacidade',
        permanent: true,
      },
      {
        source: '/termos',
        destination: '/termos-de-uso',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
