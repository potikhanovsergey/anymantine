import { ScrollArea, NavLink, Tooltip } from "@mantine/core"
import Link from "next/link"
import router, { useRouter } from "next/router"
import { FC } from "react"
import NavbarLinks from "./NavbarLinks"
import { atoms, DesignSystemSubPage, molecules, tokens } from "public/themes"

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

interface NavbarInnerProps {
  subPage?: DesignSystemSubPage
}

const NavbarInner: FC<NavbarInnerProps> = ({ subPage }) => {
  const router = useRouter()
  return (
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
  )
}

export default NavbarInner
