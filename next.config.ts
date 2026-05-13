import type { NextConfig } from 'next'

// When deploying to GitHub Pages at https://<user>.github.io/<repo>/, the
// CI workflow sets NEXT_PUBLIC_BASE_PATH to "/<repo>" so that all asset URLs
// and links are correctly prefixed. Locally (npm run dev) it stays empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
