import { AppShell, Avatar, Group, Text, Tooltip } from "@mantine/core"
import NextLink from "next/link"

const Footer = () => {
  return (
    <AppShell.Footer>
      <Group px="sm" gap="sm" h="100%" align="center" justify="flex-end">
        <Text size="sm" fw="bold">
          Authors
        </Text>
        <NextLink href="https://t.me/potikhanovsergey" target="_blank">
          <Tooltip label="Sergey Potikhanov">
            <Avatar size={32} src="/images/potikhanov.jpeg" />
          </Tooltip>
        </NextLink>
        <NextLink href="https://t.me/daryasyomina" target="_blank">
          <Tooltip label="Darya Syomina">
            <Avatar size={32} src="/images/syomina.jpeg" />
          </Tooltip>
        </NextLink>
      </Group>
    </AppShell.Footer>
  )
}

export default Footer
