const { withContentlayer } = require('next-contentlayer')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Content Security Policy (CSP) rules
const ContentSecurityPolicy = `
  default-src 'self'; // Default source is the same origin
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is; // Allow scripts from specific sources
  style-src 'self' 'unsafe-inline'; // Allow inline styles
  img-src * blob: data:; // Allow loading images from any source, blob, or data URIs
  media-src *.s3.amazonaws.com; // Allow loading media from S3 AWS
  connect-src *; // Allow connections to any origin
  font-src 'self'; // Allow loading fonts from the same origin
  frame-src giscus.app // Allow embedding content from giscus.app in iframes
`

// Security headers
const securityHeaders = [
  // Content Security Policy (CSP) header
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // Referrer Policy header
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // X-Frame-Options header
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // X-Content-Type-Options header
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // X-DNS-Prefetch-Control header
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Strict Transport Security header
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // Permissions Policy header
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]

  return plugins.reduce((acc, next) => next(acc), {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    // Allow loading images from the 'picsum.photos' domain
    images: {
      domains: ['picsum.photos'],
    },
    // Security headers
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ]
    },
    // Webpack configuration for SVG files
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
}
