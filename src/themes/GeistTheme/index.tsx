import {
  MantineThemeOverride,
  ButtonStylesParams,
  DefaultMantineColor,
  Tuple,
  MantineTheme,
  ActionIconStylesParams,
  rem,
  getStylesRef,
} from "@mantine/core"

const cardShadow = "0 4px 6px rgb(0 0 0 / 4%)"
const fontFamily = `"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`

type ExtendedCustomColors = "accent" | DefaultMantineColor

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

const getPrimaryButtonStyles = (
  theme: MantineTheme,
  { color = "dark" }: ButtonStylesParams | ActionIconStylesParams
) => {
  return {
    border: "1px solid",
    borderColor: color === "dark" ? theme.black : theme.colors[color][5],
    color: theme.white,
    background: color === "dark" ? theme.black : theme.colors[color][5],
    "&:not([data-disabled])": theme.fn.hover({
      background: theme.white,
      color: color === "dark" ? theme.black : theme.colors[color][5],
    }),
  }
}

const getSecondaryButtonStyles = (
  theme: MantineTheme,
  { color = "dark" }: ButtonStylesParams | ActionIconStylesParams
) => {
  return {
    border: "1px solid",
    borderColor: color === "dark" ? theme.colors.accent[2] : theme.colors[color][2],
    color: color === "dark" ? theme.colors.accent[5] : theme.colors[color][5],
    backgroundColor: theme.white,
    "&:not([data-disabled])": theme.fn.hover({
      borderColor: color === "dark" ? theme.black : theme.colors[color][5],
      background: theme.white,
      color: color === "dark" ? theme.black : theme.colors[color][5],
    }),
  }
}

const getShadowButtonStyles = (
  theme: MantineTheme,
  { color = "dark" }: ButtonStylesParams | ActionIconStylesParams
) => {
  return {
    border: "1px solid",
    borderColor: color === "dark" ? theme.black : theme.colors[color][5],
    color: theme.white,
    background: color === "dark" ? theme.black : theme.colors[color][5],
    boxShadow: theme.shadows.md,
    "&:not([data-disabled])": theme.fn.hover({
      background: color === "dark" ? theme.black : theme.colors[color][5],
      color: theme.white,
      boxShadow: theme.shadows.lg,
      transform: "translateY(-2px)",
    }),
  }
}

