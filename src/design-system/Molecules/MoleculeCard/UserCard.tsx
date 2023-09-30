import { Card, Avatar, Text, Group, Button, rem, useMantineTheme } from "@mantine/core"

interface UserCardImageProps {
  image: string
  avatar: string
  name: string
  job: string
  stats: { label: string; value: string }[]
}

const UserCard = ({ image, avatar, name, job, stats }: UserCardImageProps) => {
  const theme = useMantineTheme()

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ))

  return (
    <Card padding="xl">
      <Card.Section style={{ backgroundImage: `url(${image})`, height: 140 }} />
      <Avatar
        src={avatar}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        style={{ border: `${rem(2)} solid ${theme.white}` }}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {job}
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Button fullWidth mt="xl" size="md">
        Follow
      </Button>
    </Card>
  )
}

export default UserCard
