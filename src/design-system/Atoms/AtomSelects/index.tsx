import { SimpleGrid, Select } from "@mantine/core"
import { IconInfoCircle, IconPassword } from "@tabler/icons-react"
import SelectConfigurator from "src/design-system/Configurator/configurators/select"
import ItemPreview from "src/design-system/ItemPreview"

export const selectDataMock = ["Orange", "Banana", "Mango", "Apple", "Lemon", "Kiwi"]

interface AtomSelectsProps {
  opened: boolean
  onToggleConfigurator: () => void
}

const AtomSelects = ({ opened, onToggleConfigurator }: AtomSelectsProps) => {
  return (
    <ItemPreview
      opened={opened}
      onToggleConfigurator={onToggleConfigurator}
      configurator={SelectConfigurator}
      title="Выпадающие списки"
    >
      <SimpleGrid cols={2}>
        <Select data={selectDataMock} label="Label" placeholder="Placeholder..." />
        <Select
          data={selectDataMock}
          icon={<IconPassword />}
          label="Label"
          placeholder="Иконка слева"
        />
        <Select
          data={selectDataMock}
          rightSection={<IconInfoCircle stroke={1} />}
          label="Label"
          placeholder="Иконка справа"
        />
        <Select
          data={selectDataMock}
          label="Searchable and clearable"
          searchable
          clearable
          placeholder="Searchable and clearable"
        />
        <Select
          data={selectDataMock}
          label="Label"
          description="Description..."
          placeholder="Placeholder..."
        />
      </SimpleGrid>
    </ItemPreview>
  )
}

export default AtomSelects
