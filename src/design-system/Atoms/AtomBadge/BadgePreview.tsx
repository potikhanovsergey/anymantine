import { Group, Badge } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"

const BadgePreview = () => {
  return (
    <Group>
      <Badge>Badge</Badge>
      <Badge leftSection={<IconHeart size={10} />}>Badge with left icon</Badge>
    </Group>
  )
}

export default BadgePreview
