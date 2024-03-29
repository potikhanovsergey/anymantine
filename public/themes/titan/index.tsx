import {
  MantineThemeOverride,
  rem,
  getStylesRef,
  ButtonStylesParams,
  ActionIconStylesParams,
} from "@mantine/core"

const theme: MantineThemeOverride = {
  cursorType: "pointer",
  defaultRadius: "sm",
  primaryShade: 5,
  primaryColor: "yellow",
  datesLocale: "ru",
  other: {
    transition: ".15s ease",
  },
  components: {
    DateInput: {
      defaultProps: {
        locale: "ru",
        size: "xs",
      },
    },
    MultiSelect: {
      defaultProps: {
        size: "xs",
      },
    },
    AppShell: {
      styles: (theme) => ({
        main: {
          minHeight: "100vh",
          paddingTop: "calc(var(--mantine-header-height) + 16px)",
        },
      }),
    },
    Loader: {
      defaultProps: {
        size: "sm",
        color: "dark",
      },
    },
    Tooltip: {
      defaultProps: {
        withArrow: true,
      },
    },
    Avatar: {
      defaultProps: {
        variant: "outline",
        color: "dark",
      },
      variants: {
        outline: (theme) => ({
          placeholder: {
            borderWidth: rem(2),
          },
        }),
      },
    },
    Notification: {
      defaultProps: {
        withBorder: true,
      },
      styles: (theme) => ({
        root: {
          paddingLeft: theme.spacing.xl,
          "&[data-with-border]": {
            border: `${rem(2)} solid ${theme.black}`,
          },
        },
      }),
    },
    Divider: {
      defaultProps: {
        size: "sm",
        color: "dark",
      },
    },
    Button: {
      defaultProps: () => ({
        loaderPosition: "center",
        size: "xs",
      }),
      variants: {
        filled: (theme, params: ButtonStylesParams) => ({
          root: {
            background: theme.black,
            color: theme.white,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors.dark[5],
            }),
          },
        }),
        outline: (theme, params: ButtonStylesParams) => ({
          root: {
            backgroundColor: theme.white,
            color: theme.black,
            border: "2px solid",
            borderColor: theme.black,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors[params.color || theme.primaryColor][3],
            }),
          },
        }),
        subtle: (theme, params: ButtonStylesParams, { variant }) => ({
          root: {
            backgroundColor: theme.white,
            color: theme.black,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors[params.color || theme.primaryColor][3],
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
        color: theme.primaryColor,
      }),
      variants: {
        filled: (theme, params: ButtonStylesParams) => ({
          root: {
            background: theme.black,
            color: theme.white,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors.dark[5],
            }),
          },
        }),
        outline: (theme, params: ButtonStylesParams) => ({
          root: {
            backgroundColor: theme.white,
            color: theme.black,
            border: "2px solid",
            borderColor: theme.black,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors[params.color || theme.primaryColor][3],
            }),
          },
        }),
        subtle: (theme, params: ButtonStylesParams, { variant }) => ({
          root: {
            backgroundColor: theme.white,
            color: theme.black,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors[params.color || theme.primaryColor][3],
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
    Paper: {
      defaultProps: {
        withBorder: true,
        shadow: "none",
      },
      styles: (theme) => ({
        root: {
          border: `2px solid ${theme.black} !important`,
        },
      }),
    },
    Select: {
      defaultProps: {
        size: "xs",
      },
      styles: (theme) => ({
        dropdown: {
          border: `2px solid ${theme.black}`,
        },
        item: {
          "&:not(:last-child)": {
            marginBottom: rem(4),
          },
        },
      }),
    },
    Popover: {
      styles: (theme) => ({
        dropdown: {
          border: `2px solid ${theme.black}`,
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
    Navbar: {
      styles: (theme) => ({
        root: {
          borderRight: `${rem(2)} solid ${theme.black}`,
        },
      }),
    },
    Accordion: {
      styles: (theme) => ({
        item: {
          border: `${rem(2)} solid ${theme.black}`,
          "&[data-active=true]": {
            borderColor: theme.black,
          },
        },
      }),
    },
    Aside: {
      styles: (theme) => ({
        root: {
          borderLeft: `${rem(2)} solid ${theme.black}`,
        },
      }),
    },
    NavLink: {
      defaultProps: (theme) => ({
        variant: "subtle",
      }),
    },
    Header: {
      styles: (theme) => ({
        root: {
          zIndex: 201,
          borderBottom: `${rem(2)} solid ${theme.black}`,
          background: theme.fn.rgba(theme.white, 0.7),
          backdropFilter: "blur(12px)",
        },
      }),
    },
    Menu: {
      defaultProps: {
        withinPortal: true,
      },
      styles: (theme) => ({
        dropdown: {
          border: `${rem(2)} solid ${theme.black}`,
        },
        divider: {
          borderTop: `${rem(2)} solid ${theme.black}`,
        },
      }),
    },
    RichTextEditor: {
      styles: (theme) => ({
        root: {
          border: `${rem(2)} solid ${theme.black}`,
        },
        toolbar: {
          borderBottom: `${rem(2)} solid ${theme.black}`,
          top: "var(--mantine-header-height)",
        },
      }),
    },
    Input: {
      styles: (theme) => ({
        input: {
          border: "2px solid",
          borderColor: theme.black,
          "&:focus": {
            borderColor: theme.colors[theme.primaryColor][3],
          },
        },
      }),
    },
    Container: {
      defaultProps: {
        size: "xl",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "xs",
      },
    },
    DateTimePicker: {
      defaultProps: {
        size: "xs",
      },
    },
    TextInput: {
      defaultProps: {
        size: "xs",
      },
    },
    NumberInput: {
      defaultProps: {
        size: "xs",
      },
    },
    Textarea: {
      defaultProps: {
        size: "xs",
      },
    },
    Modal: {
      defaultProps: {
        centered: true,
      },
    },
  },

  globalStyles: (theme) => ({
    "::selection": {
      background: theme.colors[theme.primaryColor][3],
    },
    body: {
      WebkitFontSmoothing: "antialiased",
    },
  }),
}

export default theme
