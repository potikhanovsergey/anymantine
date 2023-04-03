import { Stack, Textarea } from "@mantine/core"

const TextareaPreview = () => {
  return (
    <Stack>
      <Textarea label="Label" description="Description..." placeholder="Placeholder..." />
      <Textarea label="Label" defaultValue="Wrong value..." error="Error..." />
    </Stack>
  )
}
export default TextareaPreview
