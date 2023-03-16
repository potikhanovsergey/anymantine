import { Group, Checkbox, CheckboxGroupProps } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group${props}
    >
      <Group my="xs">
        <Checkbox value="kiwi" label="Kiwi" />
        <Checkbox value="mango" label="Mango" />
        <Checkbox value="apple" label="Apple" />
        <Checkbox value="banana" label="Banana" />
      </Group>
    </Checkbox.Group>
  );
}
`

function Wrapper(props: CheckboxGroupProps) {
  return (
    <Group position="center">
      <Checkbox.Group {...props}>
        <Group my="xs">
          <Checkbox value="kiwi" label="Kiwi" />
          <Checkbox value="mango" label="Mango" />
          <Checkbox value="apple" label="Apple" />
          <Checkbox value="banana" label="Banana" />
        </Group>
      </Checkbox.Group>
    </Group>
  )
}

const CheckboxConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "label", type: "string", initialValue: "Select your favorite fruits" },
    { name: "description", type: "string", initialValue: "This is anonymous" },
    { name: "error", type: "string", initialValue: "" },
    {
      name: "withAsterisk",
      label: "With asterisk",
      type: "boolean",
      initialValue: false,
    },
  ],
}

export default CheckboxConfigurator
