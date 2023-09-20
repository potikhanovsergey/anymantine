import {
  Group,
  Switch,
  MantineThemeOverride,
  StepperProps,
  Stepper,
  MantineTheme,
} from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string) => `
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper ${props}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
  </Stepper>
  );
}
`

function Wrapper(props: StepperProps) {
  return (
    <Group justify="center">
      <Stepper {...props} active={1}>
        <Stepper.Step label="Step 1" description="Create an account" />
        <Stepper.Step label="Step 2" description="Verify email" />
      </Stepper>
    </Group>
  )
}

const getStepperConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Stepper", theme)
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
        name: "orientation",
        type: "segmented",
        data: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
        initialValue: "horizontal",
      },
      {
        name: "iconPosition",
        label: "Icon position",
        type: "segmented",
        data: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
        initialValue: "left",
      },
    ],
  } as MantineDemo
}

export default getStepperConfigurator
