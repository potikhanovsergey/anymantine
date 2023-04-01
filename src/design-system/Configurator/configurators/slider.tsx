import {
  Group,
  MantineThemeOverride,
  CheckboxProps,
  Avatar,
  AvatarProps,
  SliderProps,
  Slider,
  Stack,
} from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider ${props}
      marks={[
        { value: 20 },
        { value: 50 },
        { value: 80 },
      ]}
    />
  );
}
`

function Wrapper(props: SliderProps) {
  return (
    <Stack align="center">
      <Slider {...props} w="100%" marks={[{ value: 20 }, { value: 50 }, { value: 80 }]} />
    </Stack>
  )
}

const getSliderConfigurator = (theme: MantineThemeOverride) =>
  ({
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "color",
        type: "color",
        initialValue: theme.components?.Slider?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.Slider?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Slider?.defaultProps?.["size"] || "md",
      },
      {
        name: "showLabelOnHover",
        label: "Show label on hover",
        type: "boolean",
        initialValue: false,
      },
      { name: "labelAlwaysOn", label: "Label always on", type: "boolean", initialValue: false },
    ],
  } as MantineDemo)

export default getSliderConfigurator
