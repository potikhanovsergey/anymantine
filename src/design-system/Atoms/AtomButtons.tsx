import { Group, Button, Title, Text, Stack, useMantineTheme } from "@mantine/core"
import getButtonConfigurator from "src/design-system/Configurator/configurators/button"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"
import Example from "../Tokens/Example"
import { IconDownload } from "@tabler/icons-react"

const AtomButtons = () => {
  const buttonConfigurator = getButtonConfigurator(DesignTheme.peek())
  return (
    <Stack spacing={40}>
      <div>
        <Title order={1} mb="md">
          Button
        </Title>
        <Text maw="75%">
          Buttons allow users to perform an action or to navigate to another page. They have
          multiple styles for various needs, and are ideal for calling attention to where a user
          needs to do something in order to move forward in a flow.
        </Text>
      </div>
      <ItemPreview
        configurator={buttonConfigurator}
        title="Button"
        mantineLink="https://mantine.dev/core/button"
      >
        <Group>
          <Button variant="primary">Пример кнопки</Button>
          <Button variant="secondary">Пример кнопки</Button>
        </Group>
      </ItemPreview>
      <div>
        <Title order={2} mb="md">
          Options
        </Title>
        <Stack spacing={40}>
          <Example
            title="Label and icon"
            description="Buttons should always have a label, unless they are only using an icon that is universally understood and accessible. They can have an optional icon, but it should not be used for decoration. Use an icon only when necessary and when it has a strong association with the label text."
          >
            <Stack>
              <Button leftIcon={<IconDownload size={16} />}>With icon</Button>
              <Button>Without icon</Button>
            </Stack>
          </Example>
          <Example
            title="Negative button"
            description="The negative button is for emphasizing actions that can be destructive or have negative consequences if taken. Use it sparingly."
          >
            <Stack>
              <Button color="red" variant="primary">
                Destructive action
              </Button>
              <Button color="red" variant="secondary">
                Destructive action
              </Button>
            </Stack>
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
                  <Button tabIndex={-1} color={color} variant="primary" key={color}>
                    Action
                  </Button>
                ))}
              </Stack>
              <Stack>
                <Text mb="sm" color="dimmed">
                  Secondary
                </Text>
                {[undefined, "green", "red", "gray"].map((color) => (
                  <Button tabIndex={-1} color={color} variant="secondary" key={color}>
                    Action
                  </Button>
                ))}
              </Stack>
            </Group>
          </Example>
          <Example
            title="Size"
            description="Buttons come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page."
          >
            <Stack w="75%">
              {["xs", "sm", "md", "lg", "xl"].map((size) => (
                <Group w="100%" position="apart" key={size}>
                  <Text color="dimmed">{size}</Text>
                  <Button tabIndex={-1} size={size}>
                    Action
                  </Button>
                </Group>
              ))}
            </Stack>
          </Example>
          <Example
            title="Full width"
            description="By default, the button size depends on the label and/or icon inside of each button. When a button is justified, it takes up the entire available container width."
          >
            <Stack w="75%">
              {["primary", "secondary"].map((variant) => (
                <Group w="100%" position="apart" key={variant}>
                  <Text color="dimmed">{variant}</Text>
                  <Button tabIndex={-1} fullWidth variant={variant}>
                    Action
                  </Button>
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
                  <Button tabIndex={-1} loading variant={variant}>
                    Action
                  </Button>
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
                  <Button tabIndex={-1} disabled variant={variant}>
                    Action
                  </Button>
                </Stack>
              ))}
            </Group>
          </Example>
        </Stack>
      </div>
    </Stack>
  )
}

export default AtomButtons
