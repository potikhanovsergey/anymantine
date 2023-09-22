import {
  NavLink,
  ActionIcon,
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
  AppShell,
  Tooltip,
} from "@mantine/core"

// import AppShellClasses from "./AppShell/AppShell.module.css"
// import ButtonClasses from "./Button/Button.module.css"
import InputClasses from "./Input/Input.module.css"
import NavLinkClasses from "./NavLink/NavLink.module.css"

import { Roboto } from "next/font/google"
import { colors } from "./colors"

/* The theme can be found here:
  "https://fonts.google.com/specimen/Roboto" */
export const mobalyticsFont = Roboto({
  variable: "--mobalytics-font",
  weight: ["400", "500", "700"],
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

const MobalyticsTheme = createTheme({
  cursorType: "pointer",
  primaryColor: "orange",
  defaultRadius: "md",
  primaryShade: 5,
  fontFamily: `${mobalyticsFont.style.fontFamily}, ${defaultFonts}`,
  headings: {
    fontFamily: `${mobalyticsFont.style.fontFamily}, ${defaultFonts}`,
  },
  colors,
  variantColorResolver,
  components: {
    AppShell: AppShell.extend({
      styles: (theme) => ({
        main: {
          background: theme.colors.violet[8],
        },
        header: {
          background: theme.colors.violet[9],
          borderColor: "#251e47",
        },
        footer: {
          background: theme.colors.violet[9],
          borderColor: "#251e47",
        },
        navbar: {
          background: theme.colors.violet[9],
          borderColor: "#251e47",
        },
      }),
    }),
    Button: Button.extend({
      // classNames: ButtonClasses,
      defaultProps: {
        variant: "primary",
        loaderProps: {
          size: 16,
        },
      },
    }),
    ActionIcon: ActionIcon.extend({
      // classNames: ButtonClasses,
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
    Input: Input.extend({
      classNames: InputClasses,
      // styles: (theme) => ({
      //   input: {
      //     background: theme.white,
      //     color: "#443b6b",
      //   },
      // }),
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
    Tooltip: Tooltip.extend({
      styles: (theme) => ({
        tooltip: {
          background: theme.colors.violet[7],
          color: theme.white,
          border: `${rem("1px")} solid ${theme.colors.violet[5]}`,
        },
      }),
    }),
  },
})

export default MobalyticsTheme
