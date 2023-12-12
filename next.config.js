/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  // enabled: true,
  enabled: false,
  openAnalyzer: true,
})

const nextConfig = withBundleAnalyzer({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            typescript: true,
            expandProps: 'end',
            svgo: false,
          },
        },
      ],
    })
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/recommendations',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
})

module.exports = nextConfig
