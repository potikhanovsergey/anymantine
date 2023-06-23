import Marshmallow, { marshmallowFont } from "./marshmallow"
import Bubble, { bubbleFont } from "./bubble"
import Ink, { inkFont } from "./ink"
import { MantineThemeOverride } from "@mantine/core"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import getHyphenCase from "src/helpers/getHyphenCase"
import Rubick, { rubickFont } from "./rubick"
import Glass, { glassFont } from "./glass"

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

export const molecules = ["Card"]

export const usage = ["Usage"]

const getDsSubPage = (label: string, type: string) => ({ label, slug: getHyphenCase(label), type })

export const dsSubPages = [
  ...atoms.map((label) => getDsSubPage(label, "atoms")),
  ...tokens.map((label) => getDsSubPage(label, "tokens")),
  ...usage.map((label) => getDsSubPage(label, "usage")),
  ...molecules.map((label) => getDsSubPage(label, "molecules")),
]

export type DesignSystemSubPage = (typeof dsSubPages)[number]

export type Theme = {
  theme: MantineThemeOverride
  font?: {
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
      label: "Ubuntu",
      source: "https://fonts.google.com/specimen/Ubuntu",
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
  rubick: {
    theme: Rubick,
    font: {
      nextFont: rubickFont,
      label: "Rubik",
      source: "https://fonts.google.com/specimen/Rubik",
    },
  },
  // titan: {
  //   theme: Titan,
  //   font: null,
  // },
  glass: {
    theme: Glass,
    font: {
      nextFont: glassFont,
      label: "Ubunto",
      source: "https://fonts.google.com/specimen/Ubuntu",
    },
  },
}

const designSystems = [
  {
    slug: "bubble",
    title: "Bubble",
    colors: ["blue", "gray", "dark"],
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/007/000/559/original/blue-gradient-motion-graphic-background-free-video.jpg",
  },
  {
    slug: "ink",
    title: "Ink",
    colors: ["pink", "gray", "dark"],
    imageUrl:
      "https://t4.ftcdn.net/jpg/04/57/83/89/360_F_457838914_PjjQlkR0e6FUT6dgISruUpJRcHm5pFsV.jpg",
  },
  {
    slug: "marshmallow",
    title: "Marshmallow",
    colors: ["dark", "gray", "red", "violet"],
    imageUrl:
      "https://t3.ftcdn.net/jpg/03/51/50/32/360_F_351503287_Zd1eOQk9BlTzHuw24h8TwBje00onZpdz.jpg",
  },
  {
    slug: "rubick",
    title: "Rubick",
    colors: ["dark", "gray", "green"],
    imageUrl:
      "https://img.freepik.com/premium-photo/abstract-grainy-green-gradient-background-bright-stylish-design_573550-689.jpg",
  },
  {
    slug: "glass",
    title: "Glass",
    colors: ["dark", "gray", "violet"],
    imageUrl:
      "https://img.freepik.com/premium-photo/abstract-grainy-green-gradient-background-bright-stylish-design_573550-689.jpg",
  },
  // {
  //   slug: "titan",
  //   title: "Titan",
  //   colors: ["dark", "gray", "yellow"],
  //   imageUrl:
  //     "https://img.freepik.com/free-photo/abstract-solid-shining-yellow-gradient-studio-wall-room-background_1258-88679.jpg?w=2000",
  // },
]

export type DesignSystem = (typeof designSystems)[number]

export const themeCards = designSystems.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  imageUrl: theme.imageUrl,
}))

export default designSystems
