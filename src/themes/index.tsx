import Marshmallow from "./Marshmallow"
import Geist from "./Geist"

const themes = [
  {
    slug: "marshmallow",
    theme: Marshmallow,
    title: "Marshmallow",
    caption: "Marshadow",
  },
  {
    slug: "geist",
    theme: Geist,
    title: "Geist",
    caption: "Vercel",
  },
]

export const themeCards = themes.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  caption: theme.caption,
}))

export default themes
