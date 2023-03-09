import { HoverCard, Avatar, Group, Box, Button, Text } from "@mantine/core"

export interface ProfileHoverCardProps {
  avatar: string
  name: string
  caption: string
}

const ProfileHoverCard = ({ avatar, name, caption }: ProfileHoverCardProps) => {
  return (
    <HoverCard width={200} openDelay={300} position="top">
      <HoverCard.Target>
        <Avatar src={avatar} />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Group w="100%" noWrap spacing={4} mb="xs">
          <Avatar ml={0} src={avatar} />
          <Box>
            <Text lh={1} weight="bold" size="xs">
              {name}
            </Text>
            <Text color="dimmed" size="xs">
              {caption}
            </Text>
          </Box>
        </Group>
        <Button size="xs">Подписаться</Button>
      </HoverCard.Dropdown>
    </HoverCard>
  )
}

export default ProfileHoverCard
