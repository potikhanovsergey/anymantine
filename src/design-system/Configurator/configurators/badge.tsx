import { BadgeProps, Group, Badge } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string, children: string) => `
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge${props}>
      ${children}
    </Badge>
  );
}
`

function Wrapper(props: BadgeProps) {
  return (
    <Group position="center">
      <Badge {...props} />
    </Group>
  )
}

const BadgeConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "variant",
      type: "select",
      data: [
        { label: "filled", value: "filled" },
        { label: "light", value: "light" },
        { label: "outline", value: "outline" },
      ],
      initialValue: "filled",
    },
    { name: "color", type: "color", initialValue: "dark", defaultValue: "dark" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "children", type: "string", initialValue: "Пример тега" },
  ],
}

export default BadgeConfigurator
