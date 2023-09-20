import { ButtonProps, Group, Button, MantineThemeOverride, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string, children: string) => `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button${props}>
      ${children}
    </Button>
  );
}
`

function Wrapper(props: ButtonProps) {
  return (
    <Group justify="center">
      <Button {...props} />
    </Group>
  )
}

const getButtonConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Button", theme)
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "variant",
        type: "select",
        data: [
          { label: "primary", value: "primary" },
          { label: "secondary", value: "secondary" },
        ],
        initialValue: defaultProps?.["variant"] || "primary",
      },
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
      { name: "disabled", type: "boolean", initialValue: false },
      { name: "loading", type: "boolean", initialValue: false },
      { name: "compact", type: "boolean", initialValue: false },
      { name: "uppercase", type: "boolean", initialValue: false },
      { name: "children", type: "string", initialValue: "Some action" },
    ],
  } as MantineDemo
}

export default getButtonConfigurator
