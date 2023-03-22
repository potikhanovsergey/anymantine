import { Group, Button, Title, Text } from "@mantine/core"
import getButtonConfigurator from "src/design-system/Configurator/configurators/button"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

const AtomButtons = () => {
  const buttonConfigurator = getButtonConfigurator(DesignTheme.peek())
  return (
    <div>
      <Title order={1} mb="md">
        Button
      </Title>
      <Text maw="75%">
        Buttons allow users to perform an action or to navigate to another page. They have multiple
        styles for various needs, and are ideal for calling attention to where a user needs to do
        something in order to move forward in a flow.
      </Text>
      <ItemPreview
        configurator={buttonConfigurator}
        title="Button"
        mantineLink="https://mantine.dev/core/button"
      >
        <Group>
          <Button variant="primary">Пример кнопки</Button>
          <Button variant="secondary">Пример кнопки</Button>
        </Group>
      </ItemPreview>
    </div>
  )
}

export default AtomButtons
