import { ActionIconProps, Group, ActionIcon, MantineThemeOverride } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import ExampleIcon from "src/design-system/ExampleIcon"

const codeTemplate = (props: string) => `
import { ActionIcon } from '@mantine/core';
import { IconSettings } from "@tabler/icons-react"

function Demo() {
  return (
    <ActionIcon${props}>
      <IconSettings size="75%" stroke={1} />
    </ActionIcon>
  );
}
`

function Wrapper(props: ActionIconProps) {
  return (
    <Group position="center">
      <ActionIcon {...props}>
        <ExampleIcon />
      </ActionIcon>
    </Group>
  )
}

const getActionIconConfigurator = (theme: MantineThemeOverride) =>
  ({
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
          { label: "transparent", value: "transparent" },
        ],
        initialValue: "primary",
      },
      {
        name: "color",
        type: "color",
        initialValue: theme.components?.ActionIcon?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.ActionIcon?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.ActionIcon?.defaultProps?.["size"] || "md",
      },
      { name: "disabled", type: "boolean", initialValue: false },
      { name: "loading", type: "boolean", initialValue: false },
    ],
  } as MantineDemo)

export default getActionIconConfigurator
