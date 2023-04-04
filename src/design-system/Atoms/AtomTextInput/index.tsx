import { Group, Stack, TextInput, Text, Loader, useMantineTheme } from "@mantine/core"
import ComponentDocs, { ComponentDocsProps } from "src/design-system/ComponentDocs"
import getTextInputConfigurator from "src/design-system/Configurator/configurators/text-input"
import ExampleIcon from "src/design-system/ExampleIcon"
import TextInputPreview from "./TextInputPreview"

const textInputComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Text Input",
  description: `Text inputs allow users to input custom text entries with a keyboard. Various options can be shown with the field to communicate the input requirements.`,
  mantineLink: "https://mantine.dev/core/text-input",
  examples: [
    {
      title: "Label",
      description: `Text inputs should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. These text inputs without a visible label should still include an aria-label in HTML (depending on the context, “aria-label” or “aria-labelledby”).`,
      children: (
        <Stack>
          {["labeled", "standalone"].map((variant) => (
            <Stack key={variant}>
              <Text color="dimmed" tt="capitalize">
                {variant}
              </Text>
              <TextInput label={variant === "labeled" && "Label"} placeholder="Placeholder..." />
            </Stack>
          ))}
        </Stack>
      ),
    },
    {
      title: "Description",
      description: `Text inputs can have a description. It useful in cases where text input is needing some context to fill it, or the description may contain recommendations for filling out the input.`,
      children: (
        <TextInput
          label="Address"
          description="Please write your street, house and apartment separated by commas"
          placeholder="Placeholder..."
        />
      ),
    },
    {
      title: "Variants",
      description: `Text inputs are available in either fill or outline styles. An input in the fill style has a solid background, since it’s meant to be intentionally more prominent than an input in the outline style.`,
      children: (
        <Stack>
          {["filled", "default"].map((variant) => (
            <Stack spacing="xs" key={variant}>
              <Text color="dimmed" tt="capitalize">
                {variant}
              </Text>
              <TextInput label="Label" placeholder="Placeholder..." variant={variant} />
            </Stack>
          ))}
        </Stack>
      ),
    },
    {
      title: "Size",
      description: `Text inputs come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack align="center">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <TextInput label="Label" placeholder="Placeholder..." size={size} />
            </Group>
          ))}
        </Stack>
      ),
    },
    {
      title: "Disabled",
      description: `An input in a disabled state shows that an input exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later.`,
      children: <TextInput label="Label" placeholder="Placeholder..." disabled />,
    },
    {
      title: "Error",
      description: `Text input can be marked as having an error to show that an input didnt pass the validation to move forward.`,
      children: <TextInput label="Label" defaultValue="Wrong value..." error="Error..." />,
    },
    {
      title: "Required",
      description: `Text input can be marked as required to show that a input needs to be fill in order to move forward. WithAsterisk prop do the same thing but without logic.`,
      children: <TextInput label="Label" placeholder="Placeholder..." required />,
    },
    {
      title: "With icon",
      description:
        "Text input can display an icon in the left. It is useful for email input, for example.",
      children: <TextInput icon={<ExampleIcon />} label="Label" placeholder="Иконка слева" />,
    },
    {
      title: "With right section",
      description:
        "Text input can display a react node in the right. It is useful for loading state. We do not recommend using it for icons.",
      children: (
        <TextInput rightSection={<Loader size="sm" />} label="Label" placeholder="Right section" />
      ),
    },
  ],
}

const AtomTextInputs = () => {
  const theme = useMantineTheme()
  const textInputConfigurator = getTextInputConfigurator(theme)

  return (
    <ComponentDocs
      {...textInputComponentDocsProps}
      preview={{
        configurator: textInputConfigurator,
        children: <TextInputPreview />,
      }}
    />
  )
}

export default AtomTextInputs
