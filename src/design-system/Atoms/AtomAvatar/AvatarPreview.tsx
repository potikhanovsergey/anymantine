import { Group, Avatar } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"

const AvatarPreview = () => {
  return (
    <Group>
      <Avatar src="https://ucarecdn.com/c7a89916-f499-4fb9-90da-cb89f738c59a/" alt="it's me" />
      <Avatar />
      <Avatar>MK</Avatar>
      <Avatar>
        <IconHeart size="1.5rem" />
      </Avatar>
    </Group>
  )
}

export default AvatarPreview
