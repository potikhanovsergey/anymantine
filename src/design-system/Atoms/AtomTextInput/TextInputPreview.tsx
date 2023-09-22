import { Stack, TextInput } from "@mantine/core"
import ExampleIcon from "src/design-system/ExampleIcon"

const TextInputPreview = () => {
  return (
    <Stack>
      <TextInput label="Label" placeholder="Placeholder..." />
      <TextInput label="Label" defaultValue="Wrong value..." error="Error..." />
      <TextInput leftSection={<ExampleIcon />} label="Label" placeholder="With icon on the left" />
      <TextInput label="Label" description="Description..." placeholder="Placeholder..." />
    </Stack>
  )
}

export default TextInputPreview
