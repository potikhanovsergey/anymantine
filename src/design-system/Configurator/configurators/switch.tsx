import { SwitchProps, Group, Switch, MantineThemeOverride } from "@mantine/core"
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

const getSwitchConfigurator = (theme: MantineThemeOverride) =>
  ({
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
      {
        name: "color",
        type: "color",
        initialValue: theme.components?.Switch?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.Switch?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Switch?.defaultProps?.["size"] || "md",
      },
      { name: "disabled", type: "boolean", initialValue: false },
    ],
  } as MantineDemo)

export default getSwitchConfigurator
