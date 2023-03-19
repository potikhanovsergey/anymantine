import { Group, Box, Title, Text } from "@mantine/core"
import { ReactNode } from "react"

export interface ExampleProps {
  title: string
  description?: string
  children: ReactNode
}

const Example = ({ title, description, children }: ExampleProps) => {
  return (
    <Group noWrap grow>
      <Group position="center">{children}</Group>
      <Box>
        <Title order={3}>{title}</Title>
        {description && <Text>{description}</Text>}
      </Box>
    </Group>
  )
}

export default Example
