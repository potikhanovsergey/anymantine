import { SelectProps, Group, Select, MantineThemeOverride } from "@mantine/core"
import React from "react"
import { selectDataMock } from "src/design-system/Atoms/AtomSelect"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select${props}
      data={${JSON.stringify(selectDataMock)}}
    />
  );
}
`

function Wrapper(props: SelectProps) {
  return (
    <Group position="center">
      <Select {...props} data={selectDataMock} />
    </Group>
  )
}

const getSelectConfigurator = (theme: MantineThemeOverride) =>
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

export default getSelectConfigurator
