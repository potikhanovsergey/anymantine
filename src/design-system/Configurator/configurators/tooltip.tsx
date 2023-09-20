import { TooltipProps, Group, Tooltip, ActionIcon, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import ExampleIcon from "src/design-system/ExampleIcon"
import getDefaultProps from "src/helpers/getDefaultProps"

const FLOATING_POSITION_DATA = [
  { label: "top", value: "top" },
  { label: "top-start", value: "top-start" },
  { label: "top-end", value: "top-end" },
  { label: "left", value: "left" },
  { label: "left-start", value: "left-start" },
  { label: "left-end", value: "left-end" },
  { label: "right", value: "right" },
  { label: "right-start", value: "right-start" },
  { label: "right-end", value: "right-end" },
  { label: "bottom", value: "bottom" },
  { label: "bottom-start", value: "bottom-start" },
  { label: "bottom-end", value: "bottom-end" },
]

const codeTemplate = (props: string) => `
import { Tooltip, ActionIcon } from '@mantine/core';
import { IconSettings } from "@tabler/icons-react"

function Demo() {
  return (
    <Tooltip${props}>
      <ActionIcon>
        <IconSettings size="75%" stroke={1} />
      </ActionIcon>
    </Tooltip>
  );
}
`

function Wrapper(props: TooltipProps) {
  return (
    <Group justify="center">
      <Tooltip {...props}>
        <ActionIcon>
          <ExampleIcon />
        </ActionIcon>
      </Tooltip>
    </Group>
  )
}

const getTooltipConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Tooltip", theme)

  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "color",
        type: "color",
        initialValue: defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "position",
        type: "select",
        data: FLOATING_POSITION_DATA,
        initialValue: "top",
      },
      {
        name: "radius",
        type: "size",
        initialValue: defaultProps?.["radius"] || theme.defaultRadius,
      },
      { name: "withArrow", type: "boolean", initialValue: defaultProps?.["withArrow"] || true },
      {
        name: "opened",
        label: "Always opened",
        type: "boolean",
        initialValue: defaultProps?.["opened"] || true,
      },
      {
        name: "label",
        type: "string",
        initialValue: "Make love",
      },
    ],
  } as MantineDemo
}

export default getTooltipConfigurator
