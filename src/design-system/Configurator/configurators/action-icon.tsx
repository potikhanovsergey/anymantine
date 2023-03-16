import { ActionIconProps, Group, ActionIcon } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string, children: string) => `
import { ActionIcon } from '@mantine/core';
import { IconHeart } from "@tabler/icons-react"

function Demo() {
  return (
    <ActionIcon${props}>
      <IconHeart size="75%" stroke={1} />
    </ActionIcon>
  );
}
`

function Wrapper(props: ActionIconProps) {
  return (
    <Group position="center">
      <ActionIcon {...props}>
        <IconHeart size="75%" stroke={1} />
      </ActionIcon>
    </Group>
  )
}

const ActionIconConfigurator: MantineDemo = {
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
        { label: "shadow", value: "shadow" },
        { label: "transparent", value: "transparent" },
      ],
      initialValue: "primary",
    },
    { name: "color", type: "color", initialValue: "dark", defaultValue: "dark" },
    { name: "radius", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "size", type: "size", initialValue: "lg", defaultValue: "lg" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "loading", type: "boolean", initialValue: false, defaultValue: false },
  ],
}

export default ActionIconConfigurator
