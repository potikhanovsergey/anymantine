import { Group, Badge, Text, Box, Flex, ActionIcon, rem, Avatar, Stack } from "@mantine/core"
import { IconHeart, IconX } from "@tabler/icons-react"
import getBadgeConfigurator from "src/design-system/Configurator/configurators/badge"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"

const removeButton = (
  <ActionIcon size="xs" variant="transparent">
    <IconX size={rem(10)} />
  </ActionIcon>
)

const badgeComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Badge",
  description: `Badges are colored text elements containing small bits of information. They are used for labeling content, displaying metadata and/or highlighting information.`,
  mantineLink: "https://mantine.dev/core/badge",
  examples: [
    {
      title: "Full width and overflow",
      description: `Badge will take full width of container if fullWidth prop is true. If badge cannot fit in its container, overflow content will be hidden with ellipsis:`,
      children: (
        <Group>
          <Flex>
            <div>
              <Text mb="sm" color="dimmed">
                Full width
              </Text>
              <Box w={200}>
                <Badge fullWidth>Full width badge</Badge>
              </Box>
            </div>

            <div>
              <Text mb="sm" color="dimmed">
                Overflow
              </Text>
              <Box w={120} ml="md">
                <Badge fullWidth>Badge with overflow</Badge>
              </Box>
            </div>
          </Flex>
        </Group>
      ),
    },
    {
      title: "Right and left sections",
      description: `You can use rightSection and leftSection props to add meaning or functionality to the badges.`,
      children: (
        <Stack align="center">
          <Badge
            pl={0}
            size="lg"
            color="violet"
            radius="xl"
            leftSection={
              <Avatar
                radius={1000}
                size={24}
                src="https://media.wired.com/photos/5fb2cc575c9914713ead03de/1:1/w_1358,h_1358,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg"
              />
            }
          >
            Laptops
          </Badge>
          <Badge pr={3} rightSection={removeButton}>
            Badge with right section
          </Badge>
          <Badge pl={3} leftSection={removeButton}>
            Badge with left section
          </Badge>
        </Stack>
      ),
    },
  ],
}

const AtomBadges = () => {
  const badgeConfigurator = getBadgeConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...badgeComponentDocsProps}
      preview={{
        title: "Badge",
        configurator: badgeConfigurator,
        children: (
          <Group>
            <Badge>Badge</Badge>
            <Badge leftSection={<IconHeart size={10} />}>Badge with left icon</Badge>
          </Group>
        ),
      }}
    />
  )
}

export default AtomBadges
