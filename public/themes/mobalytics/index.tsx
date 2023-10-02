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
  Paper,
  Stack,
  Group,
  lighten,
} from "@mantine/core"

// import AppShellClasses from "./AppShell/AppShell.module.css"
import ButtonClasses from "./Button/Button.module.css"
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
      hover: lighten(parsedColor.value, 0.1),
      border: `1px solid transparent`,
      color: input.theme.colors.violet[8],
    }
  }

  if (input.variant === "secondary") {
    return {
      background: "transparent",
      hover: "transparent",
      border: `${rem(1)} solid ${input.theme.colors.violet[4]}`,
      color: input.theme.white,
    }
  }

  return defaultResolvedColors
}

const MobalyticsTheme = createTheme({
  cursorType: "pointer",
  primaryColor: "yellow",
  defaultRadius: "md",
  primaryShade: 4,
  fontFamily: `${mobalyticsFont.style.fontFamily}, ${defaultFonts}`,
  headings: {
    fontFamily: `${mobalyticsFont.style.fontFamily}, ${defaultFonts}`,
  },
  colors,
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
      classNames: ButtonClasses,
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
        variant: "primary",
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
    Paper: Paper.extend({
      defaultProps: {
        withBorder: true,
      },
      styles: (theme) => ({
        root: {
          background: theme.colors.violet[9],
          borderColor: theme.colors.violet[5],
        },
      }),
    }),
  },
})

export default MobalyticsTheme
