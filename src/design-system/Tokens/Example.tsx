import { Group, Title, Text } from "@mantine/core"
import { ReactNode } from "react"
import DesignSystemProvider from "../DesignSystemProvider"

export interface ExampleProps {
  title: string
  description?: string
  children: ReactNode
}

const Example = ({ title, description, children }: ExampleProps) => {
  return (
    <Group noWrap grow align="flex-start">
      <DesignSystemProvider>
        <Group position="center">{children}</Group>
      </DesignSystemProvider>
      <div>
        <Title order={3}>{title}</Title>
        {description && <Text>{description}</Text>}
      </div>
    </Group>
  )
}

export default Example
