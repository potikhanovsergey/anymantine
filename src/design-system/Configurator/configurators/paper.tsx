import { PaperProps, Group, Paper, MantineThemeOverride, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

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
    <Group justify="center">
      <Paper {...props} />
    </Group>
  )
}

const getPaperConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Paper", theme)
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "shadow",
        type: "size",
        initialValue: defaultProps?.["shadow"] || "md",
      },
      {
        name: "radius",
        type: "size",
        initialValue: defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "p",
        label: "Padding",
        type: "size",
        initialValue: defaultProps?.["p"] || "md",
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
