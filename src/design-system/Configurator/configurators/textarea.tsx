import { TextareaProps, Group, Textarea } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <Textarea${props} />
  );
}
`

function Wrapper(props: TextareaProps) {
  return (
    <Group position="center">
      <Textarea {...props} />
    </Group>
  )
}

const TextareaConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Пример поля" },
    { name: "label", type: "string", initialValue: "Label" },
    { name: "description", type: "string", initialValue: "" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "required", type: "boolean", initialValue: false, defaultValue: false },
  ],
}

export default TextareaConfigurator
