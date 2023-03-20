import {
  Tooltip,
  Text,
  Accordion,
  Navbar as MantineNavbar,
  ScrollArea,
  NavbarProps,
  Divider,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
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
            {/* <Tooltip
              multiline
              label={
                <>
                  <Text size="sm" weight={600}>
                    Инструкции, файлы
                  </Text>
                  <Text size="xs">Необходимо приобрести дизайн-систему</Text>
                </>
              }
              withinPortal
              position="right"
            > */}
            <Accordion.Control>Использование</Accordion.Control>
            <Accordion.Panel>
              <NavbarLinks links={usage} />
            </Accordion.Panel>
            {/* </Tooltip> */}

            <Accordion.Panel>{/** FILES */}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="tokens">
            <Accordion.Control>Токены</Accordion.Control>
            <Accordion.Panel>
              <NavbarLinks links={tokens} />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="atoms">
            <Accordion.Control>Атомы</Accordion.Control>
            <Accordion.Panel>
              <NavbarLinks links={atoms} />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="molecules">
            <Accordion.Control>Молекулы</Accordion.Control>
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
