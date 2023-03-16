import { RadioProps, Group, Radio, RadioGroupProps } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio.Group${props}
      name="radioConfigurator"
    >
      <Group my="xs">
        <Radio value="kiwi" label="Kiwi" />
        <Radio value="mango" label="Mango" />
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
      </Group>
    </Radio.Group>
  );
}
`

function Wrapper(props: RadioGroupProps) {
  return (
    <Group position="center">
      <Radio.Group name="radioConfigurator" {...props}>
        <Group my="xs">
          <Radio value="kiwi" label="Kiwi" />
          <Radio value="mango" label="Mango" />
          <Radio value="apple" label="Apple" />
          <Radio value="banana" label="Banana" />
        </Group>
      </Radio.Group>
    </Group>
  )
}

const RadioConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "label", type: "string", initialValue: "Select your favorite fruit" },
    { name: "description", type: "string", initialValue: "This is anonymous" },
    { name: "error", type: "string", initialValue: "" },
    {
      name: "withAsterisk",
      label: "With asterisk",
      type: "boolean",
      initialValue: false,
      defaultValue: false,
    },
  ],
}

export default RadioConfigurator
