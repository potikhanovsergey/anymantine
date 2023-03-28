import { Stack, Title, Text } from "@mantine/core"
import ItemPreview, { ItemPreviewProps } from "../ItemPreview"
import Example, { ExampleProps } from "../Tokens/Example"

export interface ComponentDocsProps {
  title: string
  description: string
  preview: ItemPreviewProps
  examples: ExampleProps[]
}

const ComponentDocs = ({ title, description, preview, examples }: ComponentDocsProps) => {
  return (
    <Stack spacing={40}>
      <div>
        <Title order={1} mb="md">
          {title}
        </Title>
        <Text maw="75%">{description}</Text>
      </div>
      <ItemPreview {...preview} />
      <div>
        <Title order={2} mb="md">
          Options
        </Title>
        <Stack spacing={40}>
          {examples.map((example) => (
            <Example {...example} key={example.title} />
          ))}
        </Stack>
      </div>
    </Stack>
  )
}

export default ComponentDocs
