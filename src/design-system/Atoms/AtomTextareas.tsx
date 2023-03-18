import { SimpleGrid, Textarea } from "@mantine/core"
import TextareaConfigurator from "src/design-system/Configurator/configurators/textarea"
import ItemPreview from "src/design-system/ItemPreview"

interface AtomTextareasProps {
  opened: boolean
  onToggleConfigurator: () => void
}

const AtomTextareas = ({ opened, onToggleConfigurator }: AtomTextareasProps) => {
  return (
    <ItemPreview
      opened={opened}
      onToggleConfigurator={onToggleConfigurator}
      configurator={TextareaConfigurator}
      title="Textareas"
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
