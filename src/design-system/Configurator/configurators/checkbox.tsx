import {
  Group,
  Checkbox,
  CheckboxGroupProps,
  MantineThemeOverride,
  MantineSize,
  CheckboxProps,
} from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox value="Banana" ${props} />
  );
}
`

function Wrapper(props: CheckboxProps) {
  return (
    <Group position="center">
      <Checkbox value="Banana" {...props} />
    </Group>
  )
}

const getCheckboxConfigurator = (theme: MantineThemeOverride) =>
  ({
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      { name: "label", type: "string", initialValue: "Banana" },
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
      { name: "description", type: "string", initialValue: "" },
      { name: "error", type: "string", initialValue: "" },
      {
        name: "color",
        type: "color",
        initialValue: theme.components?.Checkbox?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.Checkbox?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Checkbox?.defaultProps?.["size"] || "md",
      },
      {
        name: "disabled",
        type: "boolean",
        initialValue: false,
      },
    ],
  } as MantineDemo)

export default getCheckboxConfigurator
