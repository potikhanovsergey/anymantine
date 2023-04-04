import { Card, Group, Switch, Text } from "@mantine/core"

interface SwitchesCardProps {
  title: string
  description: string
  data: {
    title: string
    description: string
  }[]
}

export const switchesCardMockData = {
  title: "Configure notifications",
  description: "Choose what notifications you want to receive",
  data: [
    {
      title: "Messages",
      description: "Direct messages you have received from other users",
    },
    {
      title: "Review requests",
      description: "Code review requests from your team members",
    },
    {
      title: "Comments",
      description: "Daily digest with comments on your posts",
    },
    {
      title: "Recommendations",
      description: "Digest with best community posts from previous week",
    },
  ],
}

const SwitchesCard = ({ title, description, data }: SwitchesCardProps) => {
  const items = data.map((item) => (
    <Group key={item.title} position="apart" pt="sm" mt="sm" noWrap spacing="xl">
      <div>
        <Text>{item.title}</Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </div>
      <Switch onLabel="ON" offLabel="OFF" size="lg" />
    </Group>
  ))

  return (
    <Card p="xl">
      <Text fz="lg" lh={1} fw={500}>
        {title}
      </Text>
      <Text fz="xs" c="dimmed" mt={4} mb="xl">
        {description}
      </Text>
      {items}
    </Card>
  )
}

export default SwitchesCard
