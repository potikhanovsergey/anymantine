import { Stack, Title, Text, Box, Group, Tooltip } from "@mantine/core"
import ItemPreview, { ItemPreviewProps } from "../ItemPreview"
import Example, { ExampleProps } from "../Tokens/Example"
import Link from "next/link"
import Mantine from "src/core/components/icons/Mantine"

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
        <Group spacing="xs" mb="md">
          <Title order={1}>{title}</Title>
          {mantineLink && (
            <Tooltip label={mantineLink}>
              <Box component={Link} lh={0} href={mantineLink} target="_blank">
                <Mantine />
              </Box>
            </Tooltip>
          )}
        </Group>

        <Text maw="75%">{description}</Text>
      </div>
      <ItemPreview {...preview} />
      <div>
        <Title order={2} mb="md">
          Options
        </Title>
        <Stack spacing={64}>
          {examples.map((example) => (
            <Example {...example} key={example.title} />
          ))}
        </Stack>
      </div>
    </Stack>
  )
}

export default ComponentDocs
