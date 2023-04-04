import { Stack, Group, Anchor, Text } from "@mantine/core"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"

const anchorDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Anchor",
  description: `Anchors (links) allow users to navigate to a different location. They can be presented inside a
  paragraph or as standalone text.`,
  mantineLink: "https://mantine.dev/core/anchor",
  examples: [
    {
      title: "Size",
      description: `Anchors come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack>
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <Anchor size={size}>Link</Anchor>
            </Group>
          ))}
        </Stack>
      ),
    },
    {
      title: "Underline",
      description: `Underlined variant should be used to call attention to the link. Its no-underline appearance is optimal for when the underlined variant is too overwhelming, such as in blocks of text with several references linked throughout.`,
      children: (
        <Group position="center">
          {[true, false].map((underline) => (
            <Stack key={underline + ""}>
              <Text color="dimmed">
                {underline ? "Underline on hover" : "No underline on hover"}
              </Text>
              <Anchor underline={underline}>Link</Anchor>
            </Stack>
          ))}
        </Group>
      ),
    },
  ],
}

export default anchorDocsProps
