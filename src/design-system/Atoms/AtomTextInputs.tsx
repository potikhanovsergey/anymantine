import { SimpleGrid, TextInput } from "@mantine/core"
import { IconInfoCircle, IconPassword } from "@tabler/icons-react"
import getTextInputConfigurator from "src/design-system/Configurator/configurators/text-input"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

const AtomTextInputs = () => {
  const textInputConfigurator = getTextInputConfigurator(DesignTheme.peek())
  return (
    <ItemPreview
      configurator={textInputConfigurator}
      title="Текстовые поля"
      mantineLink="https://mantine.dev/core/text-input"
    >
      <SimpleGrid cols={2}>
        <TextInput label="Label" placeholder="Placeholder..." />
        <TextInput label="Label" defaultValue="Wrong value..." error="Error..." />
        <TextInput icon={<IconPassword />} label="Label" placeholder="Иконка слева" />
        <TextInput
          rightSection={<IconInfoCircle stroke={1} />}
          label="Label"
          placeholder="Иконка справа"
        />
        <TextInput label="Label" description="Description..." placeholder="Placeholder..." />
      </SimpleGrid>
    </ItemPreview>
  )
}

export default AtomTextInputs
