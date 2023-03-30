import { Group, MantineThemeOverride, CheckboxProps, Avatar, AvatarProps } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Avatar ${props} />
  );
}
`

function Wrapper(props: AvatarProps) {
  return (
    <Group position="center">
      <Avatar {...props} />
    </Group>
  )
}

const getAvatarConfigurator = (theme: MantineThemeOverride) =>
  ({
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "variant",
        type: "select",
        data: [
          { label: "Light", value: "light" },
          { label: "Filled", value: "filled" },
          { label: "Outline", value: "outline" },
        ],
        initialValue: "light",
      },
      {
        name: "color",
        type: "color",
        initialValue: theme.components?.Checkbox?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.Checkbox?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Checkbox?.defaultProps?.["size"] || "md",
      },
      { name: "src", type: "string", initialValue: "" },
    ],
  } as MantineDemo)

export default getAvatarConfigurator
