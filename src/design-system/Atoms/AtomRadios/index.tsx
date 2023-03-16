import { Group, Stack, Radio } from "@mantine/core"
import RadioConfigurator from "src/design-system/Configurator/configurators/radio"
import ItemPreview from "src/design-system/ItemPreview"

interface AtomRadiosProps {
  opened: boolean
  onToggleConfigurator: () => void
}

const AtomRadios = ({ opened, onToggleConfigurator }: AtomRadiosProps) => {
  return (
    <ItemPreview
      opened={opened}
      onToggleConfigurator={onToggleConfigurator}
      configurator={RadioConfigurator}
      title="Радио кнопки"
    >
      <Radio.Group
        name="favoriteFruit"
        label="Select your favorite fruit"
        description="This is anonymous"
        withAsterisk
        defaultValue="mango"
      >
        <Group mt="xs">
          <Radio value="kiwi" label="Kiwi" />
          <Radio value="mango" label="Mango" />
          <Radio value="apple" label="Apple" />
          <Radio value="banana" label="Banana" />
        </Group>
      </Radio.Group>
    </ItemPreview>
  )
}

export default AtomRadios
