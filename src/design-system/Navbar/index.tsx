import { Navbar as MantineNavbar, NavbarProps, NavLink, ScrollArea } from "@mantine/core"
import React from "react"
import NavbarLinks from "./NavbarLinks"
import { DesignSystemSubPage, atoms, tokens } from "src/themes"

const sections = [
  {
    label: "Usage",
    links: [],
  },
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
  return (
    <MantineNavbar {...navbarProps} width={{ base: 256 }}>
      <ScrollArea>
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
