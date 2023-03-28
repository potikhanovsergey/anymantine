import { Group, ActionIcon, Button, Stack, Title, Text, Tooltip, Anchor } from "@mantine/core"
import { IconDownload, IconHeart, IconSettings } from "@tabler/icons-react"
import getActionIconConfigurator from "src/design-system/Configurator/configurators/action-icon"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"
import getAnchorConfigurator from "../Configurator/configurators/anchor"
import Example from "../Tokens/Example"

const AtomAnchor = () => {
  const anchorConfigurator = getAnchorConfigurator(DesignTheme.peek())
  return (
    <Stack spacing={40}>
      <div>
        <Title order={1} mb="md">
          Anchor
        </Title>
        <Text maw="75%">
          Links allow users to navigate to a different location. They can be presented inside a
          paragraph or as standalone text.
        </Text>
      </div>
      <ItemPreview
        configurator={anchorConfigurator}
        title="Anchor"
        mantineLink="https://mantine.dev/core/anchor"
      >
        <Group>
          <Anchor color="grape" size="xl">
            Link
          </Anchor>
          <Anchor color="green" underline={false}>
            Link
          </Anchor>
          <Anchor strikethrough={true}>Link</Anchor>
        </Group>
      </ItemPreview>
      <div>
        <Title order={2} mb="md">
          Options
        </Title>
        <Stack spacing={40}>
          <Example
            title="Size"
            description="Anchors come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page."
          >
            <Stack w="75%">
              {["xs", "sm", "md", "lg", "xl"].map((size) => (
                <Group w="100%" position="apart" key={size}>
                  <Text color="dimmed">{size}</Text>
                  <Anchor tabIndex={-1} size={size}>
                    Link
                  </Anchor>
                </Group>
              ))}
            </Stack>
          </Example>
          <Example
            title="Underline"
            description="Underlined variant should be used to call attention to the link. Its no-underline appearance is optimal for when the underlined variant is too overwhelming, such as in blocks of text with several references linked throughout."
          >
            <Group>
              {["underline", "no underline"].map((variant) => (
                <Stack key={variant}>
                  <Text color="dimmed">{variant}</Text>
                  <Anchor tabIndex={-1} underline={variant === "underline"}>
                    Link
                  </Anchor>
                </Stack>
              ))}
            </Group>
          </Example>
        </Stack>
      </div>
    </Stack>
  )
}

export default AtomAnchor
