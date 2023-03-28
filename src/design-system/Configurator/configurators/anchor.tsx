import {
  ActionIconProps,
  Group,
  ActionIcon,
  MantineTheme,
  MantineThemeOverride,
  AnchorProps,
  Anchor,
} from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

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
    <Group position="center">
      <Anchor {...props} />
    </Group>
  )
}

const getAnchorConfigurator = (theme: MantineThemeOverride) =>
  ({
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "color",
        type: "color",
        initialValue: theme.components?.Anchor?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Anchor?.defaultProps?.["size"] || "md",
      },
      { name: "underline", type: "boolean", initialValue: false },
      { name: "strikethrough", type: "boolean", initialValue: false },
      {
        name: "children",
        type: "string",
        initialValue: "Link",
      },
    ],
  } as MantineDemo)

export default getAnchorConfigurator
