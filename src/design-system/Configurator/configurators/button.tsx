import { ButtonProps, Group, Button, MantineThemeOverride } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

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
    <Group position="center">
      <Button {...props} />
    </Group>
  )
}

const getButtonConfigurator = (theme: MantineThemeOverride) => {
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
        initialValue: theme.components?.Button?.defaultProps?.["variant"] || "primary",
      },
      {
        name: "color",
        type: "color",
        initialValue: theme.components?.Button?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.Button?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Button?.defaultProps?.["size"] || "md",
      },
      { name: "disabled", type: "boolean", initialValue: false },
      { name: "loading", type: "boolean", initialValue: false },
      { name: "compact", type: "boolean", initialValue: false },
      { name: "uppercase", type: "boolean", initialValue: false },
      { name: "children", type: "string", initialValue: "Пример кнопки" },
    ],
  } as MantineDemo
}

export default getButtonConfigurator
