import { SelectProps, Group, Select } from "@mantine/core"
import React from "react"
import { selectDataMock } from "src/design-system/Atoms/AtomSelects"
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

const SelectConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Пример поля" },
    { name: "label", type: "string", initialValue: "Label" },
    { name: "description", type: "string", initialValue: "" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "clearable", type: "boolean", initialValue: false, defaultValue: false },
    { name: "searchable", type: "boolean", initialValue: false, defaultValue: false },
    { name: "required", type: "boolean", initialValue: false, defaultValue: false },
  ],
}

export default SelectConfigurator
