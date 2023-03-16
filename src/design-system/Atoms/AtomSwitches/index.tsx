import { Group, Stack, Switch } from "@mantine/core"
import SwitchConfigurator from "src/design-system/Configurator/configurators/switch"
import ItemPreview from "src/design-system/ItemPreview"

interface AttomSwitchesProps {
  opened: boolean
  onToggleConfigurator: () => void
}

const AttomSwitches = ({ opened, onToggleConfigurator }: AttomSwitchesProps) => {
  return (
    <ItemPreview
      opened={opened}
      onToggleConfigurator={onToggleConfigurator}
      configurator={SwitchConfigurator}
      title="Радио кнопки"
    >
      <Group>
        <Stack>
          <Switch label="Label" />
          <Switch label="Label" description="Description" labelPosition="right" />
          <Switch label="Label" description="Description" error="Error" labelPosition="right" />
          <Switch label="Label" description="Description" labelPosition="right" disabled />
          <Switch.Group
            defaultValue={["mango"]}
            label="Select your favorite fruits"
            description="This is anonymous"
            withAsterisk
          >
            <Group mt="xs">
              <Switch value="kiwi" label="Kiwi" />
              <Switch value="mango" label="Mango" />
              <Switch value="apple" label="Apple" />
              <Switch value="banana" label="Banana" />
            </Group>
          </Switch.Group>
        </Stack>
      </Group>
    </ItemPreview>
  )
}

export default AttomSwitches
