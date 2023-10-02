import {
  NavLink,
  ActionIcon,
  AppShellHeader,
  AppShellNavbar,
  Button,
  Input,
  VariantColorsResolver,
  createTheme,
  darken,
  defaultVariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  Avatar,
  Checkbox,
  Switch,
  Badge,
  Skeleton,
  Radio,
  Card,
  SegmentedControl,
  Paper,
  Stack,
  Group,
  AppShellFooter,
} from "@mantine/core"

import ButtonClasses from "./Button/Button.module.css"
import InputClasses from "./Input/Input.module.css"
import NavLinkClasses from "./NavLink/NavLink.module.css"

import { Karla } from "next/font/google"

/* The theme can be found here:
  "https://fonts.google.com/specimen/Karla?query=karla" */
export const bubbleFont = Karla({
  variable: "--bubble-font",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  preload: false,
})

const defaultFonts = `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  })

  if (input.variant === "primary") {
    return {
      background: parsedColor.value,
      hover: darken(parsedColor.value, 0.15),
      border: `${rem(1)} solid ${parsedColor.value}`,
      color: input.theme.white,
    }
  }

  if (input.variant === "secondary") {
    return {
      background: input.theme.white,
      hover: rgba(parsedColor.value, 0.25),
      border: `${rem(1)} solid ${parsedColor.value}`,
      color: parsedColor.value,
    }
  }

  return defaultResolvedColors
}

const BubbleTheme = createTheme({
  cursorType: "pointer",
  primaryColor: "blue",
  defaultRadius: "md",
  primaryShade: 5,
  other: {
    buttonVariants: ["primary", "secondary"],
  },
  fontFamily: `${bubbleFont.style.fontFamily}, ${defaultFonts}`,
  headings: {
    fontFamily: `${bubbleFont.style.fontFamily}, ${defaultFonts}`,
  },
  colors: {
    gray: [
      "#F3F3F5",
      "#E6E7EB",
      "#D9DCE0",
      "#CED1D6",
      "#B9BCC1",
      "#A4A7AC",
      "#909398",
      "#7E7F84",
      "#5F6266",
      "#525357",
    ],
    dark: [
      "#9fa2a7",
      "#909398",
      "#797a7f",
      "#57585c",
      "#474a4d",
      "#363638",
      "#2c2d2e",
      "#19191a",
      "#0f0f0f",
      "#050505",
    ],
    blue: [
      "#edf2ff",
      "#99bffd",
      "#669ffb",
      "#4d8ffb",
      "#1a6ffa",
      "#005FF9",
      "#0056e0",
      "#0043ae",
      "#00307d",
      "#001c4b",
    ],
  },
  variantColorResolver,
  components: {
    Stack: Stack.extend({
      defaultProps: {
        gap: "sm",
      },
    }),
    Group: Group.extend({
      defaultProps: {
        gap: "sm",
      },
    }),
    Button: Button.extend({
      classNames: ButtonClasses,
      defaultProps: {
        variant: "primary",
        loaderProps: {
          size: 16,
        },
      },
    }),
    ActionIcon: ActionIcon.extend({
      classNames: ButtonClasses,
      defaultProps: {
        variant: "primary",
      },
    }),
    Avatar: Avatar.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        color: "blue",
      },
    }),
    AppShellNavbar: AppShellNavbar.extend({
      defaultProps: {
        withBorder: false,
      },
    }),
    AppShellHeader: AppShellHeader.extend({
      defaultProps: {
        withBorder: false,
      },
    }),
    AppShellFooter: AppShellFooter.extend({
      defaultProps: {
        withBorder: false,
      },
    }),
    Input: Input.extend({
      classNames: InputClasses,
    }),
    NavLink: NavLink.extend({
      classNames: NavLinkClasses,
    }),
    Checkbox: Checkbox.extend({
      defaultProps: {
        radius: "sm",
      },
    }),
    Switch: Switch.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Skeleton: Skeleton.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Radio: Radio.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Card: Card.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
  },
})

export default BubbleTheme
