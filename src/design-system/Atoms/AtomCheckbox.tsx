import { Group, Checkbox, Stack, Text, Center, useMantineTheme } from "@mantine/core"
import getCheckboxConfigurator from "src/design-system/Configurator/configurators/checkbox"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"

const checkboxComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Checkbox",
  description: `Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected. A checkbox group is a grouping of checkboxes that are related to each other.`,
  mantineLink: "https://mantine.dev/core/checkbox",
  examples: [
    {
      title: "Label",
      description: `Checkboxes should always have a label. When the label is not defined, a checkbox becomes standalone. Standalone checkboxes are only used when their connection to other components is clear and they give sufficient context — for example, in application panels.`,
      children: (
        <Group position="center">
          {["labeled", "standalone"].map((variant) => (
            <Stack key={variant}>
              <Text color="dimmed" tt="capitalize">
                {variant}
              </Text>
              <Checkbox label={variant === "labeled" && "Default checkbox"} />
            </Stack>
          ))}
        </Group>
      ),
    },
    {
      title: "Label position",
      description: `You can use different label positions depending on the layout where you use checkbox.`,
      children: (
        <Stack align="center">
          {["left", "right"].map((position) => (
            <Checkbox
              label="Default checkbox"
              labelPosition={position as "left" | "right"}
              key={position}
            />
          ))}
        </Stack>
      ),
    },
    {
      title: "State",
      description: `Checkboxes can be selected, not selected, or in an indeterminate state. They are in an indeterminate state when they represent both selected and not selected values. Learn more about representing mixed values.`,
      children: (
        <Stack spacing="lg" align="center">
          {["not selected", "selected", "indeterminate"].map((variant) => (
            <Stack spacing="xs" key={variant}>
              <Text color="dimmed">{variant}</Text>
              <Checkbox
                label="Default checkbox"
                readOnly
                checked={variant === "selected"}
                indeterminate={variant === "indeterminate"}
              />
            </Stack>
          ))}
        </Stack>
      ),
    },
    {
      title: "Size",
      description: `Checkboxes come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack>
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <Checkbox label="Default checkbox" size={size} />
            </Group>
          ))}
        </Stack>
      ),
    },
    {
      title: "Disabled",
      description: `A checkbox in a disabled state shows that a selection exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later.`,
      children: (
        <Stack align="center">
          {["not selected", "selected", "indeterminate"].map((variant) => (
            <Checkbox
              key={variant}
              disabled
              label="Default checkbox"
              readOnly
              checked={variant === "selected"}
              indeterminate={variant === "indeterminate"}
            />
          ))}
        </Stack>
      ),
    },
    {
      title: "Error",
      description: `Checkboxes can be marked as having an error to show that a selection needs to be made in order to move forward, or that a selection that was made is invalid. For example, in a form that requires a user to acknowledge legal terms before proceeding, the checkbox would show an unchecked error to communicate that it needs to be selected.`,
      children: (
        <Stack align="center">
          {["not selected", "selected", "indeterminate"].map((variant) => (
            <Checkbox
              key={variant}
              error="Error"
              label="Default checkbox"
              readOnly
              checked={variant === "selected"}
              indeterminate={variant === "indeterminate"}
            />
          ))}
        </Stack>
      ),
    },
    {
      title: "Required",
      description: `Checkbox group can be marked as required to show that a selection needs to be made in order to move forward. For example, in a form that requires a user to acknowledge legal terms before proceeding, the checkbox would show an unchecked error to communicate that it needs to be selected. WithAsterisk prop do the same thing but without logic.`,
      children: (
        <Center>
          <Checkbox.Group
            label="Select your favorite fruits"
            description="This is anonymous"
            required
          >
            <Group mt="xs">
              {["Kiwi", "Mango", "Apple", "Banana"].map((label) => (
                <Checkbox key={label} value={label} label={label} />
              ))}
            </Group>
          </Checkbox.Group>
        </Center>
      ),
    },
  ],
}

const AtomCheckboxes = () => {
  const theme = useMantineTheme()
  const checkboxConfigurator = getCheckboxConfigurator(theme)
  return (
    <ComponentDocs
      {...checkboxComponentDocsProps}
      preview={{
        configurator: checkboxConfigurator,
        children: (
          <>
            <Stack mb="xs">
              <Checkbox label="Default checkbox" />
              <Checkbox indeterminate label="Indeterminate checkbox" />
              <Checkbox defaultChecked indeterminate label="Indeterminate checked checkbox" />
              <Checkbox defaultChecked label="Checked checkbox" />
              <Checkbox disabled label="Disabled checkbox" />
              <Checkbox disabled defaultChecked label="Disabled checked checkbox" />
              <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
            </Stack>
            <Checkbox.Group
              label="Select your favorite fruits"
              description="This is anonymous"
              withAsterisk
            >
              <Group mt="xs">
                <Checkbox value="kiwi" label="Kiwi" />
                <Checkbox value="mango" label="Mango" />
                <Checkbox value="apple" label="Apple" />
                <Checkbox value="banana" label="Banana" />
              </Group>
            </Checkbox.Group>
          </>
        ),
      }}
    />
  )
}

export default AtomCheckboxes