const GeistTheme: MantineThemeOverride = {
  primaryShade: 5,
  cursorType: "pointer",
  other: {
    cardShadow,
    geistCyanLight: "#79FFF0",
  },
  fontFamily,
  headings: {
    fontFamily,
  },
  shadows: {
    xs: "0px 2px 4px rgba(0,0,0,.1)",
    sm: "0px 4px 8px rgba(0,0,0,.12)",
    md: "0 5px 10px rgba(0,0,0,.12)",
    lg: "0 8px 30px rgba(0,0,0,.12)",
    xl: "0 30px 60px rgba(0,0,0,.12)",
  },
  colors: {
    accent: [
      "#ffffff",
      "#fafafa",
      "#eaeaea",
      "#999999",
      "#888888",
      "#666666",
      "#444444",
      "#333333",
      "#111111",
      "#000000",
    ],
  },
  components: {
    Loader: {
      defaultProps: {
        color: "dark",
      },
    },
    Paper: {
      defaultProps: {
        p: "sm",
        withBorder: true,
        shadow: cardShadow,
      },
      styles: (theme) => ({
        root: {
          borderColor: theme.colors.accent[2],
        },
      }),
    },
    ActionIcon: {
      defaultProps: {
        color: "dark",
      },
      variants: {
        primary: (theme, params: ActionIconStylesParams) => ({
          root: getPrimaryButtonStyles(theme, params),
        }),
        secondary: (theme, params: ActionIconStylesParams) => ({
          root: getSecondaryButtonStyles(theme, params),
        }),
        shadow: (theme, params: ActionIconStylesParams) => ({
          root: getShadowButtonStyles(theme, params),
        }),
      },
      styles: (theme, params: ActionIconStylesParams, { variant }) => ({
        root: {
          transitionProperty: "border-color,background,color,transform,box-shadow",
          transitionDuration: ".15s",
          transitionTimingFunction: "ease",
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
          },
        },
      }),
    },
    Button: {
      defaultProps: {
        loaderPosition: "center",
      },
      variants: {
        primary: (theme, params: ButtonStylesParams) => ({
          root: getPrimaryButtonStyles(theme, params),
        }),
        secondary: (theme, params: ButtonStylesParams) => ({
          root: getSecondaryButtonStyles(theme, params),
        }),
        shadow: (theme, params: ButtonStylesParams) => ({
          root: getShadowButtonStyles(theme, params),
        }),
      },
      styles: (theme, params: ButtonStylesParams, { variant }) => ({
        root: {
          ref: getStylesRef("root"),
          transitionProperty: "border-color,background,color,transform,box-shadow",
          transitionDuration: ".15s",
          transitionTimingFunction: "ease",
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
        rightIcon: {
          ref: getStylesRef("rightIcon"),
        },
        leftIcon: {
          ref: getStylesRef("leftIcon"),
        },
      }),
    },
    Menu: {
      defaultProps: {
        shadow: "lg",
      },
      styles: (theme) => ({
        dropdown: {
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
          border: "none",
        },
        item: {
          transition: "color.1s ease, background-color.1s ease",
          color: theme.colors.accent[5],
          padding: "8px 20px",
          "&:hover": {
            backgroundColor: theme.colors.accent[1],
            color: theme.black,
          },
        },
      }),
    },
    Modal: {
      defaultProps: {
        shadow: "xl",
        centered: true,
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
          zIndex: 1000,
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

    Textarea: {
      styles: () => ({
        input: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
      }),
    },
    InputWrapper: {
      styles: (theme) => ({
        label: {
          marginBottom: rem(4),
          color: theme.colors.accent[5],
        },
      }),
    },
    Input: {
      styles: (theme) => ({
        input: {
          transition: "border-color .15s ease",
          "&:focus-within": {
            "&:not([data-invalid])": {
              borderColor: theme.colors.accent[5],
            },
          },
          borderColor: theme.colors.accent[2],
          "::placeholder": {
            color: theme.colors.accent[3],
          },
          "&:disabled": {
            "&:hover": {
              borderColor: theme.colors.accent[2],
            },
          },
        },
        description: {
          color: theme.colors.gray[6],
        },
        rightSection: {
          svg: {
            color: theme.colors.dark[5] + " !important",
          },
        },
        icon: {
          svg: {
            color: theme.colors.dark[5] + " !important",
          },
        },
      }),
    },
    Switch: {
      styles: (theme) => ({
        input: {
          "&:checked+label": {
            backgroundColor: theme.black + "!important",
            borderColor: theme.black + "!important",
          },
        },
        thumb: {
          borderColor: theme.white,
        },
      }),
    },
    Select: {
      defaultProps: {
        shadow: "lg",
        transitionProps: {
          transition: "pop",
          duration: 200,
        },
      },
      styles: (theme) => ({
        itemsWrapper: {},
        item: {
          "&[data-selected]": {
            backgroundColor: theme.white,
            color: theme.black,
            "&:hover": {
              backgroundColor: theme.colors.gray[2],
            },
          },
        },
      }),
    },
    Popover: {
      defaultProps: {
        transitionProps: {
          transition: "pop",
          duration: 200,
        },
      },
    },
    Tooltip: {
      defaultProps: {
        transitionProps: {
          transition: "pop",
          duration: 200,
        },
      },
      styles: (theme) => ({
        tooltip: {
          background: theme.black,
          boxShadow: theme.shadows.md,
        },
      }),
    },
  },
  globalStyles: (theme) => ({
    "::selection": {
      background: theme.other.geistCyanLight,
      color: theme.black,
      WebkitTextFillColor: theme.black,
    },
  }),
}

export default GeistTheme
