import { Group, MultiSelectProps, MultiSelect, MantineTheme } from "@mantine/core"
import React from "react"
import { multiSelectDataMock } from "src/design-system/Atoms/AtomMultiSelect/mocks"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string) => `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect${props}
      data=[
        { value: "react", label: "React" },
        { value: "ng", label: "Angular" },
        { value: "svelte", label: "Svelte" },
        { value: "vue", label: "Vue" },
        { value: "riot", label: "Riot" },
        { value: "next", label: "Next.js" },
        { value: "blitz", label: "Blitz.js" },
      ]
    />
  );
}
`

function Wrapper(props: MultiSelectProps) {
  return (
    <Group justify="center">
      <MultiSelect {...props} data={multiSelectDataMock} />
    </Group>
  )
}

const getMultiSelectConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Input", theme)
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      { name: "placeholder", type: "string", initialValue: "Placeholder..." },
      { name: "label", type: "string", initialValue: "Label" },
      { name: "description", type: "string", initialValue: "" },
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
      { name: "disabled", type: "boolean", initialValue: false },
      { name: "clearable", type: "boolean", initialValue: false },
      { name: "searchable", type: "boolean", initialValue: false },
      { name: "required", type: "boolean", initialValue: false },
    ],
  } as MantineDemo
}

export default getMultiSelectConfigurator
