import { SimpleGrid, Textarea } from "@mantine/core"
import TextareaConfigurator from "src/design-system/Configurator/configurators/textarea"
import ItemPreview from "src/design-system/ItemPreview"

const AtomTextareas = () => {
  return (
    <ItemPreview
      configurator={TextareaConfigurator}
      title="Textareas"
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
