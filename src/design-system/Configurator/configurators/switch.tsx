import { SwitchProps, Group, Switch } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { Switch } from '@mantine/core';

function Demo() {
  return (
    <Switch${props} />
  );
}
`

function Wrapper(props: SwitchProps) {
  return (
    <Group position="center">
      <Switch {...props} />
    </Group>
  )
}

const SwitchConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "labelPosition",
      label: "Label Position",
      type: "segmented",
      data: [
        { label: "Right", value: "right" },
        { label: "Left", value: "left" },
      ],
      initialValue: "right",
    },
    { name: "label", type: "string", initialValue: "Label" },
    { name: "description", type: "string", initialValue: "" },
    { name: "error", type: "string", initialValue: "" },
    { name: "color", type: "color", initialValue: "dark", defaultValue: "dark" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
  ],
}

export default SwitchConfigurator
