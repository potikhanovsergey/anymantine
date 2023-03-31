import { Group, ActionIcon, Stack, Text, Tooltip } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import getActionIconConfigurator from "src/design-system/Configurator/configurators/action-icon"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
import ExampleIcon from "../ExampleIcon"

const actionIconComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Action Icon",
  description: `Buttons allow users to perform an action or to navigate to another page. They have
  multiple styles for various needs, and are ideal for calling attention to where a user
  needs to do something in order to move forward in a flow.`,
  mantineLink: "https://mantine.dev/core/action-icon",
  examples: [
    {
      title: "Tooltip",
      description: `Buttons should always have a label, unless they are only using an icon that is universally understood and accessible. They can have an optional icon, but it should not be used for decoration. Use an icon only when necessary and when it has a strong association with the label text.`,
      children: (
        <Group position="center">
          <div>
            <Text mb="sm" color="dimmed">
              With tooltip
            </Text>
            <Tooltip label="Profile settings">
              <ActionIcon>
                <ExampleIcon />
              </ActionIcon>
            </Tooltip>
          </div>
          <div>
            <Text mb="sm" color="dimmed">
              Without tooltip
            </Text>
            <ActionIcon>
              <ExampleIcon />
            </ActionIcon>
          </div>
        </Group>
      ),
    },
    {
      title: "Variants",
      description: `Buttons are available in either fill or outline styles. A button in the fill style has a solid background, since it’s meant to be intentionally more prominent than a button in the outline style.`,
      children: (
        <Group position="center">
          {["primary", "secondary", "transparent"].map((variant) => (
            <Stack key={variant}>
              <Text mb="sm" color="dimmed">
                {variant}
              </Text>
              <ActionIcon variant={variant}>
                <ExampleIcon />
              </ActionIcon>
            </Stack>
          ))}
        </Group>
      ),
    },
    {
      title: "Size",
      description: `Action icons come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack>
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <ActionIcon size={size}>
                <ExampleIcon />
              </ActionIcon>
            </Group>
          ))}
        </Stack>
      ),
    },
    {
      title: "Loading",
      description: `Buttons can indicate that a quick progress taking place (e.g., saving settings on a server). In this case, the label and optional icon disappear and a progress circle appears. The progress circle always shows an indeterminate progress.`,
      children: (
        <Group position="center">
          {["primary", "secondary"].map((variant) => (
            <Stack key={variant}>
              <Text color="dimmed">{variant}</Text>
              <ActionIcon loading variant={variant}>
                <ExampleIcon />
              </ActionIcon>
            </Stack>
          ))}
        </Group>
      ),
    },
    {
      title: "Disabled",
      description: `A button in a disabled state shows that an action exists, but is not available in that circumstance. This state can be used to maintain layout continuity and to communicate that an action may become available later.`,
      children: (
        <Group position="center">
          {["primary", "secondary"].map((variant) => (
            <Stack key={variant}>
              <Text color="dimmed">{variant}</Text>
              <ActionIcon disabled variant={variant}>
                <ExampleIcon />
              </ActionIcon>
            </Stack>
          ))}
        </Group>
      ),
    },
  ],
}

const AtomActionIcons = () => {
  const actionIconConfigurator = getActionIconConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...actionIconComponentDocsProps}
      preview={{
        configurator: actionIconConfigurator,
        children: (
          <Group>
            {["primary", "secondary", "transparent"].map((variant) => (
              <ActionIcon key={variant} variant={variant}>
                <ExampleIcon />
              </ActionIcon>
            ))}
          </Group>
        ),
      }}
    />
  )
}

export default AtomActionIcons
