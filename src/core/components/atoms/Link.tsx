import { PropsOf } from "@emotion/react"
import { Anchor, AnchorProps, Box, createStyles, Group, rem, useMantineTheme } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"
import NextLink from "next/link"
import { ExtendedCustomColors } from "src/themes/Geist"

const useStyles = createStyles(
  (theme, { color = theme.primaryColor }: { color?: ExtendedCustomColors }) => ({
    root: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
        backgroundImage: `linear-gradient(${theme.colors[color][5]}, ${theme.colors[color][5]})`,
        backgroundSize: "100% 1px",
        backgroundPosition: "0 100%",
        backgroundRepeat: "no-repeat",
      },
    },
    icon: {
      marginLeft: rem(4),
    },
  })
)

const Link = ({
  className,
  ...props
}: AnchorProps & {
  href: PropsOf<typeof NextLink>["href"]
  target: PropsOf<typeof NextLink>["target"]
}) => {
  const theme = useMantineTheme()
  const { classes, cx } = useStyles({ color: props.color })
  return (
    <Anchor component={NextLink} className={cx(classes.root, className)} {...props}>
      {props.children}
      {props.target === "_blank" && (
        <IconExternalLink
          color={theme.colors[props.color || theme.primaryColor][5]}
          className={classes.icon}
          size={theme.fontSizes[props.size || "sm"]}
        />
      )}
    </Anchor>
  )
}

export default Link
