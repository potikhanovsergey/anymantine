import Marshmallow, { marshmallowFont } from "./Marshmallow"
import Ghost, { ghostFont } from "./Ghost"
import Bubble, { bubbleFont } from "./Bubble"

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
    slug: "anchor",
    label: "Anchor",
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
    label: "Paper",
  },
  {
    slug: "avatar",
    label: "Avatar",
  },
  {
    slug: "slider",
    label: "Slider",
  },
  {
    slug: "chip",
    label: "Chip",
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
  bubble: { theme: Bubble, font: bubbleFont },
  marshmallow: { theme: Marshmallow, font: marshmallowFont },
  ghost: { theme: Ghost, font: ghostFont },
}

const designSystems = [
  {
    slug: "bubble",
    title: "Bubble",
    colors: ["blue", "gray", "dark"],
    imageUrl: "https://paradigm.mail.ru/notionStatic/d6b09a0e-f167-4b18-92a0-b62611c6b536.png",
  },
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
    colors: ["red", "gray", "dark"],
    imageUrl:
      "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1671111035%2Fghost%2Fghost-illustration-light.png&w=1920&q=100",
  },
]

export type DesignSystem = (typeof designSystems)[number]

export const themeCards = designSystems.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  imageUrl: theme.imageUrl,
}))

export default designSystems
