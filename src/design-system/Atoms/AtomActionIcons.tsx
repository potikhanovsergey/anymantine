import { Group, ActionIcon, Button, Stack, Title, Text, Tooltip } from "@mantine/core"
import { IconDownload, IconHeart, IconSettings } from "@tabler/icons-react"
import getActionIconConfigurator from "src/design-system/Configurator/configurators/action-icon"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"
import Example from "../Tokens/Example"

const AtomActionIcons = () => {
  const actionIconConfigurator = getActionIconConfigurator(DesignTheme.peek())
  return (
    <Stack spacing={40}>
      <div>
        <Title order={1} mb="md">
          Action Icon
        </Title>
        <Text maw="75%">
          Buttons allow users to perform an action or to navigate to another page. They have
          multiple styles for various needs, and are ideal for calling attention to where a user
          needs to do something in order to move forward in a flow.
        </Text>
      </div>
      <ItemPreview
        configurator={actionIconConfigurator}
        title="Action Icon"
        mantineLink="https://mantine.dev/core/action-icon"
      >
        <Group>
          <ActionIcon variant="primary">
            <IconHeart stroke={1} size="75%" />
          </ActionIcon>
          <ActionIcon variant="secondary">
            <IconHeart stroke={1} size="75%" />
          </ActionIcon>
          <ActionIcon variant="transparent">
            <IconHeart stroke={1} size="75%" />
          </ActionIcon>
        </Group>
      </ItemPreview>
      <div>
        <Title order={2} mb="md">
          Options
        </Title>
        <Stack spacing={40}>
          <Example
            title="Tooltip"
            description="Buttons should always have a label, unless they are only using an icon that is universally understood and accessible. They can have an optional icon, but it should not be used for decoration. Use an icon only when necessary and when it has a strong association with the label text."
          >
            <Group>
              <div>
                <Text mb="sm" color="dimmed">
                  With tooltip
                </Text>
                <Tooltip label="Profile settings">
                  <ActionIcon>
                    <IconSettings />
                  </ActionIcon>
                </Tooltip>
              </div>
              <div>
                <Text mb="sm" color="dimmed">
                  Without tooltip
                </Text>
                <ActionIcon>
                  <IconSettings />
                </ActionIcon>
              </div>
            </Group>
          </Example>
          <Example
            title="Variants"
            description="Buttons are available in either fill or outline styles. A button in the fill style has a solid background, since it’s meant to be intentionally more prominent than a button in the outline style."
          >
            <Group position="apart">
              <Stack>
                <Text mb="sm" color="dimmed">
                  Primary
                </Text>
                {[undefined, "green", "red", "gray"].map((color) => (
                  <ActionIcon tabIndex={-1} color={color} variant="primary" key={color}>
                    <IconSettings />
                  </ActionIcon>
                ))}
              </Stack>
              <Stack>
                <Text mb="sm" color="dimmed">
                  Secondary
                </Text>
                {[undefined, "green", "red", "gray"].map((color) => (
                  <ActionIcon tabIndex={-1} color={color} variant="secondary" key={color}>
                    <IconSettings />
                  </ActionIcon>
                ))}
              </Stack>
              <Stack>
                <Text mb="sm" color="dimmed">
                  Transparent
                </Text>
                {[undefined, "green", "red", "gray"].map((color) => (
                  <ActionIcon tabIndex={-1} color={color} variant="transparent" key={color}>
                    <IconSettings />
                  </ActionIcon>
                ))}
              </Stack>
            </Group>
          </Example>
          <Example
            title="Size"
            description="Action icons come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page."
          >
            <Stack w="75%">
              {["xs", "sm", "md", "lg", "xl"].map((size) => (
                <Group w="100%" position="apart" key={size}>
                  <Text color="dimmed">{size}</Text>
                  <ActionIcon tabIndex={-1} size={size}>
                    <IconSettings />
                  </ActionIcon>
                </Group>
              ))}
            </Stack>
          </Example>
          <Example
            title="Loading"
            description="Buttons can indicate that a quick progress taking place (e.g., saving settings on a server). In this case, the label and optional icon disappear and a progress circle appears. The progress circle always shows an indeterminate progress."
          >
            <Group>
              {["primary", "secondary"].map((variant) => (
                <Stack key={variant}>
                  <Text color="dimmed">{variant}</Text>
                  <ActionIcon tabIndex={-1} loading variant={variant}>
                    <IconSettings />
                  </ActionIcon>
                </Stack>
              ))}
            </Group>
          </Example>
          <Example
            title="Disabled"
            description="A button in a disabled state shows that an action exists, but is not available in that circumstance. This state can be used to maintain layout continuity and to communicate that an action may become available later."
          >
            <Group>
              {["primary", "secondary"].map((variant) => (
                <Stack key={variant}>
                  <Text color="dimmed">{variant}</Text>
                  <ActionIcon tabIndex={-1} disabled variant={variant}>
                    <IconSettings />
                  </ActionIcon>
                </Stack>
              ))}
            </Group>
          </Example>
        </Stack>
      </div>
    </Stack>
  )
}

export default AtomActionIcons
