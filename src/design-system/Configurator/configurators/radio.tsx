import { RadioProps, Group, Radio, RadioGroupProps } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

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
    <Group position="center">
      <Radio value="Banana" {...props} />
    </Group>
  )
}

const getRadioConfigurator = (theme) =>
  ({
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
        initialValue: theme.components?.Radio?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Radio?.defaultProps?.["size"] || "md",
      },
    ],
  } as MantineDemo)

export default getRadioConfigurator
