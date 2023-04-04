import { Group, Chip } from "@mantine/core"

const ChipPreview = () => {
  return (
    <Group>
      <Chip variant="outline">Awesome chip</Chip>
      <Chip variant="light">Awesome chip</Chip>
      <Chip variant="filled">Awesome chip</Chip>
    </Group>
  )
}

export default ChipPreview
