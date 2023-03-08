import {
  Tabs as MantineTabs,
  TabsProps as MantineTabsProps,
  createStyles,
  rem,
} from "@mantine/core"

const useStyles = createStyles((theme) => ({
  tab: {
    ...theme.fn.focusStyles(),
    backgroundColor: theme.white,
    color: theme.black,
    border: `${rem(1)} solid ${theme.black}`,
    padding: `${rem(8)} ${theme.spacing.md}`,
    cursor: "pointer",
    fontSize: theme.fontSizes.sm,
    display: "flex",
    alignItems: "center",

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },

    "&:not(:disabled, &[data-active])": {
      "&:hover": {
        backgroundColor: theme.colors.violet[1],
      },
    },

    "&:not(:first-of-type)": {
      borderLeft: 0,
    },

    "&[data-active]": {
      backgroundColor: theme.black,
      color: theme.white,
    },
  },

  tabIcon: {
    marginRight: theme.spacing.xs,
    display: "flex",
    alignItems: "center",
  },

  tabsList: {
    display: "flex",
  },
}))

type TabsProps = Omit<MantineTabsProps, "unstyled">

const Tabs = (props: TabsProps) => {
  const { classes } = useStyles()
  return <MantineTabs classNames={classes} unstyled {...props} />
}

export default Tabs
