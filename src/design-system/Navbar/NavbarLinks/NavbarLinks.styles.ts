import { createStyles, MantineColor, MantineTheme, rem } from "@mantine/core"

export interface NavbarLinksStylesParams {
  color?: MantineColor
}

export default createStyles((theme: MantineTheme, { color }: NavbarLinksStylesParams) => ({
  link: {
    width: "100%",
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    borderRadius: theme.radius[theme.defaultRadius],
    paddingTop: rem(4),
    paddingBottom: rem(4),
    "&[data-active=true]": {
      background: theme.colors[color || theme.primaryColor][1],
    },
    "&:not([data-active=true])": {
      "&:hover": { background: theme.colors[color || theme.primaryColor][0] },
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    gap: rem(4),
  },
}))
