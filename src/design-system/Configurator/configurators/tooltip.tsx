import { TooltipProps, Group, Tooltip, ActionIcon } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

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
import { IconHeart } from "@tabler/icons-react"

function Demo() {
  return (
    <Tooltip${props}>
      <ActionIcon>
        <IconHeart size="75%" stroke={1} />
      </ActionIcon>
    </Tooltip>
  );
}
`

function Wrapper(props: TooltipProps) {
  return (
    <Group position="center">
      <Tooltip {...props}>
        <ActionIcon>
          <IconHeart size="75%" stroke={1} />
        </ActionIcon>
      </Tooltip>
    </Group>
  )
}

const TooltipConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "color",
      type: "color",
      initialValue: "blue",
    },
    {
      name: "position",
      type: "select",
      data: FLOATING_POSITION_DATA,
      initialValue: "top",
      defaultValue: "top",
    },
    { name: "withArrow", type: "boolean", initialValue: true, defaultValue: false },
    {
      name: "label",
      type: "string",
      initialValue: "Make love",
      defaultValue: "Make love",
    },
  ],
}

export default TooltipConfigurator
