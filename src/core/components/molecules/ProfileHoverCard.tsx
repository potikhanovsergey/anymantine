import { HoverCard, Avatar, Group, Box, Button, Text } from "@mantine/core"

export interface ProfileHoverCardProps {
  avatar: string
  name: string
  caption: string
}

const ProfileHoverCard = ({ avatar, name, caption }: ProfileHoverCardProps) => {
  return (
    <HoverCard withinPortal width={200} openDelay={300} position="top">
      <HoverCard.Target>
        <Avatar src={avatar} />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Group w="100%" wrap="nowrap" gap={4} mb="xs">
          <Avatar ml={0} src={avatar} />
          <div>
            <Text lh={1} fw="bold" size="xs">
              {name}
            </Text>
            <Text color="dimmed" size="xs">
              {caption}
            </Text>
          </div>
        </Group>
        <Button size="xs">Подписаться</Button>
      </HoverCard.Dropdown>
    </HoverCard>
  )
}

export default ProfileHoverCard
