import Marshmallow from "./Marshmallow"
import Geist from "./Geist"

const themes = [
  {
    slug: "marshmallow",
    theme: Marshmallow,
    title: "Marshmallow",
    caption: "Marshadow",
    imageUrl:
      "https://t3.ftcdn.net/jpg/01/14/94/70/360_F_114947051_ZedDWoCQXNK9CioGMIYLrHr8M5Xs7gRW.jpg",
  },
  {
    slug: "geist",
    theme: Geist,
    title: "Geist",
    caption: "Vercel",
    imageUrl:
      "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1671111035%2Fgeist%2Fgeist-illustration-light.png&w=1920&q=100",
  },
]

export const themeCards = themes.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  caption: theme.caption,
  imageUrl: theme.imageUrl,
}))

export default themes
