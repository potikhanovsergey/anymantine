import { Group, Checkbox, Stack } from "@mantine/core"
import CheckboxConfigurator from "src/design-system/Configurator/configurators/checkbox"
import ItemPreview from "src/design-system/ItemPreview"

const AtomCheckboxes = () => {
  return (
    <ItemPreview
      configurator={CheckboxConfigurator}
      title="Чекбоксы"
      mantineLink="https://mantine.dev/core/checkbox"
    >
      <Stack mb="xs">
        <Checkbox label="Default checkbox" />
        <Checkbox indeterminate label="Indeterminate checkbox" />
        <Checkbox defaultChecked indeterminate label="Indeterminate checked checkbox" />
        <Checkbox defaultChecked label="Checked checkbox" />
        <Checkbox disabled label="Disabled checkbox" />
        <Checkbox disabled defaultChecked label="Disabled checked checkbox" />
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