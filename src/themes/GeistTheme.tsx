import {
  MantineThemeOverride,
  ButtonStylesParams,
  DefaultMantineColor,
  Tuple,
  MantineTheme,
} from "@mantine/core"

const cardShadow = "0 4px 6px rgb(0 0 0 / 4%)"
const fontFamily = `"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`

type ExtendedCustomColors = "geistAccent" | DefaultMantineColor

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

const getPrimaryButtonStyles = (theme: MantineTheme) => {
  return {
    borderColor: theme.black,
    color: theme.white,
    background: theme.black,
    "&:not([data-disabled])": theme.fn.hover({
      background: theme.white,
      color: theme.black,
    }),
  }
}

const getSecondaryButtonStyles = (theme: MantineTheme) => {
  return {
    borderColor: theme.colors.geistAccent[2],
    color: theme.colors.geistAccent[5],
    backgroundColor: theme.white,
    "&:not([data-disabled])": theme.fn.hover({
      borderColor: theme.black,
      background: theme.white,
      color: theme.black,
    }),
  }
}

const GeistTheme: MantineThemeOverride = {
  primaryShade: 5,
  cursorType: "pointer",
  other: {
    cardShadow,
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
    geistAccent: [
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
      styles: (theme, params) => ({
        root: {
          borderColor: theme.colors.geistAccent[2],
        },
      }),
    },
    DateInput: {
      defaultProps: {
        popoverProps: {
          withinPortal: true,
        },
      },
      styles: (theme) => ({
        dropdown: {
          border: "none",
          color: theme.colors.geistAccent[5],
        },
        calendar: {
          button: {
            ":hover": {
              backgroundColor: theme.colors.geistAccent[2],
            },
          },
          ".mantine-DateInput-cell, .mantine-DateInput-month, .mantine-DateInput-year": {
            button: {
              "&[data-selected], &.mantine-DatePicker-monthPickerControlActive, &.mantine-DatePicker-yearPickerControlActive":
                {
                  backgroundColor: theme.black,
                },
            },
          },
        },
      }),
    },
    Button: {
      defaultProps: {
        loaderPosition: "center",
      },
      styles: (theme, params: ButtonStylesParams, { variant }) => ({
        root: {
          transitionProperty: "border-color,background,color,transform,box-shadow",
          transitionDuration: ".15s",
          transitionTimingFunction: "ease",
          "&[data-loading]": {
            color: "transparent",
            "&:before": {
              display: "none",
            },
            ".mantine-Button-centerLoader": {
              opacity: 1,
            },
          },
          ...(variant === "filled" && getPrimaryButtonStyles(theme)),
          ...(variant === "outline" && getSecondaryButtonStyles(theme)),
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
          color: theme.colors.geistAccent[5],
          padding: "8px 20px",
          "&:hover": {
            backgroundColor: theme.colors.geistAccent[1],
            color: theme.black,
          },
        },
      }),
    },
    Drawer: {
      styles: (theme) => ({
        content: {
          [`@media (max-width: ${theme.breakpoints.md})`]: {
            flex: 1,
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
    Input: {
      styles: (theme) => ({
        input: {
          transition: "border-color .15s ease",
          "&:focus-within, &:hover": {
            borderColor: theme.colors.geistAccent[5],
          },
          borderColor: theme.colors.geistAccent[2],
          "::placeholder": {
            color: theme.colors.geistAccent[3],
          },
          "&:disabled": {
            "&:hover": {
              borderColor: theme.colors.geistAccent[2],
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
        track: {
          // backgroundColor: theme.colors.gray[6],
          // borderColor: theme.colors.gray[6],
        },
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
    Pagination: {
      defaultProps: {
        color: "dark",
        getItemAriaLabel: (page) => {
          switch (page) {
            case "dots":
              return "Pagination dots"
            case "prev":
              return "Previous page"
            case "next":
              return "Next page"
            case "first":
              return "The first page"
            case "last":
              return "The last page"
            default:
              return `Page ${page}`
          }
        },
      },
    },
    Notifications: {
      defaultProps: {
        autoClose: 10000,
      },
    },
    Select: {
      defaultProps: {
        shadow: "lg",
        transition: "pop",
        transitionDuration: 200,
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
    Avatar: {
      defaultProps: {
        children: "?!",
        color: "violet",
      },
    },
    ScrollArea: {
      styles: (theme) => ({
        thumb: {
          background: theme.fn.rgba(theme.colors.geistAccent[5], 0.3),
        },
        scrollbar: {
          ":hover": {
            background: "transparent",
            ".__mantine-ref-thumb": {
              background: theme.colors.geistAccent[5],
            },
          },
        },
        corner: {
          opacity: "0 !important",
        },
      }),
    },
    Popover: {
      defaultProps: {
        transition: "pop",
        transitionDuration: 200,
      },
    },
    Tooltip: {
      defaultProps: {
        transition: "pop",
        transitionDuration: 200,
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
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    html: {
      scrollBehavior: "smooth",
    },
    "::selection": {
      background: theme.colors.violet[3],
      color: theme.black,
      WebkitTextFillColor: theme.black,
    },
    body: {
      lineHeight: theme.lineHeight,
      minHeight: "100vh",
      wordBreak: "break-word",
      overflowY: "auto",
      overflowX: "hidden",
      letterSpacing: "-.01em",
      WebkitFontSmoothing: "antialiased",
    },
  }),
}

export default GeistTheme
