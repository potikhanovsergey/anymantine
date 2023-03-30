import {
  Group,
  MantineThemeOverride,
  CheckboxProps,
  Avatar,
  AvatarProps,
  Chip,
  ChipProps,
} from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

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

const getChipConfigurator = (theme: MantineThemeOverride) =>
  ({
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
        initialValue: "light",
      },
      {
        name: "color",
        type: "color",
        initialValue: theme.components?.Chip?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.Chip?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Chip?.defaultProps?.["size"] || "md",
      },
    ],
  } as MantineDemo)

export default getChipConfigurator
