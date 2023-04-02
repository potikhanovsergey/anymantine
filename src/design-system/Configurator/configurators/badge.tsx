import { BadgeProps, Group, Badge, MantineThemeOverride, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

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

const getBadgeConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Badge", theme)
  return {
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
        initialValue: defaultProps?.["variant"] || "filled",
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
      { name: "children", type: "string", initialValue: "Badge example" },
    ],
  } as MantineDemo
}

export default getBadgeConfigurator
