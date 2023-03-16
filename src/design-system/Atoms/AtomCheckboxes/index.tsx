import { Group, Checkbox, Stack } from "@mantine/core"
import CheckboxConfigurator from "src/design-system/Configurator/configurators/checkbox"
import ItemPreview from "src/design-system/ItemPreview"

interface AtomCheckboxesProps {
  opened: boolean
  onToggleConfigurator: () => void
}

const AtomCheckboxes = ({ opened, onToggleConfigurator }: AtomCheckboxesProps) => {
  return (
    <ItemPreview
      opened={opened}
      onToggleConfigurator={onToggleConfigurator}
      configurator={CheckboxConfigurator}
      title="Чекбоксы"
    >
      <Stack mb="xs">
        <Checkbox checked={false} label="Default checkbox" />
        <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
        <Checkbox checked indeterminate label="Indeterminate checked checkbox" />
        <Checkbox checked label="Checked checkbox" />
        <Checkbox disabled label="Disabled checkbox" />
        <Checkbox disabled checked label="Disabled checked checkbox" />
        <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
      </Stack>
      <Checkbox.Group
        label="Select your favorite fruits"
        description="This is anonymous"
        withAsterisk
      >
        <Group mt="xs">
          <Checkbox value="kiwi" label="Kiwi" />
          <Checkbox value="mango" label="Mango" />
          <Checkbox value="apple" label="Apple" />
          <Checkbox value="banana" label="Banana" />
        </Group>
      </Checkbox.Group>
    </ItemPreview>
  )
}

export default AtomCheckboxes
