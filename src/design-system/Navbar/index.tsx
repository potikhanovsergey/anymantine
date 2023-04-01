import { Navbar as MantineNavbar, NavbarProps, NavLink, ScrollArea } from "@mantine/core"
import React from "react"
import NavbarLinks from "./NavbarLinks"
import { DesignSystemSubPage, atoms, tokens } from "src/themes"
import Link from "next/link"
import { useRouter } from "next/router"

const sections = [
  {
    label: "Tokens",
    links: tokens,
  },
  {
    label: "Atoms",
    links: atoms,
  },
  {
    label: "Molecules",
    links: [],
  },
]

const Navbar = ({
  subPage,
  ...navbarProps
}: Omit<NavbarProps, "children"> & { subPage?: DesignSystemSubPage }) => {
  const router = useRouter()
  return (
    <MantineNavbar {...navbarProps} width={{ base: 256 }}>
      <ScrollArea>
        <NavLink component={Link} href={`/${router.query.slug}`} label="Preview" />

        <NavLink component={Link} href={`/${router.query.slug}/usage`} label="Usage" />
        {sections.map((section) => (
          <NavLink
            label={section.label}
            key={section.label}
            childrenOffset={28}
            defaultOpened={subPage?.type === section.label.toLowerCase()}
          >
            <NavbarLinks links={section.links} />
          </NavLink>
        ))}
      </ScrollArea>
    </MantineNavbar>
  )
}

export default Navbar
