import {
  SelectProps,
  Group,
  Select,
  MantineThemeOverride,
  MultiSelectProps,
  MultiSelect,
} from "@mantine/core"
import React from "react"
import { multiSelectDataMock } from "src/design-system/Atoms/AtomMultiSelect"
import { MantineDemo } from "src/design-system/Demo/types"

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
    <Group position="center">
      <MultiSelect {...props} data={multiSelectDataMock} />
    </Group>
  )
}

const getMultiSelectConfigurator = (theme: MantineThemeOverride) =>
  ({
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
        initialValue: theme.components?.Select?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "size",
        type: "size",
        initialValue: theme.components?.Select?.defaultProps?.["size"] || "md",
      },
      { name: "disabled", type: "boolean", initialValue: false },
      { name: "clearable", type: "boolean", initialValue: false },
      { name: "searchable", type: "boolean", initialValue: false },
      { name: "required", type: "boolean", initialValue: false },
    ],
  } as MantineDemo)

export default getMultiSelectConfigurator
