import { MantineThemeOverride, Text, rem, getStylesRef } from "@mantine/core"

const MantineTheme: MantineThemeOverride = {
  cursorType: "pointer",
  primaryColor: "violet",
  defaultRadius: 0,
  components: {
    Loader: {
      defaultProps: {
        color: "violet",
        size: "xs",
      },
    },
    Button: {
      defaultProps: {
        loaderPosition: "center",
      },
      variants: {
        filled: (theme) => ({
          root: {
            background: theme.colors.violet[1],
            border: `1px solid ${theme.black}`,
            color: theme.black,
            transition: "all 200ms ease",
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors.violet[2],
            }),
          },
        }),
        outline: (theme) => ({
          root: {
            backgroundColor: theme.white,
            border: "1px solid",
            borderColor: theme.black,
            transition: "all 200ms ease",
            color: theme.black,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors.violet[1],
            }),
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
          backgroundColor: theme.colors.violet[1],
        },
        bar: {
          backgroundColor: theme.colors.violet[1],
          border: `1px solid ${theme.black}`,
        },
        thumb: {
          backgroundColor: theme.colors.violet[1],
          color: theme.colors.violet[1],
          border: `1px solid ${theme.black}`,
        },
      }),
    },
    Input: {
      defaultProps: {
        variant: "filled",
      },
      styles: (theme) => ({
        input: {
          backgroundColor: theme.colors.violet[0],
        },
      }),
    },
    Select: {
      styles: (theme) => ({
        input: {
          "&:active, &:focus": {
            borderColor: theme.black,
          },
        },
        rightSection: {
          svg: {
            color: theme.black + "!important",
          },
        },
        dropdown: {
          borderColor: theme.black,
        },
        item: {
          "&[data-selected]": {
            "&, &:hover": {
              backgroundColor: theme.colors.violet[1],
              border: `1px solid ${theme.black}`,
              color: theme.black,
            },
          },
          "&:not(&[data-selected])": {
            "&[data-hovered]": {
              backgroundColor: theme.colors.violet[0],
            },
          },
        },
      }),
    },
    Switch: {
      styles: (theme) => ({
        track: {
          backgroundColor: theme.white,
          borderColor: theme.black,
          ref: getStylesRef("track"),
        },
        input: {
          "&:checked+": {
            [`& .${getStylesRef("track")}`]: {
              backgroundColor: theme.colors.violet[1],
              borderColor: theme.black,
            },
            [`*> .${getStylesRef("thumb")}`]: {
              borderColor: theme.black,
              backgroundColor: theme.white,
            },
          },
        },
        thumb: {
          borderColor: theme.black,
          backgroundColor: theme.colors.violet[1],
          ref: getStylesRef("thumb"),
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
    Menu: {
      styles: (theme) => ({
        dropdown: {
          border: "none",
        },
      }),
    },
    Popover: {
      defaultProps: {
        shadow: "md",
      },
      styles: (theme) => ({
        dropdown: {
          border: "none",
        },
      }),
    },
    HoverCard: {
      styles: (theme) => ({
        dropdown: {
          borderColor: theme.black,
        },
      }),
    },
    Paper: {
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
      styles: (theme, params, context) => ({
        scrollbar: {
          zIndex: 101,
        },
      }),
    },
    TooltipFloating: {
      defaultProps: {
        radius: "sm",
      },
      styles: (theme) => ({
        tooltip: {
          background: theme.black,
          color: theme.white,
          boxShadow: theme.shadows.md,
        },
      }),
    },
    Progress: {
      styles: (theme) => ({
        root: {
          background: theme.colors.dark[5],
        },
      }),
    },
    Tabs: {
      styles: (theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: theme.white,
          color: theme.black,
          border: `${rem(1)} solid ${theme.black}`,
          padding: `${rem(6)} ${theme.spacing.lg}`,
          cursor: "pointer",
          fontSize: theme.fontSizes.sm,
          display: "flex",
          alignItems: "center",
          borderRadius: 0,

          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },

          "&:not(:disabled, &[data-active])": {
            "&:hover": {
              backgroundColor: theme.colors.violet[1],
            },
          },

          "&:hover": {
            border: `${rem(1)} solid`,
            borderColor: theme.black,
            "&:not(:first-of-type)": {
              borderLeft: 0,
            },
          },

          "&:not(:first-of-type)": {
            borderLeft: 0,
          },

          "&[data-active]": {
            backgroundColor: theme.black,
            color: theme.white,
            borderColor: theme.black,
            "&:hover": {
              borderColor: theme.black,
            },
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: "flex",
          alignItems: "center",
        },

        tabsList: {
          display: "flex",
          borderBottom: 0,
        },
      }),
    },
    Prism: {
      defaultProps: {
        copyLabel: "Скопировать код",
        copiedLabel: "Скопировано",
      },
    },
    Tooltip: {
      defaultProps: {
        radius: "sm",
        events: {
          touch: true,
          hover: true,
          focus: true,
        },
        transitionProps: {
          transition: "pop",
          duration: 200,
        },
      },
      styles: (theme) => ({
        tooltip: {
          background: theme.black,
          color: theme.white,
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
      scrollMarginTop: "-36px",
    },
    "::selection": {
      background: theme.colors.violet[5],
    },
    body: {
      lineHeight: theme.lineHeight,
      minHeight: "100vh",
      wordBreak: "break-word",
      overflowY: "auto",
      overflowX: "hidden",
      letterSpacing: "-.01em",
      WebkitFontSmoothing: "antialiased",
      background: theme.colorScheme === "dark" ? "#161920" : theme.white,
    },
  }),
}

export default MantineTheme
