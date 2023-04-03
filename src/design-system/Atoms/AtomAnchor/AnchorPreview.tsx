import { Group, Anchor } from "@mantine/core"

const AnchorPreview = () => {
  return (
    <Group>
      <Anchor>Link with underline</Anchor>
      <Anchor underline={false}>Link without underline</Anchor>
    </Group>
  )
}

export default AnchorPreview
