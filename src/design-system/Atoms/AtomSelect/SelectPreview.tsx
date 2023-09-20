import { SimpleGrid, Select } from "@mantine/core"
import ExampleIcon from "src/design-system/ExampleIcon"
import { selectDataMock } from "."

const SelectPreview = () => {
  return (
    <SimpleGrid cols={2}>
      <Select data={selectDataMock} label="Label" placeholder="Placeholder..." />
      <Select
        data={selectDataMock}
        leftSection={<ExampleIcon />}
        label="Label"
        placeholder="Left icon"
      />
    </SimpleGrid>
  )
}

export default SelectPreview
