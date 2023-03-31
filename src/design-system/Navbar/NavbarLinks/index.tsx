import { NavLink, NavLinkProps } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"

interface NavbarLinksProps extends NavLinkProps {
  links: {
    slug: string
    label: string
  }[]
}

const NavbarLinks = ({ links, ...props }: NavbarLinksProps) => {
  const router = useRouter()
  return (
    <>
      {links.map((link) => (
        <NavLink
          {...(router.query.page === link.slug && { "data-active": true })}
          key={link.slug}
          component={Link}
          {...props}
          label={link.label}
          href={`/${router.query.slug}/${link.slug}`}
        />
      ))}
    </>
  )
}

export default NavbarLinks
