import {
  Group,
  Checkbox,
  CheckboxGroupProps,
  MantineThemeOverride,
  MantineSize,
  CheckboxProps,
  MantineTheme,
} from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

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
    <Group justify="center">
      <Checkbox value="Banana" {...props} />
    </Group>
  )
}

const getCheckboxConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Checkbox", theme)
  return {
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
        initialValue: defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "radius",
        type: "size",
        initialValue: defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: defaultProps?.["size"] || "md",
      },
      {
        name: "disabled",
        type: "boolean",
        initialValue: false,
      },
    ],
  } as MantineDemo
}

export default getCheckboxConfigurator
