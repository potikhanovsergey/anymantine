import {
  MantineColor,
  Stack,
  Selectors,
  UnstyledButton,
  DefaultProps,
  Box,
  useComponentDefaultProps,
} from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"
import useStyles, { NavbarLinksStylesParams } from "./NavbarLinks.styles"

// This type will contain a union with all selectors defined in useStyles,
// in this case it will be `'root' | 'title' | 'description'`
type NavbarLinksStylesNames = Selectors<typeof useStyles>

// DefaultProps adds system props support (margin, padding, sx, unstyled, styles and classNames).
// It accepts 2 types: styles names and styles params, both of them are optional
interface NavbarLinksProps extends DefaultProps<NavbarLinksStylesNames, NavbarLinksStylesParams> {
  links: {
    slug: string
    label: string
  }[]
  color?: MantineColor
}

const NavbarLinks = ({
  links,
  className,
  classNames,
  styles,
  unstyled,
  ...props
}: NavbarLinksProps) => {
  const router = useRouter()

  const { color } = useComponentDefaultProps("NavbarLinks", {}, props)

  const { classes, cx } = useStyles(
    // First argument of useStyles is styles params
    { color },
    // Second argument is responsible for styles api integration
    { name: "NavbarLinks", classNames, styles, unstyled }
  )

  return (
    <Box className={cx(classes.root, className)} {...props}>
      {links.map((link) => (
        <UnstyledButton
          className={classes.link}
          data-active={router.query.page === link.slug}
          key={link.slug}
          component={Link}
          href={`/${router.query.slug}/${link.slug}`}
        >
          {link.label}
        </UnstyledButton>
      ))}
    </Box>
  )
}

export default NavbarLinks
