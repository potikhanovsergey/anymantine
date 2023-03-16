import { TextInputProps, Group, TextInput } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string, children: string) => `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput${props} />
  );
}
`

function Wrapper(props: TextInputProps) {
  return (
    <Group position="center">
      <TextInput {...props} />
    </Group>
  )
}

const TextInputConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "placeholder", type: "string", initialValue: "Пример поля" },
    { name: "label", type: "string", initialValue: "Label" },
    { name: "description", type: "string", initialValue: "" },
  ],
}

export default TextInputConfigurator
