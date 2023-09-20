import {
  Button,
  MantineThemeOverride,
  Text,
  VariantColorsResolver,
  createTheme,
  darken,
  defaultVariantColorsResolver,
  lighten,
  parseThemeColor,
  rem,
  rgba,
  // getStylesRef,
  // ButtonStylesParams,
  // ActionIconStylesParams,
} from "@mantine/core"
import { Karla } from "next/font/google"

import ButtonClasses from "./Button/Button.module.css"

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
  fontFamily: `${bubbleFont.style.fontFamily}, ${defaultFonts}`,
  headings: {
    fontFamily: `${bubbleFont.style.fontFamily}, ${defaultFonts}`,
  },
  other: {
    transition: ".15s ease",
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
  variantColorResolver,
  components: {
    Button: Button.extend({
      classNames: ButtonClasses,
      defaultProps: {
        variant: "primary",
        loaderProps: {
          size: 16,
        },
      },
    }),
    ActionIcon: {
      defaultProps: (theme) => ({
        variant: "primary",
        color: theme.primaryColor,
      }),
      // variants: {
      //   primary: (theme, params: ButtonStylesParams) => ({
      //     root: {
      //       background: theme.colors[params.color || theme.primaryColor][5],
      //       color: theme.white,
      //       "&:not([data-disabled])": theme.fn.hover({
      //         background: theme.colors[params.color || theme.primaryColor][6],
      //       }),
      //     },
      //   }),
      //   secondary: (theme, params: ButtonStylesParams) => ({
      //     root: {
      //       backgroundColor: theme.white,
      //       color: theme.colors.dark[3],
      //       border: "1px solid",
      //       borderColor: theme.colors.dark[3],
      //       "&:not([data-disabled])": theme.fn.hover({
      //         borderColor: theme.colors[params.color || theme.primaryColor][3],
      //         background: theme.colors[params.color || theme.primaryColor][0],
      //         color: theme.colors[params.color || theme.primaryColor][3],
      //       }),
      //     },
      //   }),
      // },
      // styles: (theme, params) => ({
      //   root: {
      //     transition: `all ${theme.other.transition}`,
      //     "&[data-loading]": {
      //       color: "transparent",
      //       svg: {
      //         "&[data-action-icon-loader]": {
      //           maxWidth: "60%",
      //           // stroke:
      //           //   variant === "transparent" || variant === "secondary"
      //           //     ? theme.colors[params.color || theme.primaryColor][5]
      //           //     : theme.white,
      //         },
      //       },
      //       "&:before": {
      //         display: "none",
      //       },
      //       ".mantine-Button-centerLoader": {
      //         opacity: 1,
      //       },
      //       // [`& .${getStylesRef("rightIcon")}, .${getStylesRef("leftIcon")}`]: {
      //       //   opacity: 0,
      //       // },
      //     },
      //   },
      // }),
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
      // styles: () => ({
      //   item: {
      //     "&:not(:last-child)": {
      //       marginBottom: rem(4),
      //     },
      //   },
      //   dropdown: {
      //     border: 0,
      //     borderRadius: 0,
      //     boxShadow: theme.shadows.md,
      //   },
      //   itemsWrapper: {
      //     padding: 0,
      //   },
      //   item: {
      //     borderRadius: 0,
      //     "&[data-selected]": {
      //       backgroundColor: theme.white,
      //       color: theme.black,
      //       "&:hover": {
      //         backgroundColor: theme.colors.gray[0],
      //       },
      //     },
      //   },
      // }),
    },
    Popover: {
      defaultProps: {
        shadow: "md",
      },
      // styles: {
      //   dropdown: {
      //     border: "none",
      //   },
      // },
    },
    HoverCard: {
      // styles: (theme) => ({
      //   dropdown: {
      //     borderColor: theme.black,
      //   },
      // }),
    },
    ScrollArea: {
      defaultProps: {
        type: "never",
      },
      // styles: {
      //   scrollbar: {
      //     zIndex: 101,
      //   },
      // },
    },
    Navbar: {
      // styles: {
      //   root: {
      //     border: 0,
      //   },
      // },
    },
    Header: {
      // styles: {
      //   root: {
      //     borderBottom: 0,
      //   },
      // },
    },

    Accordion: {
      defaultProps: {
        radius: "lg",
      },
      // styles: (theme) => ({
      //   content: {
      //     paddingTop: 0,
      //   },
      //   item: {
      //     border: 0,
      //   },
      //   label: {
      //     fontWeight: 500,
      //     color: theme.colors.gray[9],
      //   },
      //   control: {
      //     marginBottom: rem(4),
      //     "&:hover": {
      //       backgroundColor: theme.colors.gray[0],
      //     },
      //   },
      // }),
    },
    Input: {
      // styles: (theme) => ({
      //   input: {
      //     transition: `border-color ${theme.other.transition}`,
      //     "&:not(:disabled, :focus-within, [data-invalid])": {
      //       "&:hover": {
      //         borderColor: theme.colors.gray[6],
      //       },
      //     },
      //   },
      // }),
    },
    NavLink: {
      // styles: (theme) => ({
      //   root: {
      //     fontWeight: 500,
      //     borderRadius: theme.radius[theme.defaultRadius],
      //     color: theme.colors.gray[9],
      //     backgroundColor: theme.white,
      //     "&[data-active=true]": {
      //       background: theme.colors[theme.primaryColor][0],
      //       color: theme.colors[theme.primaryColor][5],
      //       "&:hover": {
      //         background: theme.colors[theme.primaryColor][0],
      //       },
      //     },
      //     "&:not([data-active=true])": {
      //       "&:hover": {
      //         background: theme.colors.gray[0],
      //       },
      //     },
      //     "&:not(:last-child)": {
      //       marginBottom: rem(4),
      //     },
      //   },
      // }),
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
    Prism: {
      // styles: (theme) => ({
      //   copy: {
      //     background: "transparent !important",
      //     color: theme.colorScheme === "dark" ? theme.white : theme.black,
      //   },
      // }),
    },
    Card: {
      defaultProps: {
        withBorder: true,
      },
    },
  },

  // globalStyles: (theme) => ({
  //   "::selection": {
  //     background: theme.colors[theme.primaryColor][1],
  //   },
  //   body: {
  //     WebkitFontSmoothing: "antialiased",
  //   },
  // }),
})

export default BubbleTheme
