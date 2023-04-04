import { Textarea, Text, Stack, useMantineTheme } from "@mantine/core"
import ComponentDocs, { ComponentDocsProps } from "src/design-system/ComponentDocs"
import getTextareaConfigurator from "src/design-system/Configurator/configurators/textarea"
import TextareaPreview from "./TextareaPreview"

const textareaDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Textarea",
  description: `A text area component lets a user input a longer amount of text than a standard text field. `,
  mantineLink: "https://mantine.dev/core/textarea",
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
    {
      title: "Disabled",
      description: `A textarea in a disabled state shows that a field exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later.`,
      children: <Textarea disabled label="Disabled textarea" readOnly />,
    },
    {
      title: "Error",
      description: `Textarea can be marked as having an error to show that a selection needs to be made in order to move forward, or that a selection that was made is invalid. For example, in a form that requires a user to acknowledge legal terms before proceeding, the checkbox would show an unchecked error to communicate that it needs to be selected.`,
      children: <Textarea error="Error" label="Textarea with error" readOnly />,
    },
    {
      title: "Required",
      description: (
        <Text>
          Textarea can be marked as required with (unsurprisingly) <strong>required</strong> prop.
          For example, you can use it in a form that requires a user to fill textarea before
          proceeding. If user submits the form with unfilled textarea, the browser will notify user
          about it. <strong>withAsterisk</strong> prop does the same visuals, but without any logic
          on submit.ç
        </Text>
      ),
      children: (
        <Textarea
          label="Write about your favorite fruits"
          description="This is anonymous"
          required
        />
      ),
    },
  ],
}

const AtomTextarea = () => {
  const theme = useMantineTheme()
  const textareaConfigurator = getTextareaConfigurator(theme)

  return (
    <ComponentDocs
      {...textareaDocsProps}
      preview={{
        configurator: textareaConfigurator,
        children: <TextareaPreview />,
      }}
    />
  )
}

export default AtomTextarea
