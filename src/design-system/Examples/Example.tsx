import { Group, Title, Text } from "@mantine/core"
import { ReactNode } from "react"
import DesignSystemProvider from "../DesignSystemProvider"

export interface ExampleProps {
  title: string
  description?: ReactNode
  children: ReactNode
}

const Example = ({ title, description, children }: ExampleProps) => {
  return (
    <Group noWrap grow align="flex-start">
      <DesignSystemProvider>
        <Group position="center">{children}</Group>
      </DesignSystemProvider>
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
