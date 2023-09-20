import { TextInputProps, Group, TextInput, MantineThemeOverride, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string) => `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput${props} />
  );
}
`

function Wrapper(props: TextInputProps) {
  return (
    <Group justify="center">
      <TextInput {...props} />
    </Group>
  )
}

const getTextInputConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Input", theme)
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      { name: "placeholder", type: "string", initialValue: "Placeholder..." },
      { name: "label", type: "string", initialValue: "Label" },
      { name: "description", type: "string", initialValue: "" },
      { name: "error", type: "string", initialValue: "" },
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
      { name: "disabled", type: "boolean", initialValue: false },
      { name: "required", type: "boolean", initialValue: false },
    ],
  } as MantineDemo
}

export default getTextInputConfigurator
