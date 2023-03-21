import { SimpleGrid, Textarea } from "@mantine/core"
import getTextareaConfigurator from "src/design-system/Configurator/configurators/textarea"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

const AtomTextareas = () => {
  const textareaConfigurator = getTextareaConfigurator(DesignTheme.peek())
  return (
    <ItemPreview
      configurator={textareaConfigurator}
      title="Textarea"
      mantineLink="https://mantine.dev/core/textarea"
    >
      <SimpleGrid cols={2}>
        <Textarea label="Label" placeholder="Placeholder..." />
        <Textarea label="Label" defaultValue="Wrong value..." error="Error..." />
        <Textarea label="Label" description="Description..." placeholder="Placeholder..." />
      </SimpleGrid>
    </ItemPreview>
  )
}

export default AtomTextareas
