import {
  ActionIconProps,
  Group,
  ActionIcon,
  MantineTheme,
  MantineThemeOverride,
  AnchorProps,
  Anchor,
} from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string, children: string) => `
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor${props}>
      ${children}
    </Anchor>
  );
}
`

function Wrapper(props: AnchorProps) {
  return (
    <Group justify="center">
      <Anchor {...props} />
    </Group>
  )
}

const getAnchorConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Anchor", theme)

  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "c",
        label: "Color",
        type: "color",
        initialValue: defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "size",
        type: "size",
        initialValue: defaultProps?.["size"] || "md",
      },
      // Todo: заменить на селект
      // { name: "underline", type: "boolean", initialValue: false },
      // { name: "strikethrough", type: "boolean", initialValue: false },
      {
        name: "children",
        type: "string",
        initialValue: "Link",
      },
    ],
  } as MantineDemo
}

export default getAnchorConfigurator
