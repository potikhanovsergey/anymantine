import { SimpleGrid, Select } from "@mantine/core"
import { IconInfoCircle, IconPassword } from "@tabler/icons-react"
import getSelectConfigurator from "src/design-system/Configurator/configurators/select"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

export const selectDataMock = ["Orange", "Banana", "Mango", "Apple", "Lemon", "Kiwi"]

const AtomSelects = () => {
  const selectConfigurator = getSelectConfigurator(DesignTheme.peek())
  return (
    <ItemPreview
      configurator={selectConfigurator}
      title="Select"
      mantineLink="https://mantine.dev/core/select"
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
