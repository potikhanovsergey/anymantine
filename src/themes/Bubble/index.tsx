import {
  MantineThemeOverride,
  Text,
  rem,
  getStylesRef,
  ButtonStylesParams,
  ActionIconStylesParams,
} from "@mantine/core"
import { Open_Sans } from "next/font/google"

export const bubbleFont = Open_Sans({
  variable: "--bubble-font",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  preload: false,
})

const defaultFonts = `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`

const BubbleTheme: MantineThemeOverride = {
  cursorType: "pointer",
  primaryColor: "blue",
  defaultRadius: "md",
  fontFamily: `var(--bubble-font), ${defaultFonts}`,
  headings: {
    fontFamily: `var(--bubble-font), ${defaultFonts}`,
  },
  other: {
    hover: {
      menu: "rgba(0,16,61,.04)",
    },
  },
  shadows: {
    sm: "0 2px 0 0 rgba(0, 0, 0, 0.04)",
    md: "0 4px 32px 0 rgba(0, 0, 0, 0.32)",
    lg: "0 16px 48px 0 rgba(0, 0, 0, 0.48)",
  },
  colors: {
    gray: [
      "#E0E1E6",
      "#e0e1e6",
      "#c3c6cb",
      "#aaadb2",
      "#909398",
      "#797a7f",
      "#5f6266",
      "#474a4d",
      "#313133",
      "#1e1e1f",
    ],
    blue: [
      "#ccdffe",
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
    Loader: {
      defaultProps: {
        color: "violet",
      },
    },
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
            backgroundColor: theme.white,
            color: theme.colors.gray[3],
            border: "1px solid",
            borderColor: theme.colors.gray[3],
            "&:not([data-disabled])": theme.fn.hover({
              borderColor: theme.colors[params.color || theme.primaryColor][3],
              background: theme.colors[params.color || theme.primaryColor][0],
              color: theme.colors[params.color || theme.primaryColor][3],
              // borderColor: theme.colors[params.color || theme.primaryColor][5],
            }),
          },
        }),
      },
    },
    ActionIcon: {
      defaultProps: {
        variant: "primary",
      },
      variants: {
        primary: (theme, params: ActionIconStylesParams) => ({
          root: {
            background: theme.colors[params.color || theme.primaryColor][1],
            border: `1px solid ${theme.black}`,
            color: theme.black,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors[theme.primaryColor][2],
            }),
          },
        }),
        secondary: (theme) => ({
          root: {
            backgroundColor: theme.white,
            border: `1px solid ${theme.black}`,
            color: theme.black,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors[theme.primaryColor][2],
            }),
          },
        }),
      },
    },
    Checkbox: {
      styles: (theme) => ({
        input: {
          backgroundColor: theme.colors[theme.primaryColor][0],
          border: "none",
          ref: getStylesRef("icon"),
          "&:checked": {
            backgroundColor: theme.colors[theme.primaryColor][0],
            border: "none",
          },
          "&:checked+": {
            [`& .${getStylesRef("icon")}`]: {
              color: theme.black,
            },
          },
        },
      }),
    },
    Badge: {
      variants: {
        outline: (theme) => ({
          root: {
            borderColor: theme.black,
            color: theme.black,
            backgroundColor: theme.white,
          },
        }),
      },
    },
    Avatar: {
      defaultProps: {
        radius: 1000,
        children: <Text size="lg">🐶</Text>,
        color: "violet",
      },
    },
    Slider: {
      styles: (theme) => ({
        track: {
          height: "4px",
          "::before": {
            backgroundColor: theme.white,
            border: `1px solid ${theme.black}`,
          },
        },
        markWrapper: {
          transform: "translateY(-25%)",
        },
        mark: {
          border: `1px solid ${theme.black}`,
          backgroundColor: theme.white,
        },
        markFilled: {
          border: `1px solid ${theme.black}`,
          backgroundColor: theme.colors[theme.primaryColor][1],
        },
        bar: {
          backgroundColor: theme.colors[theme.primaryColor][1],
          border: `1px solid ${theme.black}`,
        },
        thumb: {
          backgroundColor: theme.colors[theme.primaryColor][1],
          color: theme.colors[theme.primaryColor][1],
          border: `1px solid ${theme.black}`,
        },
        label: {
          backgroundColor: theme.colors[theme.primaryColor][1],
          color: theme.black,
          border: `1px solid ${theme.black}`,
        },
      }),
    },
    Input: {},
    Select: {
      styles: (theme) => ({
        dropdown: {
          border: 0,
          borderRadius: 0,
          boxShadow: theme.shadows.md,
        },
        itemsWrapper: {
          padding: 0,
        },
        item: {
          borderRadius: 0,
          "&[data-selected]": {
            backgroundColor: theme.white,
            color: theme.black,
            "&:hover": {
              backgroundColor: theme.colors.gray[0],
            },
          },
        },
      }),
    },
    TextInput: {
      styles: (theme) => ({
        input: {
          "&:active, &:focus": {
            borderColor: theme.black,
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
    Paper: {
      defaultProps: {
        p: "lg",
        withBorder: true,
      },
      styles: (theme) => ({
        root: {
          "&[data-with-border]": {
            borderColor: theme.black,
          },
        },
      }),
    },
    Modal: {
      defaultProps: {
        shadow: "xl",
        transitionProps: {
          transition: {
            in: { opacity: 1, transform: "translateY(0)" },
            out: { opacity: 0, transform: "translateY(-30px)" },
            common: { transformOrigin: "top" },
            transitionProperty: "transform, opacity",
          },
          duration: 350,
          timingFunction: "cubic-bezier(.4,0,.2,1)",
        },
      },
      styles: (theme) => ({
        header: {
          zIndex: 100,
        },
        title: {
          fontWeight: 600,
        },
        modal: {
          border: "none",
        },
        close: {
          "&:hover": { background: theme.fn.rgba(theme.colors.dark[5], 0.07) },
          color: theme.colors.dark[5],
        },
      }),
    },
    ScrollArea: {
      defaultProps: {
        type: "never",
      },
      styles: {
        scrollbar: {
          zIndex: 101,
        },
      },
    },
    Progress: {
      styles: (theme) => ({
        root: {
          background: theme.colors.dark[5],
        },
      }),
    },
    Prism: {
      defaultProps: {
        copyLabel: "Скопировать код",
        copiedLabel: "Скопировано",
      },
    },
    Navbar: {
      styles: (theme) => ({
        root: {
          border: 0,
        },
      }),
    },
    Header: {
      styles: (theme) => ({
        root: {
          borderBottom: 0,
        },
      }),
    },
    Accordion: {
      defaultProps: {
        chevron: null,
      },
      styles: (theme) => ({
        content: {
          paddingTop: 0,
        },
        item: {
          border: 0,
        },
        label: {
          fontWeight: 500,
          color: theme.colors.gray[9],
        },
        control: {
          marginBottom: rem(4),
          borderRadius: theme.radius[theme.defaultRadius],
          "&:hover": {
            backgroundColor: theme.other.hover.menu,
          },
        },
      }),
    },
    NavbarLinks: {
      styles: (theme) => ({
        link: {
          // width: "fit-content",
          height: rem(48),
          fontWeight: 500,
          color: theme.colors.gray[9],
          "&[data-active=true]": {
            background: "rgba(0,95,249,.08)",
            color: theme.colors[theme.primaryColor][5],
          },
          "&:not([data-active=true])": {
            "&:hover": {
              background: theme.other.hover.menu,
            },
          },
        },
      }),
    },
  },
  globalStyles: (theme) => ({
    "::selection": {
      background: theme.colors[theme.primaryColor][1],
    },
    body: {
      WebkitFontSmoothing: "antialiased",
    },
  }),
}

export default BubbleTheme
