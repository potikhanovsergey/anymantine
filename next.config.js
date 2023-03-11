// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  images: {
    domains: ["vercel.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = withBlitz(config)
