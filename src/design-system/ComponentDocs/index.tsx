import { Stack, Title, Text } from "@mantine/core"
import ItemPreview, { ItemPreviewProps } from "../ItemPreview"
import PageTitle from "../layout/PageTitle"
import Example, { ExampleProps } from "../Examples/Example"
import Examples from "../Examples/Examples"
import PageSubtitle from "../layout/PageSubtitle"

export interface ComponentDocsProps {
  title: string
  mantineLink?: string
  description: string
  preview?: ItemPreviewProps
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
    <Stack gap={40}>
      <div>
        <PageTitle mantineLink={mantineLink}>{title}</PageTitle>
        <Text maw="75%">{description}</Text>
      </div>
      {preview && <ItemPreview {...preview} />}
      <div>
        <PageSubtitle mb={64}>Examples</PageSubtitle>
        <Examples examples={examples} />
      </div>
    </Stack>
  )
}

export default ComponentDocs
