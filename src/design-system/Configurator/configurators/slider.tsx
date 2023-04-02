import {
  Group,
  MantineThemeOverride,
  CheckboxProps,
  Avatar,
  AvatarProps,
  SliderProps,
  Slider,
  Stack,
  MantineTheme,
} from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

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

const getSliderConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Slider", theme)
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
        name: "radius",
        type: "size",
        initialValue: defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: defaultProps?.["size"] || "md",
      },
      {
        name: "showLabelOnHover",
        label: "Show label on hover",
        type: "boolean",
        initialValue: false,
      },
      { name: "labelAlwaysOn", label: "Label always on", type: "boolean", initialValue: false },
    ],
  } as MantineDemo
}

export default getSliderConfigurator
