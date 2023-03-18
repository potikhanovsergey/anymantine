import { Group, Stack, Radio } from "@mantine/core"
import RadioConfigurator from "src/design-system/Configurator/configurators/radio"
import ItemPreview from "src/design-system/ItemPreview"

const AtomRadios = () => {
  return (
    <ItemPreview
      configurator={RadioConfigurator}
      title="Радио кнопки"
      mantineLink="https://mantine.dev/core/radio"
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
