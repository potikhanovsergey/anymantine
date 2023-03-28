import Marshmallow, { marshmallowFont } from "./Marshmallow"
import Geist, { geistFont } from "./Geist"

export const tokens = [
  {
    slug: "colors",
    label: "Colors",
  },
  {
    slug: "typography",
    label: "Typography",
  },
  {
    slug: "radiuses-and-shadows",
    label: "Radiuses & Shadows",
  },
  {
    slug: "states",
    label: "States",
  },
  {
    slug: "icons",
    label: "Icons",
  },
]

export const atoms = [
  {
    slug: "button",
    label: "Button",
  },
  {
    slug: "action-icon",
    label: "Action Icon",
  },
  {
    slug: "badge",
    label: "Badge",
  },
  {
    slug: "checkbox",
    label: "Checkbox",
  },
  {
    slug: "radio",
    label: "Radio Button",
  },
  {
    slug: "switch",
    label: "Switch",
  },
  {
    slug: "select",
    label: "Select",
  },
  {
    slug: "input",
    label: "Input",
  },
  {
    slug: "textarea",
    label: "Textarea",
  },
  {
    slug: "skeleton",
    label: "Skeleton",
  },
  {
    slug: "tooltip",
    label: "Tooltip",
  },
  {
    slug: "paper",
    label: "Card",
  },
]

export const usage = [
  {
    slug: "preview",
    label: "Preview",
  },
  {
    slug: "files",
    label: "Files",
  },
]

export const dsSubPages = [
  ...atoms.map((item) => ({ ...item, type: "atoms" })),
  ...tokens.map((item) => ({ ...item, type: "tokens" })),
  ...usage.map((item) => ({ ...item, type: "usage" })),
]

export type DesignSystemSubPage = (typeof dsSubPages)[number]

export const themes = {
  marshmallow: { theme: Marshmallow, font: marshmallowFont },
  ghost: { theme: Geist, font: geistFont },
}

const designSystems = [
  {
    slug: "marshmallow",
    title: "Marshmallow",
    colors: ["dark", "gray", "red", "violet"],
    imageUrl:
      "https://messy.com.au/app/uploads/2020/04/Article_Images-Digital_Design_System-Messy_Collective.jpg",
  },
  {
    slug: "ghost",
    title: "Ghost",
    colors: ["red", "dark"],
    imageUrl:
      "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1671111035%2Fgeist%2Fgeist-illustration-light.png&w=1920&q=100",
  },
]

export type DesignSystem = (typeof designSystems)[number]

export const themeCards = designSystems.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  imageUrl: theme.imageUrl,
}))

export default designSystems
