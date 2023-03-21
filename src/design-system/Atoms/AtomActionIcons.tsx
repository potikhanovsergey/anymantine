import { Group, ActionIcon } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import getActionIconConfigurator from "src/design-system/Configurator/configurators/action-icon"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

const AtomActionIcons = () => {
  const actionIconConfigurator = getActionIconConfigurator(DesignTheme.peek())
  return (
    <ItemPreview
      configurator={actionIconConfigurator}
      title="Action Icon"
      mantineLink="https://mantine.dev/core/action-icon"
    >
      <Group>
        <ActionIcon variant="primary">
          <IconHeart stroke={1} size="75%" />
        </ActionIcon>
        <ActionIcon variant="secondary">
          <IconHeart stroke={1} size="75%" />
        </ActionIcon>
        <ActionIcon variant="transparent">
          <IconHeart stroke={1} size="75%" />
        </ActionIcon>
      </Group>
    </ItemPreview>
  )
}

export default AtomActionIcons
