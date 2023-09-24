import { Group, MantineTheme, Table, TableProps } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string) => `
import { Table } from '@mantine/core';

function Demo() {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ]
        
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ))
      
  return (
    <Table${props} >
        <Table.Thead>
            <Table.Tr>
                <Table.Th>Element position</Table.Th>
                <Table.Th>Element name</Table.Th>
                <Table.Th>Symbol</Table.Th>
                <Table.Th>Atomic mass</Table.Th>
             </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`
const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
]

const rows = elements.map((element) => (
  <Table.Tr key={element.name}>
    <Table.Td>{element.position}</Table.Td>
    <Table.Td>{element.name}</Table.Td>
    <Table.Td>{element.symbol}</Table.Td>
    <Table.Td>{element.mass}</Table.Td>
  </Table.Tr>
))

const ths = (
  <Table.Tr>
    <Table.Th>Element position</Table.Th>
    <Table.Th>Element name</Table.Th>
    <Table.Th>Symbol</Table.Th>
    <Table.Th>Atomic mass</Table.Th>
  </Table.Tr>
)

function Wrapper(props: TableProps) {
  return (
    <Group justify="center">
      <Table {...props}>
        <Table.Thead>{ths}</Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Group>
  )
}

const getTableConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Table", theme)
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "horizontalSpacing",
        label: "Horizontal spacing",
        type: "size",
        initialValue: defaultProps?.["horizontalSpacing"] || "xs",
      },
      {
        name: "verticalSpacing",
        label: "Vertical spacing",
        type: "size",
        initialValue: defaultProps?.["verticalSpacing"] || "xs",
      },
      { name: "striped", type: "boolean", initialValue: false },
      {
        name: "highlightOnHover",
        label: "Highlight on hover",
        type: "boolean",
        initialValue: false,
      },
      { name: "withTableBorder", label: "With table border", type: "boolean", initialValue: false },
      {
        name: "withColumnBorders",
        label: "With column border",
        type: "boolean",
        initialValue: false,
      },
      { name: "withRowBorders", label: "With row border", type: "boolean", initialValue: true },
    ],
  } as MantineDemo
}

export default getTableConfigurator
