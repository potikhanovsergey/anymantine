import {
  MantineThemeOverride,
  Text,
  rem,
  getStylesRef,
  ButtonStylesParams,
  ActionIconStylesParams,
} from "@mantine/core"
import { Nunito_Sans } from "next/font/google"

export const marshmallowFont = Nunito_Sans({
  variable: "--marshmallow-font",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  preload: false,
})

const defaultFonts = `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`

const MarshmallowTheme: MantineThemeOverride = {
  cursorType: "pointer",
  primaryColor: "violet",
  defaultRadius: "sm",
  fontFamily: `var(--marshmallow-font), ${defaultFonts}`,
  headings: {
    fontFamily: `var(--marshmallow-font), ${defaultFonts}`,
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
            background: theme.colors[params.color || theme.primaryColor][1],
            border: `1px solid ${theme.black}`,
            color: theme.black,
            "&:not([data-disabled])": theme.fn.hover({
              background: theme.colors[params.color || theme.primaryColor][2],
            }),
          },
        }),
        secondary: (theme, params: ButtonStylesParams) => ({
          root: {
            backgroundColor: theme.white,
            border: `1px solid ${theme.colors[params.color || theme.primaryColor][4]}`,
            color: theme.colors[params.color || theme.primaryColor][4],
            "&:not([data-disabled])": theme.fn.hover({
              color: theme.black,
              background: theme.colors[params.color || theme.primaryColor][2],
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
    Input: {
      defaultProps: {
        variant: "filled",
      },
      styles: (theme) => ({
        input: {
          backgroundColor: theme.colors[theme.primaryColor][0],
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
              backgroundColor: theme.colors[theme.primaryColor][1],
              border: `1px solid ${theme.black}`,
              color: theme.black,
            },
          },
          "&:not(&[data-selected])": {
            "&[data-hovered]": {
              backgroundColor: theme.colors[theme.primaryColor][0],
            },
          },
        },
      }),
    },
    Switch: {
      defaultProps: {
        radius: "xl",
      },
      styles: (theme) => ({
        track: {
          backgroundColor: theme.white,
          borderColor: theme.black,
          ref: getStylesRef("track"),
        },
        input: {
          "&:checked+": {
            [`& .${getStylesRef("track")}`]: {
              backgroundColor: theme.colors[theme.primaryColor][1],
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
          backgroundColor: theme.colors[theme.primaryColor][1],
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
      styles: (theme, params, context) => ({
        scrollbar: {
          zIndex: 101,
        },
      }),
    },
    TooltipFloating: {
      styles: (theme) => ({
        tooltip: {
          background: theme.colors[theme.primaryColor][1],
          color: theme.black,
          border: `1px solid ${theme.black}`,
          fontWeight: 500,
        },
        arrow: {
          border: `1px solid ${theme.black}`,
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
    Accordion: {
      styles: (theme) => ({
        content: {
          paddingTop: 0,
        },
        item: {
          borderBottom: 0,
        },
        control: {
          marginBottom: rem(4),
        },
      }),
    },
    Tooltip: {
      defaultProps: {
        withArrow: true,
        transitionProps: {
          transition: "pop",
          duration: 200,
        },
      },
      styles: (theme) => ({
        tooltip: {
          background: theme.colors[theme.primaryColor][1],
          color: theme.black,
          border: `1px solid ${theme.black}`,
          fontWeight: 500,
        },
        arrow: {
          border: `1px solid ${theme.black}`,
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

export default MarshmallowTheme
