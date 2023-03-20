import { createStyles, MantineNumberSize, MantineTheme, rem } from "@mantine/core"

export default createStyles((theme: MantineTheme) => ({
  link: {
    width: "100%",
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    borderRadius: theme.radius[theme.defaultRadius],
    paddingTop: rem(4),
    paddingBottom: rem(4),
    "&[data-active=true]": {
      background: theme.colors[theme.primaryColor][1],
    },
    "&:not([data-active=true])": {
      "&:hover": { background: theme.colors[theme.primaryColor][0] },
    },
  },
}))
