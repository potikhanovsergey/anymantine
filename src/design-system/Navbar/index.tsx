import { Navbar as MantineNavbar, NavbarProps, NavLink, ScrollArea, Tooltip } from "@mantine/core"
import React from "react"
import NavbarLinks from "./NavbarLinks"
import { DesignSystemSubPage, atoms, molecules, tokens } from "public/themes"
import Link from "next/link"
import { useRouter } from "next/router"

const sections = [
  {
    label: "Tokens",
    links: tokens,
    description: `Design tokens are all the values needed to construct and maintain a design system — spacing, color, typography, object styles, animation, etc. — represented as data.`,
  },
  {
    label: "Atoms",
    links: atoms,
    description: `Atoms are UI elements that serve as the elemental building blocks of an interface. We use most of Mantine components as atoms.`,
  },
  {
    label: "Molecules",
    links: molecules,
    description: `Molecules are collections of atoms that form relatively simple UI components.`,
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
        <NavLink
          active={!router.query.page}
          component={Link}
          href={`/${router.query.slug}`}
          label="Preview"
        />

        <NavLink
          active={router.query.page === "usage"}
          component={Link}
          href={`/${router.query.slug}/usage`}
          label="Usage"
        />
        {sections.map((section) => (
          <Tooltip
            multiline
            key={section.label}
            label={section.description}
            width={320}
            position="right"
            withinPortal
          >
            <NavLink
              label={section.label}
              key={section.label}
              childrenOffset={28}
              defaultOpened={subPage?.type === section.label.toLowerCase()}
            >
              <NavbarLinks links={section.links} />
            </NavLink>
          </Tooltip>
        ))}
      </ScrollArea>
    </MantineNavbar>
  )
}

export default Navbar
