import { RadioProps, Group, Radio, RadioGroupProps, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string) => `
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio value="banana" ${props} />
  );
}
`

function Wrapper(props: RadioProps) {
  return (
    <Group justify="center">
      <Radio value="Banana" {...props} />
    </Group>
  )
}

const getRadioConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Radio", theme)
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      { name: "label", type: "string", initialValue: "Banana" },
      {
        name: "labelPosition",
        label: "Label Position",
        type: "segmented",
        data: [
          { label: "Right", value: "right" },
          { label: "Left", value: "left" },
        ],
        initialValue: "right",
      },
      { name: "description", type: "string", initialValue: "" },
      { name: "error", type: "string", initialValue: "" },
      {
        name: "color",
        type: "color",
        initialValue: defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "size",
        type: "size",
        initialValue: defaultProps?.["size"] || "md",
      },
    ],
  } as MantineDemo
}

export default getRadioConfigurator
