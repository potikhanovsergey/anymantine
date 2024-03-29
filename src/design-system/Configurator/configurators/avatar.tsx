import { Group, Avatar, AvatarProps, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string) => `
import { Avatar } from '@mantine/core';

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

const getAvatarConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Avatar", theme)
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "variant",
        type: "segmented",
        data: [
          { label: "Light", value: "light" },
          { label: "Filled", value: "filled" },
          { label: "Outline", value: "outline" },
        ],
        initialValue: defaultProps?.["variant"] || "light",
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
      { name: "src", type: "string", initialValue: "" },
    ],
  } as MantineDemo
}

export default getAvatarConfigurator
