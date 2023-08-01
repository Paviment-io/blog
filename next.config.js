/**
 * @type {import('next').NextConfig}
 */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/out/`
  basePath = `/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? assetPrefix : '',
  basePath: basePath,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
