import { NavLink, NavLinkProps } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"
import getHyphenCase from "src/helpers/getHyphenCase"

interface NavbarLinksProps extends NavLinkProps {
  links: string[]
}

const NavbarLink = ({ label, ...props }: NavLinkProps & { label: string }) => {
  const router = useRouter()
  const slug = getHyphenCase(label)
  return (
    <NavLink
      {...(router.query.page === slug && { "data-active": true })}
      component={Link}
      {...props}
      label={label}
      href={`/${router.query.slug}/${slug}`}
    />
  )
}

const NavbarLinks = ({ links, ...props }: NavbarLinksProps) => {
  return (
    <>
      {links.map((link) => (
        <NavbarLink {...props} label={link} key={link} />
      ))}
    </>
  )
}

export default NavbarLinks
