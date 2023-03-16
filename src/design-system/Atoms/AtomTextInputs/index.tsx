import { Group, SimpleGrid, Stack, TextInput } from "@mantine/core"
import { IconInfoCircle, IconPassword } from "@tabler/icons-react"
import TextInputConfigurator from "src/design-system/Configurator/configurators/text-input"
import ItemPreview from "src/design-system/ItemPreview"

interface AtomTextInputsProps {
  opened: boolean
  onToggleConfigurator: () => void
}

const AtomTextInputs = ({ opened, onToggleConfigurator }: AtomTextInputsProps) => {
  return (
    <ItemPreview
      opened={opened}
      onToggleConfigurator={onToggleConfigurator}
      configurator={TextInputConfigurator}
      title="Текстовые поля"
    >
      <SimpleGrid cols={2}>
        <TextInput label="Label" placeholder="Placeholder..." />
        <TextInput label="Label" value="Wrong value..." error="Error..." />
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
