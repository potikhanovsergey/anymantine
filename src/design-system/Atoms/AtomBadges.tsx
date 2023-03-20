import { Group, Badge } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import getBadgeConfigurator from "src/design-system/Configurator/configurators/badge"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

const AtomBadges = () => {
  const badgeConfigurator = getBadgeConfigurator(DesignTheme.peek())
  return (
    <ItemPreview
      configurator={badgeConfigurator}
      title="Теги"
      mantineLink="https://mantine.dev/core/badge"
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
