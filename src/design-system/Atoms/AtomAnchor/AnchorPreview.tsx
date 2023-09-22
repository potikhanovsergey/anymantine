import { Group, Anchor } from "@mantine/core"

const AnchorPreview = () => {
  return (
    <Group>
      <Anchor underline="hover">Link with underline on hover</Anchor>
      <Anchor underline="never">Link without underline on hover</Anchor>
    </Group>
  )
}

export default AnchorPreview
