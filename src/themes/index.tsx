import Marshmallow, { marshmallowFont } from "./marshmallow"
import Ghost, { ghostFont } from "./ghost"
import Bubble, { bubbleFont } from "./bubble"
import { MantineThemeOverride } from "@mantine/core"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"

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
    slug: "radiuses",
    label: "Radiuses",
  },
  {
    slug: "shadows",
    label: "Shadows",
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
  {
    slug: "accordion",
    label: "Accordion",
  },
]

export const usage = [
  {
    slug: "usage",
    label: "Usage",
  },
]

export const dsSubPages = [
  ...atoms.map((item) => ({ ...item, type: "atoms" })),
  ...tokens.map((item) => ({ ...item, type: "tokens" })),
  ...usage.map((item) => ({ ...item, type: "usage" })),
]

export type DesignSystemSubPage = (typeof dsSubPages)[number]

export type Theme = {
  theme: MantineThemeOverride
  font: {
    nextFont: NextFontWithVariable
    label: string
    source: string
  }
}

export const themes = {
  bubble: {
    theme: Bubble,
    font: {
      nextFont: bubbleFont,
      label: "Karla",
      source: "https://fonts.google.com/specimen/Karla?query=karla",
    },
  },
  marshmallow: {
    theme: Marshmallow,
    font: {
      nextFont: marshmallowFont,
      label: "Nunito Sans",
      source: "https://fonts.google.com/specimen/Nunito+Sans?query=nunito",
    },
  },
  ghost: {
    theme: Ghost,
    font: {
      nextFont: ghostFont,
      label: "Inter",
      source: "https://fonts.google.com/specimen/Inter?query=inter",
    },
  },
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
      "https://cdn.dribbble.com/users/2403087/screenshots/9354743/dashboard_components_dark_4x.png",
  },
]

export type DesignSystem = (typeof designSystems)[number]

export const themeCards = designSystems.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  imageUrl: theme.imageUrl,
}))

export default designSystems
