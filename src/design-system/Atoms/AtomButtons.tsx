import { Group, Button } from "@mantine/core"
import ButtonConfigurator from "src/design-system/Configurator/configurators/button"
import ItemPreview from "src/design-system/ItemPreview"

const AtomButtons = () => {
  return (
    <ItemPreview
      configurator={ButtonConfigurator}
      title="Кнопки"
      mantineLink="https://mantine.dev/core/button"
    >
      <Group>
        <Button variant="primary">Пример кнопки</Button>
        <Button variant="secondary">Пример кнопки</Button>
        <Button variant="shadow">Пример с тенью</Button>
        <Button variant="shadow" color="red">
          Пример с тенью
        </Button>
      </Group>
    </ItemPreview>
  )
}

export default AtomButtons
