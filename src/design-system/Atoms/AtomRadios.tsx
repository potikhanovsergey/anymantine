import { Group, Stack, Radio } from "@mantine/core"
import getRadioConfigurator from "src/design-system/Configurator/configurators/radio"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

const AtomRadios = () => {
  const radioConfigurator = getRadioConfigurator(DesignTheme.peek())
  return (
    <ItemPreview
      configurator={radioConfigurator}
      title="Radio Button"
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
