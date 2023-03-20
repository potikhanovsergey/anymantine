import { PaperProps, Group, Paper, MantineThemeOverride } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string, children: string) => `
import { Paper } from '@mantine/core';

function Demo() {
  return (
    <Paper${props}>
      ${children}
    </Paper>
  );
}
`

function Wrapper(props: PaperProps) {
  return (
    <Group position="center">
      <Paper {...props} />
    </Group>
  )
}

const getPaperConfigurator = (theme: MantineThemeOverride) => {
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "shadow",
        type: "size",
        initialValue: theme.components?.Paper?.defaultProps?.["shadow"] || "md",
      },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.Paper?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "p",
        label: "Padding",
        type: "size",
        initialValue: theme.components?.Paper?.defaultProps?.["p"] || "md",
      },
      { name: "withBorder", type: "boolean", initialValue: false },
      {
        name: "children",
        type: "string",
        initialValue: "Lorem ipsum dolor sit amet.",
      },
    ],
  } as MantineDemo
}

export default getPaperConfigurator
