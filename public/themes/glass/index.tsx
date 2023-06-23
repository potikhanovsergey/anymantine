import {
  type MantineThemeOverride,
  rem,
  getStylesRef,
  type ButtonStylesParams,
  type ActionIconStylesParams,
} from "@mantine/core"
import { IconUpload } from "@tabler/icons-react"
import { Ubuntu } from "next/font/google"

export const glassFont = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const theme: MantineThemeOverride = {
  cursorType: "pointer",
  primaryColor: "indigo",
  defaultRadius: "sm",
  primaryShade: 5,
  fontFamily: glassFont.style.fontFamily,
  headings: {
    fontFamily: glassFont.style.fontFamily,
  },
  colorScheme: "dark",
  shadows: {
    xs: "0 1px 4px rgba(0,0,0,.25)",
    sm: "0 0.7px 2.7px rgba(0,0,0,.25),0 1.7px 6.9px rgba(0,0,0,.3),0 3.5px 14.2px rgba(0,0,0,.35),0 7.3px 29.2px rgba(0,0,0,.4)",
    md: "0 1.6px 2.7px rgba(0,0,0,.25),0 4.2px 6.9px rgba(0,0,0,.3),0 8.5px 14.2px rgba(0,0,0,.35),0 17.5px 29.2px rgba(0,0,0,.4)",
    lg: "0 3.3px 2.7px rgba(0,0,0,.3),0 8.3px 6.9px rgba(0,0,0,.3),0 17px 14.2px rgba(0,0,0,.35),0 35px 29.2px rgba(0,0,0,.4)",
    xl: "0 4.5px 2.7px rgba(0,0,0,.3),0 11.3px 6.9px rgba(0,0,0,.3),0 23px 14.2px rgba(0,0,0,.35),0 47.5px 29.2px rgba(0,0,0,.4)",
  },
  other: {
    transition: ".2s cubic-bezier(0.4,0,0.2,1)",
    subtleHoverColor: "rgba(126, 127, 132, 0.25)",
    borderColor: "hsla(0,0%,100%,.08)",
    maxTextWidth: 640,
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
  },
  components: {
    Tabs: {
      variants: {
        default: (theme) => ({
          tab: {
            color: theme.colors.dark[1],
            borderRadius: 0,
            borderBottomWidth: rem(1),
            marginBottom: rem(-1),
            fontWeight: 500,
            paddingLeft: 0,
            paddingRight: 0,
            "&:not(&:last-child)": {
              marginRight: theme.spacing.md,
            },
            "&:hover": {
              background: "transparent",
              color: theme.white,
              borderColor: theme.colors.dark[theme.fn.primaryShade()],
            },
            "&[data-active]": {
              color: theme.white,
              borderBottomColor: theme.white,
              "&:hover": {
                borderBottomColor: theme.white,
              },
            },
          },
          tabsList: {
            borderBottomColor: theme.colors.dark[theme.fn.primaryShade()],
            borderBottomWidth: rem(1),
          },
        }),
      },
    },
    Table: {
      styles: (theme) => ({
        root: {
          tbody: {
            tr: {
              td: {
                borderTopColor: theme.other.borderColor,
                padding: `${rem(8)} ${rem(12)}`,
              },
            },
          },
        },
      }),
    },
    Paper: {
      defaultProps: {
        withBorder: true,
        p: "sm",
        shadow: "none",
      },
      variants: {
        glass: (theme) => ({
          root: {
            background: "hsla(0,0%,100%,.04)",
          },
        }),
      },
      styles: (theme) => ({
        root: {
          color: theme.white,
          "&[data-with-border]": {
            borderColor: theme.other.borderColor,
          },
        },
      }),
    },
    Container: {
      defaultProps: {
        size: "md",
      },
    },
    Group: {
      defaultProps: {
        spacing: "xs",
      },
    },
    Stack: {
      defaultProps: {
        spacing: "xs",
      },
    },
    Calendar: {
      defaultProps: {
        locale: "ru",
      },
    },
    Rating: {
      defaultProps: {
        fractions: 4,
      },
    },
    TextInput: {
      defaultProps: {
        size: "xs",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "xs",
      },
    },
    Loader: {
      defaultProps: {
        size: "sm",
        color: "gray",
      },
    },
    DateTimePicker: {
      defaultProps: {
        locale: "ru",
        popoverProps: {
          withinPortal: true,
        },
        size: "xs",
      },
    },
    DatePickerInput: {
      defaultProps: {
        size: "xs",
        popoverProps: {
          withinPortal: true,
        },
        locale: "ru",
      },
    },
    Button: {
      defaultProps: {
        size: "xs",
        loaderPosition: "center",
        variant: "primary",
      },
      variants: {
        primary: (theme, { color }) => ({
          root: {
            color: theme.black,
            backgroundColor: color ? theme.colors[color][theme.fn.primaryShade()] : theme.white,
            "&:not(&:disabled)": {
              "&:hover": {
                background: color ? theme.colors[color][4] : theme.colors.gray[4],
              },
            },
          },
        }),
        secondary: (theme) => ({
          root: {
            backgroundColor: theme.colors.dark[6],
            "&:not(&:disabled)": {
              "&:hover": {
                background: theme.colors.dark[theme.fn.primaryShade()],
              },
            },
          },
        }),
      },
      styles: (theme, { color }: ButtonStylesParams, { variant }) => ({
        root: {
          fontWeight: 500,
          "&[data-loading]": {
            color: "transparent",
            svg: {
              stroke: theme.black,
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
    DateInput: {
      defaultProps: {
        size: "xs",
        locale: "ru",
      },
    },
    ActionIcon: {
      defaultProps: (theme) => ({
        color: theme.primaryColor,
      }),
      variants: {
        default: (theme) => ({
          root: {
            backgroundColor: theme.colors.dark[8],
            "&:not(&:disabled)": {
              "&:hover": {
                backgroundColor: theme.colors.dark[8],
                borderColor: theme.white,
              },
            },
          },
        }),
      },
      styles: (theme, params: ActionIconStylesParams, { variant }) => ({
        root: {
          "&[data-loading]": {
            color: "transparent",
            svg: {
              "&[data-action-icon-loader]": {
                maxWidth: "60%",
                stroke:
                  variant === "transparent" || variant === "secondary"
                    ? theme.colors[params.color || theme.primaryColor][theme.fn.primaryShade()]
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
    Select: {
      defaultProps: {
        size: "xs",
        withinPortal: true,
      },
      styles: (theme) => ({
        dropdown: {
          backdropFilter: "blur(0.5rem)",
          backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.5),
          borderColor: theme.colors.dark[6],
        },
        item: {
          "&:not(:last-child)": {
            marginBottom: rem(4),
          },
        },
      }),
    },
    Popover: {
      defaultProps: {
        shadow: "md",
        transitionProps: {
          transition: "pop",
          duration: 300,
          timingFunction: "cubic-bezier(0.4,0,0.2,1)",
        },
      },
      styles: (theme) => ({
        dropdown: {
          backdropFilter: "blur(0.5rem)",
          backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.5),
          borderColor: theme.colors.dark[6],
        },
      }),
    },
    Chip: {
      defaultProps: {
        variant: "filled",
      },
    },
    RichTextEditor: {
      styles: (theme) => ({
        root: {
          border: 0,
        },
        control: {
          color: theme.black,
          borderColor: theme.colors.gray[1],
          "&[data-active]": {
            background: theme.colors.gray[3],
            "&:hover": theme.fn.hover({
              background: theme.colors.gray[3],
            }),
          },
        },
        toolbar: {
          borderBottomColor: theme.colors.gray[1],
          background: theme.colors.gray[0],
        },
        content: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          background: theme.colors.gray[0],
        },
      }),
    },
    Drawer: {
      defaultProps: {
        lockScroll: false,
      },
      styles: (theme) => ({
        title: {
          fontWeight: "bold",
          fontFamily: glassFont.style.fontFamily,
        },
        header: {
          background: "transparent",
          position: "static",
        },
        content: {
          paddingTop: 0 + "!important",
          borderColor: theme.other.borderColor,
          backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.5),
          backdropFilter: "blur(0.5rem)",
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
          borderRightColor: theme.other.borderColor,
          background: "transparent",
        },
      }),
    },
    Avatar: {
      defaultProps: (theme) => ({
        color: theme.primaryColor,
      }),
    },

    Header: {
      styles: (theme) => ({
        root: {
          borderBottomColor: theme.other.borderColor,
          backgroundColor: "transparent",
          backdropFilter: "blur(0.5rem)",
        },
      }),
    },
    MultiSelect: {
      defaultProps: {
        size: "xs",
        withinPortal: true,
      },
      styles: (theme) => ({
        dropdown: {
          backdropFilter: "blur(0.5rem)",
          backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.5),
          borderColor: theme.colors.dark[6],
        },
      }),
    },
    Divider: {
      styles: (theme) => ({
        root: {
          borderTopColor: theme.other.borderColor + "!important",
        },
      }),
    },
    Image: {
      styles: (theme) => ({
        figure: {
          height: "100%",
        },
      }),
    },
    Menu: {
      defaultProps: {
        withinPortal: true,
      },
      styles: (theme) => ({
        divider: {
          borderColor: theme.colors[theme.primaryColor][0],
        },
        dropdown: {
          boxShadow: theme.shadows.sm,
          backdropFilter: "blur(0.5rem)",
          backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.5),
          borderColor: theme.other.borderColor,
        },
        item: {
          padding: `${rem(8)} ${rem(12)}`,
          color: theme.white,
          "&:not(:disabled)": {
            "&[data-hovered]": {
              background: "#93959722",
            },
          },
        },
      }),
    },
    ThemeIcon: {
      defaultProps: {
        variant: "default",
      },
    },
    InputWrapper: {
      defaultProps: {
        size: "xs",
      },
    },
    Notification: {
      defaultProps: {
        withBorder: true,
      },
    },
    SegmentedControl: {
      defaultProps: (theme) => ({
        color: theme.primaryColor,
        size: "xs",
      }),
      styles: (theme) => ({
        root: {
          background: theme.colors.dark[7],
        },
        control: {
          ":not(:first-of-type)": {
            borderColor: "transparent",
          },
        },
      }),
    },
    Anchor: {
      defaultProps: (theme) => ({
        color: theme.fn.primaryColor(),
      }),
    },
    FileInput: {
      defaultProps: {
        size: "xs",
        icon: <IconUpload size="1rem" />,
      },
    },
    Input: {
      defaultProps: {
        variant: "default",
      },
      variants: {
        default: (theme) => ({
          input: {
            transition: `${theme.other.transition} all`,
            background: "transparent",
            borderColor: theme.other.borderColor,
            color: theme.white,
            "&:not(&:disabled)": {
              "&:hover": {
                borderColor: theme.colors.dark[0],
              },
              "&:focus-within": {
                borderColor: theme.white,
              },
            },
          },
        }),
      },
    },
    NavLink: {
      styles: (theme) => ({
        root: {
          fontWeight: 500,
          transition: `${theme.other.transition} all`,
          borderRadius: theme.radius[theme.defaultRadius],
          color: theme.white,
          padding: `${rem(4)} ${rem(12)}`,
          "&:not([data-active=true])": {
            "&:hover": {
              background: theme.fn.rgba(theme.colors.dark[4], 0.25),
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
        size: "xs",
      },
      styles: (theme) => ({
        input: {
          backgroundColor: theme.colors.dark[8],
        },

        description: {
          cursor: "default",
        },
      }),
    },
    Switch: {
      defaultProps: {
        radius: "xl",
      },
    },
    Badge: {
      defaultProps: {
        radius: "xl",
        tt: "none",
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
    NumberInput: {
      defaultProps: {
        size: "xs",
      },
    },
    Modal: {
      defaultProps: {
        lockScroll: false,
        centered: true,
      },
      styles: (theme) => ({
        content: {
          padding: theme.spacing.xs + " !important",
          paddingTop: 0 + " !important",
          borderColor: theme.other.borderColor,
          backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.5),
          backdropFilter: "blur(0.5rem)",
        },
        header: {
          backgroundColor: "transparent",
        },
        title: {
          fontWeight: "bold",
          fontFamily: glassFont.style.fontFamily,
          position: "static",
        },
      }),
    },
    Prism: {
      styles: (theme) => ({
        copy: {
          background: "transparent !important",
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      }),
    },
    Card: {
      defaultProps: {
        withBorder: true,
      },
    },
    Transition: {
      defaultProps: {
        transition: "pop",
        duration: 300,
        timingFunction: "cubic-bezier(0.4,0,0.2,1)",
      },
    },
    Tooltip: {
      defaultProps: {
        withinPortal: true,
        withArrow: true,
        radius: "xs",
      },
      styles: (theme) => ({
        tooltip: {
          background: theme.white,
          color: theme.black,
        },
      }),
    },
    Textarea: {
      defaultProps: {
        size: "xs",
      },
    },
  },

  globalStyles: (theme) => ({
    body: {
      WebkitFontSmoothing: "antialiased",
      background: theme.colors.dark[8],
      color: theme.white,
    },
  }),
}

export default theme
