import {
  MantineThemeOverride,
  Text,
  rem,
  getStylesRef,
  ButtonStylesParams,
  ActionIconStylesParams,
} from "@mantine/core"
import { Karla } from "next/font/google"

export const inkFont = Karla({
  variable: "--ink-font",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  preload: false,
})

const defaultFonts = `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`

const inkTheme: MantineThemeOverride = {
  cursorType: "pointer",
  primaryColor: "pink",
  colorScheme: "dark",
  defaultRadius: "xs",
  primaryShade: 5,
  fontFamily: `var(--ink-font), ${defaultFonts}`,
  headings: {
    fontFamily: `var(--ink-font), ${defaultFonts}`,
  },
  other: {
    transition: "200ms ease",
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
      "#005FF9", // [5]
      "#0056e0",
      "#0043ae",
      "#00307d",
      "#001c4b",
    ],
  },
  components: {
    Button: {
      defaultProps: {
        loaderPosition: "center",
        variant: "primary",
      },
      variants: {
        primary: (theme, params: ButtonStylesParams) => ({
          root: {
            background: theme.colors[params.color || theme.primaryColor][5],
            color: theme.white,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors[params.color || theme.primaryColor][6],
            }),
          },
        }),
        secondary: (theme, params: ButtonStylesParams) => ({
          root: {
            backgroundColor: theme.black,
            color: theme.colors.dark[3],
            border: "1px solid",
            borderColor: theme.colors.dark[3],
            "&:not([data-disabled])": theme.fn.hover({
              borderColor: theme.white,
              background: theme.black,
              color: theme.white,
            }),
          },
        }),
      },
      styles: (theme, params: ButtonStylesParams, { variant }) => ({
        root: {
          transition: `all ${theme.other.transition}`,
          "&[data-loading]": {
            color: "transparent",
            svg: {
              stroke:
                variant === "transparent" || variant === "secondary"
                  ? theme.colors[params.color || theme.primaryColor][5]
                  : theme.white,
            },
            "&:before": {
              display: "none",
            },
            ".mantine-Button-centerLoader": {
              opacity: 1,
            },
            [`& .${getStylesRef("rightIcon")}, .${getStylesRef("leftIcon")}`]: {
              opacity: 0,
            },
          },
        },
      }),
    },
    ActionIcon: {
      defaultProps: (theme) => ({
        variant: "primary",
        color: theme.primaryColor,
      }),
      variants: {
        primary: (theme, params: ButtonStylesParams) => ({
          root: {
            background: theme.colors[params.color || theme.primaryColor][5],
            color: theme.white,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors[params.color || theme.primaryColor][6],
            }),
          },
        }),
        secondary: (theme, params: ButtonStylesParams) => ({
          root: {
            backgroundColor: theme.white,
            color: theme.colors.dark[3],
            border: "1px solid",
            borderColor: theme.colors.dark[3],
            "&:not([data-disabled])": theme.fn.hover({
              borderColor: theme.colors[params.color || theme.primaryColor][3],
              background: theme.colors[params.color || theme.primaryColor][0],
              color: theme.colors[params.color || theme.primaryColor][3],
            }),
          },
        }),
      },
      styles: (theme, params: ActionIconStylesParams, { variant }) => ({
        root: {
          transition: `all ${theme.other.transition}`,
          "&[data-loading]": {
            color: "transparent",
            svg: {
              "&[data-action-icon-loader]": {
                maxWidth: "60%",
                stroke:
                  variant === "transparent" || variant === "secondary"
                    ? theme.colors[params.color || theme.primaryColor][5]
                    : theme.white,
              },
            },
            "&:before": {
              display: "none",
            },
            ".mantine-Button-centerLoader": {
              opacity: 1,
            },
            [`& .${getStylesRef("rightIcon")}, .${getStylesRef("leftIcon")}`]: {
              opacity: 0,
            },
          },
        },
      }),
    },
    Avatar: {
      defaultProps: {
        children: <Text size="lg">🐶</Text>,
        radius: "xl",
      },
    },
    Paper: {
      defaultProps: {
        p: "lg",
      },
    },
    Select: {
      styles: (theme) => ({
        dropdown: {
          borderRadius: 0,
        },
        itemsWrapper: {
          padding: 0,
        },
        item: {
          borderRadius: 0,
          backgroundColor: theme.colors.dark[6],
          "&:not(&[data-selected])": {
            "&[data-hovered]": {
              backgroundColor: theme.colors.dark[7],
            },
          },
        },
      }),
    },
    Popover: {
      defaultProps: {
        shadow: "md",
      },
      styles: {
        dropdown: {
          border: "none",
        },
      },
    },
    HoverCard: {
      styles: (theme) => ({
        dropdown: {
          borderColor: theme.black,
        },
      }),
    },
    Navbar: {
      styles: (theme) => ({
        root: {
          background: theme.black,
        },
      }),
    },
    Header: {
      styles: (theme) => ({
        root: {
          background: theme.black,
        },
      }),
    },
    Input: {
      defaultProps: {
        variant: "filled",
      },
      variants: {
        filled: (theme) => ({
          input: {
            background: theme.colors.dark[7],
            borderColor: "transparent",
            "&:not(:disabled, [data-invalid])": {
              "&:hover, &:focus-within": {
                background: theme.colors.dark[8],
              },
            },
          },
        }),
      },
      styles: (theme) => ({
        input: {
          borderWidth: rem(2),
          transition: `all ${theme.other.transition}`,
        },
      }),
    },
    NavLink: {
      styles: (theme) => ({
        root: {
          fontWeight: 500,
          borderRadius: theme.radius[theme.defaultRadius],
          color: theme.white,
          backgroundColor: theme.colors.dark[9],
          "&[data-active=true]": {
            background: theme.colors.dark[7],
            color: theme.colors[theme.primaryColor][5],
            "&:hover": {
              background: theme.colors.dark[7],
            },
          },
          "&:not([data-active=true])": {
            "&:hover": {
              background: theme.colors.dark[8],
            },
          },
          "&:not(:last-child)": {
            marginBottom: rem(4),
          },
        },
      }),
    },
    Checkbox: {
      defaultProps: {
        radius: "sm",
      },
    },
    Switch: {
      defaultProps: {
        radius: "xl",
      },
    },
    Badge: {
      defaultProps: {
        radius: "xl",
      },
    },
    Skeleton: {
      defaultProps: {
        radius: "xl",
      },
    },
    Radio: {
      defaultProps: {
        radius: "xl",
      },
    },
    SegmentedControl: {
      defaultProps: (theme) => ({
        color: theme.primaryColor,
      }),
    },
    Tooltip: {
      defaultProps: {
        color: "dark",
        withArrow: true,
      },
    },
  },

  globalStyles: (theme) => ({
    "::selection": {
      background: theme.colors[theme.primaryColor][5],
    },
    body: {
      WebkitFontSmoothing: "antialiased",
      background: theme.black,
      color: theme.white,
    },
  }),
}

export default inkTheme
