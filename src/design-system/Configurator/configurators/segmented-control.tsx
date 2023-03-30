import { Group, SegmentedControlProps, SegmentedControl } from "@mantine/core"
import React from "react"
import { segmentedControlDataMock } from "src/design-system/Atoms/AtomSegmentedControl"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <SegmentedControl ${props}
      data={[
        { label: "React", value: "react" },
        { label: "Angular", value: "ng" },
        { label: "Vue", value: "vue" },
        { label: "Svelte", value: "svelte" },
      ]}
    />
  );
}
`

function Wrapper(props: SegmentedControlProps) {
  return (
    <Group position="center">
      <SegmentedControl {...props} data={segmentedControlDataMock} />
    </Group>
  )
}

const getSegmentedControlConfigurator = (theme) =>
  ({
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
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
        name: "color",
        type: "color",
        initialValue: theme.components?.Radio?.defaultProps?.["color"] || theme.primaryColor,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Radio?.defaultProps?.["size"] || "md",
      },
      {
        name: "disabled",
        type: "boolean",
        initialValue: false,
      },
    ],
  } as MantineDemo)

export default getSegmentedControlConfigurator
