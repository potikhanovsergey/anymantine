import Bubble, { bubbleFont } from "./bubble"
import { MantineThemeOverride } from "@mantine/core"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import getHyphenCase from "src/helpers/getHyphenCase"
import MobalyticsTheme from "./mobalytics"

export const tokens = ["Colors", "Typography", "Radiuses", "Shadows", "Icons"]

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
  mobalytics: {
    theme: MobalyticsTheme,
    font: {
      nextFont: bubbleFont,
      label: "Karla",
      source: "https://fonts.google.com/specimen/Karla?query=karla",
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
    slug: "mobalytics",
    title: "Mobalytisc",
    colors: ["violet", "yellow"],
    imageUrl:
      "https://media.istockphoto.com/id/1340439185/vector/abstract-geometric-background-mosaic-with-triangle-patterns-purple-gradient.jpg?s=612x612&w=0&k=20&c=VrsH6WHo76uc71l2cDmfE6ihrdM7kzID1FPfDwtK5NU=",
  },
]

export type DesignSystem = (typeof designSystems)[number]

export const themeCards = designSystems.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  imageUrl: theme.imageUrl,
}))

export default designSystems
