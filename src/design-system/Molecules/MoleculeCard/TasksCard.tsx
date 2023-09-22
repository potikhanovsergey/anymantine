import { Card, Avatar, Text, Progress, Badge, Group, ActionIcon } from "@mantine/core"
import { IconUpload } from "@tabler/icons-react"
import Mantine from "src/core/components/icons/Mantine"

const avatars = [
  "https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
]

const TasksCard = () => {
  return (
    <Card padding="lg">
      <Group justify="space-between">
        <Mantine width="2rem" />
        <Badge>12 days left</Badge>
      </Group>

      <Text fz="lg" fw={500} mt="md">
        5.3 minor release (September 2022)
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
        Form context management, Switch, Grid and Indicator components improvements, new hook and
        10+ other changes
      </Text>

      <Text c="dimmed" fz="sm" mt="md">
        Tasks completed:{" "}
        <Text span fw={500}>
          23/36
        </Text>
      </Text>

      <Progress value={(23 / 36) * 100} mt={5} />

      <Group justify="space-between" mt="md">
        <Avatar.Group spacing="sm">
          {avatars.map((avatar) => (
            <Avatar src={avatar} radius="xl" key={avatar} />
          ))}
          <Avatar radius="xl">+5</Avatar>
        </Avatar.Group>
        <ActionIcon variant="secondary">
          <IconUpload size="1.1rem" />
        </ActionIcon>
      </Group>
    </Card>
  )
}

export default TasksCard
