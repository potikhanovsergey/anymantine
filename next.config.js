// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  images: {
    domains: [
      "cdn.dribbble.com",
      "messy.com.au",
      "paradigm.mail.ru",
      "i.pinimg.com",
      "t3.ftcdn.net",
      "img.freepik.com",
      "static.vecteezy.com",
      "t4.ftcdn.net",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = withBlitz(config)
