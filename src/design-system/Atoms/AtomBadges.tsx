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
      title="Badge"
      mantineLink="https://mantine.dev/core/badge"
    >
      <Group>
        <Badge>Badge</Badge>
        <Badge leftSection={<IconHeart size={10} />}>Badge with left icon</Badge>
        <Badge rightSection={<IconHeart size={10} />}>Badge with right icon</Badge>
      </Group>
    </ItemPreview>
  )
}

export default AtomBadges
