import { Group, Title, Text } from "@mantine/core"
import { ReactNode } from "react"

export interface ExampleProps {
  title: string
  description?: ReactNode
  children: ReactNode
}

const Example = ({ title, description, children }: ExampleProps) => {
  return (
    <Group noWrap grow align="flex-start" spacing={64}>
      {children}
      <div>
        <Title order={3} mb="lg">
          {title}
        </Title>
        {description && typeof description === "string" ? <Text>{description}</Text> : description}
      </div>
    </Group>
  )
}

export default Example
