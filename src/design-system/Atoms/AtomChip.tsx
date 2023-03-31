import { Group, Text, Stack, Chip } from "@mantine/core"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
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
          {["light", "filled", "outline"].map((variant) => (
            <Stack key={variant}>
              <Text mb="xs" color="dimmed" tt="capitalize">
                {variant}
              </Text>
              <Chip tabIndex={-1} variant={variant}>
                Chip
              </Chip>
            </Stack>
          ))}
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
    {
      title: "Chip.Group",
      description:
        "Chip.Group component can be used to display a list of related chips. You may want to use it everytime you have more than one chip.",
      children: (
        <>
          <Text color="dimmed">Default</Text>
          <Chip.Group>
            <Group position="center">
              <Chip value="1">Single chip</Chip>
              <Chip value="2">Can be selected</Chip>
              <Chip value="3">At a time</Chip>
            </Group>
          </Chip.Group>
          <Text color="dimmed">
            With <strong>multiple</strong> prop
          </Text>
          <Chip.Group multiple>
            <Group position="center">
              <Chip value="1">Multiple chips</Chip>
              <Chip value="2">Can be selected</Chip>
              <Chip value="3">At a time</Chip>
            </Group>
          </Chip.Group>
        </>
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
            <Chip variant="outline">Awesome chip</Chip>
            <Chip variant="light">Awesome chip</Chip>
            <Chip variant="filled">Awesome chip</Chip>
          </Group>
        ),
      }}
    />
  )
}

export default AtomChip
