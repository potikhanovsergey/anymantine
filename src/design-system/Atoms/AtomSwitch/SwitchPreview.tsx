import { Stack, Switch, Group } from "@mantine/core"

const LABEL = "Label"
const DESCRIPTION = "Description"

const SwitchPreview = () => {
  return (
    <Stack>
      <Switch label={LABEL} />
      <Switch label={LABEL} description={DESCRIPTION} labelPosition="right" />
      <Switch label={LABEL} description={DESCRIPTION} error="Error" labelPosition="right" />
      <Switch label={LABEL} description={DESCRIPTION} labelPosition="right" disabled />
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
  )
}

export default SwitchPreview
