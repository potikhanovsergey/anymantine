import { Group, Stack, Text, Anchor } from "@mantine/core"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
import getAnchorConfigurator from "../Configurator/configurators/anchor"

const anchorComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Anchor",
  description: `Anchors(links) allow users to navigate to a different location. They can be presented inside a
  paragraph or as standalone text.`,
  mantineLink: "https://mantine.dev/core/anchor",
  examples: [
    {
      title: "Size",
      description: `Anchors come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
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
      ),
    },
    {
      title: "Underline",
      description: `Underlined variant should be used to call attention to the link. Its no-underline appearance is optimal for when the underlined variant is too overwhelming, such as in blocks of text with several references linked throughout.`,
      children: (
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
      ),
    },
  ],
}

const AtomAnchor = () => {
  const anchorConfigurator = getAnchorConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...anchorComponentDocsProps}
      preview={{
        title: "Anchor",
        configurator: anchorConfigurator,
        children: (
          <Group>
            <Anchor color="grape" size="xl">
              Link
            </Anchor>
            <Anchor color="green" underline={false}>
              Link
            </Anchor>
            <Anchor strikethrough={true}>Link</Anchor>
          </Group>
        ),
      }}
    />
  )
}

export default AtomAnchor
