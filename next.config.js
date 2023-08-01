/**
 * @type {import('next').NextConfig}
 */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
let basePath = '/public'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? assetPrefix : './.next',
  basePath: basePath,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
