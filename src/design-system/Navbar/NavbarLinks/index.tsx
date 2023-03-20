import { Stack, Tabs, UnstyledButton, useMantineTheme } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"
import createStyles from "./NavbarLinks.styles"

interface NavbarLinksProps {
  links: {
    slug: string
    label: string
  }[]
}

const NavbarLinks = ({ links }: NavbarLinksProps) => {
  const router = useRouter()
  const { classes } = createStyles()
  return (
    <Stack spacing={4}>
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
    </Stack>
  )
}

export default NavbarLinks
