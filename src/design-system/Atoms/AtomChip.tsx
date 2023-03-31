import { Group, Button, Text, Stack, Avatar, Chip } from "@mantine/core"
import getButtonConfigurator from "src/design-system/Configurator/configurators/button"
import { DesignTheme } from "src/state/design-system"
import { IconDownload, IconHeart, IconStar } from "@tabler/icons-react"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
import getAvatarConfigurator from "../Configurator/configurators/avatar"
import getChipConfigurator from "../Configurator/configurators/chip"

const chipComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Chip",
  description: `A chip is something between a badge and a checkbox. It looks like a badge and
  can be marked as a checkbox. The chip can be used, for example, to mark appropriate tags for publication.`,
  mantineLink: "https://mantine.dev/core/chip",
  examples: [
    {
      title: "Variants",
      description: `Chips are available in either light, fill or outline styles. An avatar in the fill style has a solid background, since it’s meant to be intentionally more prominent than an avatar in the outline style. Light style simular to filled, but it is not so bright.`,
      children: (
        <Group position="apart">
          <Stack>
            <Text mb="sm" color="dimmed">
              Light
            </Text>
            {[undefined, "green", "red", "gray"].map((color) => (
              <Chip tabIndex={-1} color={color} variant="light" key={color || ""}>
                Chip
              </Chip>
            ))}
          </Stack>
          <Stack>
            <Text mb="sm" color="dimmed">
              Filled
            </Text>
            {[undefined, "green", "red", "gray"].map((color) => (
              <Chip tabIndex={-1} color={color} variant="filled" key={color || ""}>
                Chip
              </Chip>
            ))}
          </Stack>
          <Stack>
            <Text mb="sm" color="dimmed">
              Outline
            </Text>
            {[undefined, "green", "red", "gray"].map((color) => (
              <Chip tabIndex={-1} color={color} variant="outline" key={color || ""}>
                Chip
              </Chip>
            ))}
          </Stack>
        </Group>
      ),
    },
    {
      title: "Size",
      description: `Chips come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack w="75%">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <Chip tabIndex={-1} size={size}>
                Chip
              </Chip>
            </Group>
          ))}
        </Stack>
      ),
    },
  ],
}

const AtomChip = () => {
  const chipConfigurator = getChipConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...chipComponentDocsProps}
      preview={{
        configurator: chipConfigurator,
        children: (
          <Group>
            <Chip>Awesome chip</Chip>
            <Chip variant="light">Awesome chip</Chip>
            <Chip variant="filled">Awesome chip</Chip>
          </Group>
        ),
      }}
    />
  )
}

export default AtomChip
