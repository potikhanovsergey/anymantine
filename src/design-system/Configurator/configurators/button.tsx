import { ButtonProps, Group, Button } from "@mantine/core"
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

const ButtonConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "variant",
      type: "select",
      data: [
        { label: "filled", value: "filled" },
        { label: "outline", value: "outline" },
        { label: "shadow", value: "shadow" },
      ],
      initialValue: "filled",
    },
    { name: "color", type: "color", initialValue: "dark", defaultValue: "dark" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "compact", type: "boolean", initialValue: false, defaultValue: false },
    { name: "uppercase", type: "boolean", initialValue: false, defaultValue: false },
    { name: "children", type: "string", initialValue: "Пример кнопки" },
  ],
}

export default ButtonConfigurator
