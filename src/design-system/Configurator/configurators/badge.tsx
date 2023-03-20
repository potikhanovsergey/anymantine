import { BadgeProps, Group, Badge, MantineThemeOverride } from "@mantine/core"
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

const getBadgeConfigurator = (theme: MantineThemeOverride) =>
  ({
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
        initialValue: theme.components?.Badge?.defaultProps?.["variant"] || "filled",
      },
      {
        name: "color",
        type: "color",
        initialValue: theme.components?.Badge?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.Badge?.defaultProps?.["raidus"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Badge?.defaultProps?.["size"] || "md",
      },
      { name: "children", type: "string", initialValue: "Пример тега" },
    ],
  } as MantineDemo)

export default getBadgeConfigurator
