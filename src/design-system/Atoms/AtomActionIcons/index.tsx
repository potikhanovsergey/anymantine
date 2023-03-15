import { Group, ActionIcon } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import ActionIconConfigurator from "src/design-system/Configurator/configurators/action-icon"
import ItemPreview from "src/design-system/ItemPreview"

interface AtomActionIconsProps {
  opened: boolean
  onToggleConfigurator: () => void
}

const AtomActionIcons = ({ opened, onToggleConfigurator }: AtomActionIconsProps) => {
  return (
    <ItemPreview
      opened={opened}
      onToggleConfigurator={onToggleConfigurator}
      configurator={ActionIconConfigurator}
      title="Action Icons"
    >
      <Group>
        <ActionIcon variant="primary">
          <IconHeart stroke={1} size="75%" />
        </ActionIcon>
        <ActionIcon variant="secondary">
          <IconHeart stroke={1} size="75%" />
        </ActionIcon>
        <ActionIcon variant="shadow" color="red">
          <IconHeart stroke={1} size="75%" />
        </ActionIcon>
      </Group>
    </ItemPreview>
  )
}

export default AtomActionIcons
