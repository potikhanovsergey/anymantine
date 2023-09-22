import { AppShell, Avatar, Group, Text, Tooltip } from "@mantine/core"
import NextLink from "next/link"

const Footer = () => {
  return (
    <AppShell.Footer>
      <Group gap="sm" m="md" mt="xl" justify="flex-end">
        <Text>Made by</Text>
        <NextLink href="https://www.linkedin.com/in/sergey-potikhanov-647b87207/" target="_blank">
          <Tooltip label="Sergey Potikhanov" transitionProps={{ transition: "pop", duration: 200 }}>
            <Avatar radius="md" src="/images/potikhanov.jpeg" />
          </Tooltip>
        </NextLink>
        <NextLink href="https://t.me/daryasyomina" target="_blank">
          <Tooltip label="Darya Syomina" transitionProps={{ transition: "pop", duration: 200 }}>
            <Avatar radius="md" src="/images/syomina.jpeg" />
          </Tooltip>
        </NextLink>
      </Group>
    </AppShell.Footer>
  )
}

export default Footer
