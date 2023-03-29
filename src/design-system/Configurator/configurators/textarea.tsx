import { TextareaProps, Group, Textarea, MantineThemeOverride } from "@mantine/core"
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

const getTextareaConfigurator = (theme: MantineThemeOverride) =>
  ({
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      { name: "placeholder", type: "string", initialValue: "Placeholder..." },
      { name: "label", type: "string", initialValue: "Label" },
      { name: "description", type: "string", initialValue: "" },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.TextInput?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.TextInput?.defaultProps?.["size"] || "md",
      },
      { name: "disabled", type: "boolean", initialValue: false },
      { name: "required", type: "boolean", initialValue: false },
    ],
  } as MantineDemo)

export default getTextareaConfigurator
