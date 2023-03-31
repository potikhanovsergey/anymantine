import { Stack, Title, Text } from "@mantine/core"
import ItemPreview, { ItemPreviewProps } from "../ItemPreview"
import PageTitle from "../layout/PageTitle"
import Example, { ExampleProps } from "../Examples/Example"
import Examples from "../Examples/Examples"

export interface ComponentDocsProps {
  title: string
  mantineLink?: string
  description: string
  preview: ItemPreviewProps
  examples: ExampleProps[]
}

const ComponentDocs = ({
  title,
  description,
  mantineLink,
  preview,
  examples,
}: ComponentDocsProps) => {
  return (
    <Stack spacing={40}>
      <div>
        <PageTitle mantineLink={mantineLink}>{title}</PageTitle>
        <Text maw="75%">{description}</Text>
      </div>
      <ItemPreview {...preview} />
      <div>
        <Title order={2} mb="md">
          Examples
        </Title>
        <Examples examples={examples} />
      </div>
    </Stack>
  )
}

export default ComponentDocs
