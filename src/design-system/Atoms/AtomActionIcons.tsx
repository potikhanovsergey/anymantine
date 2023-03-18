import { Group, ActionIcon } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import ActionIconConfigurator from "src/design-system/Configurator/configurators/action-icon"
import ItemPreview from "src/design-system/ItemPreview"

const AtomActionIcons = () => {
  return (
    <ItemPreview
      configurator={ActionIconConfigurator}
      title="Action Icons"
      mantineLink="https://mantine.dev/core/action-icon"
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
