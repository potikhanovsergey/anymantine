import { Group, Button } from "@mantine/core"
import getButtonConfigurator from "src/design-system/Configurator/configurators/button"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

const AtomButtons = () => {
  const buttonConfigurator = getButtonConfigurator(DesignTheme.peek())
  return (
    <ItemPreview
      configurator={buttonConfigurator}
      title="Кнопки"
      mantineLink="https://mantine.dev/core/button"
    >
      <Group>
        <Button variant="primary">Пример кнопки</Button>
        <Button variant="secondary">Пример кнопки</Button>
      </Group>
    </ItemPreview>
  )
}

export default AtomButtons
