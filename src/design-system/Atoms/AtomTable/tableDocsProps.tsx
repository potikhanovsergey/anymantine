import { Table } from "@mantine/core"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"
import { elements } from "./TablePreview"

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

const tableDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Table",
  description: `Table is commonly used to display a list of items in a table.`,
  mantineLink: "https://mantine.dev/core/table",
  examples: [
    {
      title: "Label with caption and tfoot",
      description: `Table support tfoot and caption elements. Set captionSide prop (top or bottom) to change caption position.`,
      children: (
        <Table captionSide="bottom">
          <Table.Caption>Some elements from periodic table</Table.Caption>
          <Table.Thead>{ths}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
          <Table.Tfoot>{ths}</Table.Tfoot>
        </Table>
      ),
    },
    {
      title: "Table with borders",
      description: `You can use differnet borders and combinations of them - table borders, row borders, and colums borders.`,
      children: (
        <Table withColumnBorders withRowBorders withTableBorder>
          <Table.Thead>{ths}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      ),
    },
    {
      title: "Striped and rows hover",
      description: `Striped table are more comfotable to underastand.`,
      children: (
        <Table striped highlightOnHover>
          <Table.Thead>{ths}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      ),
    },
  ],
}

export default tableDocsProps
