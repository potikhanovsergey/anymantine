import {
  Grid,
  Tabs,
  Tooltip,
  useMantineTheme,
  Text,
  Accordion,
  Navbar,
  ScrollArea,
  NavbarProps,
} from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
import React from "react"
import NavbarLinks from "./NavbarLinks"
import { atoms, tokens } from "src/themes"

const ViewTabs = (props: Omit<NavbarProps, "children">) => {
  return (
    <Navbar {...props} width={{ base: 256 }}>
      <Navbar.Section grow component={ScrollArea}>
        <Accordion multiple defaultValue={["tokens"]}>
          <Accordion.Item value="files">
            <Tooltip
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
            >
              <Accordion.Control chevron={<IconLock stroke={1} />} disabled>
                Использование
              </Accordion.Control>
            </Tooltip>

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
      </Navbar.Section>
    </Navbar>
  )
}

export default ViewTabs
