import { Group, MantineThemeOverride, Chip, ChipProps, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string) => `
import { Chip } from '@mantine/core';

function Demo() {
  return (
    <Chip ${props}>
      Awesome chip
    </Chip>
  );
}
`

function Wrapper(props: ChipProps) {
  return (
    <Group position="center">
      <Chip {...props}>Awesome chip</Chip>
    </Group>
  )
}

const getChipConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Chip", theme)
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
    ],
  } as MantineDemo
}

export default getChipConfigurator
