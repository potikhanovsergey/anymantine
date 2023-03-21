import { Group, Stack, Switch } from "@mantine/core"
import getSwitchConfigurator from "src/design-system/Configurator/configurators/switch"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

const AtomSwitches = () => {
  const switchConfigurator = getSwitchConfigurator(DesignTheme.peek())
  return (
    <ItemPreview
      configurator={switchConfigurator}
      title="Switch"
      mantineLink="https://mantine.dev/core/switch"
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

export default AtomSwitches
