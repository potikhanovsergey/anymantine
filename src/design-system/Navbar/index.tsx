import {
  Text,
  Accordion,
  Navbar as MantineNavbar,
  ScrollArea,
  NavbarProps,
  Divider,
} from "@mantine/core"
import React from "react"
import NavbarLinks from "./NavbarLinks"
import { DesignSystemSubPage, atoms, tokens, usage } from "src/themes"
import { DesignSystem } from "src/state/design-system"

const Navbar = ({
  subPage,
  ...navbarProps
}: Omit<NavbarProps, "children"> & { subPage?: DesignSystemSubPage }) => {
  return (
    <MantineNavbar {...navbarProps} width={{ base: 256 }}>
      <MantineNavbar.Section grow component={ScrollArea}>
        <Accordion multiple defaultValue={subPage ? [subPage.type] : undefined}>
          <Accordion.Item value="usage">
            <Accordion.Control>Usage</Accordion.Control>
            <Accordion.Panel>
              <NavbarLinks links={usage} />
            </Accordion.Panel>
            <Accordion.Panel>{/** FILES */}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="tokens">
            <Accordion.Control>Tokens</Accordion.Control>
            <Accordion.Panel>
              <NavbarLinks links={tokens} />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="atoms">
            <Accordion.Control>Atoms</Accordion.Control>
            <Accordion.Panel>
              <NavbarLinks links={atoms} />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="molecules">
            <Accordion.Control>Molecules</Accordion.Control>
            <Accordion.Panel>{/** MOLECULES  */}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </MantineNavbar.Section>
      <Divider />
      <MantineNavbar.Section pl="md" py="xs">
        <Text span weight="bold" tt="capitalize" size="xl">
          {DesignSystem.label}
        </Text>
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}

export default Navbar
