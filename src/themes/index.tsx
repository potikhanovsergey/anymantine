import Marshmallow, { marshmallowFont } from "./marshmallow"
import Ghost, { ghostFont } from "./ghost"
import Bubble, { bubbleFont } from "./bubble"
import Ink, { inkFont } from "./ink"
import { MantineThemeOverride } from "@mantine/core"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import getHyphenCase from "src/helpers/getHyphenCase"

export const tokens = ["Colors", "Typography", "Radiuses", "Shadows", "States", "Icons"]

export const atoms = [
  "Button",
  "Anchor",
  "Action Icon",
  "Badge",
  "Checkbox",
  "Radio",
  "Switch",
  "Select",
  "Text Input",
  "Textarea",
  "Skeleton",
  "Tooltip",
  "Paper",
  "Avatar",
  "Slider",
  "Chip",
  "Accordion",
  "Multi Select",
  "Segmented Control",
  "Stepper",
]

export const usage = ["Usage"]

const getDsSubPage = (label: string, type: string) => ({ label, slug: getHyphenCase(label), type })

export const dsSubPages = [
  ...atoms.map((label) => getDsSubPage(label, "atoms")),
  ...tokens.map((label) => getDsSubPage(label, "tokens")),
  ...usage.map((label) => getDsSubPage(label, "usage")),
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
  ink: {
    theme: Ink,
    font: {
      nextFont: inkFont,
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
  // ghost: {
  //   theme: Ghost,
  //   font: {
  //     nextFont: ghostFont,
  //     label: "Inter",
  //     source: "https://fonts.google.com/specimen/Inter?query=inter",
  //   },
  // },
}

const designSystems = [
  {
    slug: "bubble",
    title: "Bubble",
    colors: ["blue", "gray", "dark"],
    imageUrl: "https://paradigm.mail.ru/notionStatic/d6b09a0e-f167-4b18-92a0-b62611c6b536.png",
  },
  {
    slug: "ink",
    title: "Ink",
    colors: ["blue", "gray", "dark"],
    imageUrl: "https://i.pinimg.com/originals/cc/0b/1f/cc0b1f790e16289dd4b605494e5733be.jpg",
  },
  {
    slug: "marshmallow",
    title: "Marshmallow",
    colors: ["dark", "gray", "red", "violet"],
    imageUrl:
      "https://messy.com.au/app/uploads/2020/04/Article_Images-Digital_Design_System-Messy_Collective.jpg",
  },
  // {
  //   slug: "ghost",
  //   title: "Ghost",
  //   colors: ["red", "gray", "dark"],
  //   imageUrl:
  //     "https://cdn.dribbble.com/users/2403087/screenshots/9354743/dashboard_components_dark_4x.png",
  // },
]

export type DesignSystem = (typeof designSystems)[number]

export const themeCards = designSystems.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  imageUrl: theme.imageUrl,
}))

export default designSystems
