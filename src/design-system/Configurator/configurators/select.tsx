import { SelectProps, Group, Select, MantineThemeOverride, MantineTheme } from "@mantine/core"
import React from "react"
import { selectDataMock } from "src/design-system/Atoms/AtomSelect"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

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
    <Group justify="center">
      <Select {...props} data={selectDataMock} />
    </Group>
  )
}

const getSelectConfigurator = (theme: MantineTheme) => {
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
      { name: "searchable", type: "boolean", initialValue: false },
      { name: "required", type: "boolean", initialValue: false },
    ],
  } as MantineDemo
}

export default getSelectConfigurator
