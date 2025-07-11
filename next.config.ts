import type { NextConfig } from "next";
import withPlaiceholder from '@plaiceholder/next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        port: '',
        pathname: '/**', // matches any path under media2.dev.to
      },
    ]
  }
};

export default withPlaiceholder(nextConfig);
