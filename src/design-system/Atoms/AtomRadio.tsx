import { Group, Stack, Radio, Text, Center, useMantineTheme } from "@mantine/core"
import getRadioConfigurator from "src/design-system/Configurator/configurators/radio"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"

const radioComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Radio Button",
  description: `A radio button is an interface element that allows the user to select one option from a predefined set. A radio group is a grouping of radio buttons that are related to each other.`,
  mantineLink: "https://mantine.dev/core/radio",

  examples: [
    {
      title: "Label",
      description: `Radio buttons should always have a label. When the label is not defined, a radio button becomes standalone. Standalone radio buttons are only used when their connection to other components is clear and they give sufficient context — for example, in application panels.`,
      children: (
        <Group position="center">
          {["labeled", "standalone"].map((variant) => (
            <Stack key={variant}>
              <Text color="dimmed" tt="capitalize">
                {variant}
              </Text>
              <Radio value="kiwi" label={variant === "labeled" && "Kiwi"} />{" "}
            </Stack>
          ))}
        </Group>
      ),
    },
    {
      title: "Label position",
      description: `You can use different label positions depending on the layout where you use radio buttons.`,
      children: (
        <Stack align="center">
          {["left", "right"].map((position) => (
            <Radio
              value="kiwi"
              labelPosition={position as "left" | "right"}
              label="Kiwi"
              key={position}
            />
          ))}
        </Stack>
      ),
    },
    {
      title: "Size",
      description: `Radio buttons come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack>
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <Radio value="kiwi" label="Kiwi" size={size} />
            </Group>
          ))}
        </Stack>
      ),
    },
    {
      title: "Disabled",
      description: `A radio button in a disabled state shows that a selection exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later.`,
      children: (
        <Group position="center">
          {[false, true].map((checked) => (
            <Radio key={checked + ""} disabled label="Kiwi" readOnly checked={checked} />
          ))}
        </Group>
      ),
    },
    {
      title: "Error",
      description: `Radio buttons can be marked as having an error to show that a selection needs to be made in order to move forward, or that a selection that was made is invalid. For example, in a form that requires a user to acknowledge legal terms before proceeding, the checkbox would show an unchecked error to communicate that it needs to be selected.`,
      children: (
        <Group position="center">
          {[false, true].map((checked) => (
            <Radio key={checked + ""} error="Error" label="Kiwi" readOnly checked={checked} />
          ))}
        </Group>
      ),
    },
    {
      title: "Required",
      description: `Radio buttons group can be marked as required to show that a selection needs to be made in order to move forward. For example, in a form that requires a user to acknowledge legal terms before proceeding, the checkbox would show an unchecked error to communicate that it needs to be selected. WithAsterisk prop do the same thing but without logic.`,
      children: (
        <Center>
          <Radio.Group
            name="favoriteFruitRequired"
            label="Select your favorite fruit"
            description="This is anonymous"
            withAsterisk
            defaultValue="mango"
          >
            <Group mt="xs">
              {["Kiwi", "Mango", "Apple", "Banana"].map((label) => (
                <Radio key={label} value={label} label={label} />
              ))}
            </Group>
          </Radio.Group>
        </Center>
      ),
    },
  ],
}

const AtomRadios = () => {
  const theme = useMantineTheme()
  const radioConfigurator = getRadioConfigurator(theme)
  return (
    <ComponentDocs
      {...radioComponentDocsProps}
      preview={{
        configurator: radioConfigurator,
        children: (
          <Radio.Group
            name="favoriteFruit"
            label="Select your favorite fruit"
            description="This is anonymous"
            withAsterisk
            defaultValue="kiwi"
          >
            <Group mt="xs">
              <Radio value="kiwi" label="Kiwi" />
              <Radio value="mango" label="Mango" />
              <Radio value="apple" label="Apple" />
              <Radio value="banana" label="Banana" />
            </Group>
          </Radio.Group>
        ),
      }}
    />
  )
}

export default AtomRadios
