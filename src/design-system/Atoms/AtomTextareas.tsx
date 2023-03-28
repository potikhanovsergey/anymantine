import { SimpleGrid, Textarea, Text, Stack } from "@mantine/core"
import getTextareaConfigurator from "src/design-system/Configurator/configurators/textarea"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"

const textareaDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Textarea",
  description: `A text area component lets a user input a longer amount of text than a standard text field. `,
  examples: [
    {
      title: "Autosize",
      description: (
        <Text>
          With <strong>autosize</strong> prop set to true textarea&apos;s height will grow until
          maxRows are reached or indefinitely if maxRows not set.
        </Text>
      ),
      children: (
        <Stack>
          <Textarea
            placeholder="Autosize with no rows limit"
            label="Autosize with no rows limit"
            autosize
            minRows={2}
          />

          <Textarea
            label="Autosize with 4 rows max"
            placeholder="Autosize with 4 rows max"
            autosize
            minRows={2}
            maxRows={4}
          />
        </Stack>
      ),
    },
  ],
}

const AtomTextareas = () => {
  const textareaConfigurator = getTextareaConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...textareaDocsProps}
      preview={{
        title: "Textarea",
        configurator: textareaConfigurator,
        mantineLink: "https://mantine.dev/core/textarea",
        children: (
          <SimpleGrid cols={2}>
            <Textarea label="Label" placeholder="Placeholder..." />
            <Textarea label="Label" defaultValue="Wrong value..." error="Error..." />
            <Textarea label="Label" description="Description..." placeholder="Placeholder..." />
          </SimpleGrid>
        ),
      }}
    />
  )
}

export default AtomTextareas
