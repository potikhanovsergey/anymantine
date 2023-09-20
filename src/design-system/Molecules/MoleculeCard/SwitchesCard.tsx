import { Card, Group, Switch, Text } from "@mantine/core"

interface SwitchesCardProps {
  title: string
  description: string
  data: {
    title: string
    description: string
  }[]
}

const SwitchesCard = ({ title, description, data }: SwitchesCardProps) => {
  const items = data.map((item) => (
    <Group key={item.title} justify="space-between" pt="sm" mt="sm" wrap="nowrap" gap="xl">
      <div>
        <Text>{item.title}</Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </div>
      <Switch onLabel="ON" offLabel="OFF" size="md" />
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
