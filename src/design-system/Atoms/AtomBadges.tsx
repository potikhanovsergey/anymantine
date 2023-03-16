import { Group, Badge } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import BadgeConfigurator from "src/design-system/Configurator/configurators/badge"
import ItemPreview from "src/design-system/ItemPreview"

interface AtomBadgesProps {
  opened: boolean
  onToggleConfigurator: () => void
}

const AtomBadges = ({ opened, onToggleConfigurator }: AtomBadgesProps) => {
  return (
    <ItemPreview
      opened={opened}
      onToggleConfigurator={onToggleConfigurator}
      configurator={BadgeConfigurator}
      title="Теги"
    >
      <Group>
        <Badge>Тег</Badge>
        <Badge leftSection={<IconHeart size={10} />}>Тег с иконкой слева</Badge>
        <Badge rightSection={<IconHeart size={10} />}>Тег с иконкой справа</Badge>
      </Group>
    </ItemPreview>
  )
}

export default AtomBadges
