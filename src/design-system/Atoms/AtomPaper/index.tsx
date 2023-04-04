import { Paper, Group, Stack, Text, useMantineTheme } from "@mantine/core"
import ComponentDocs, { ComponentDocsProps } from "src/design-system/ComponentDocs"
import getPaperConfigurator from "src/design-system/Configurator/configurators/paper"
import PaperPreview from "./PaperPreview"

export const paperDataLongMock =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquid dolore dolorum a minus? Accusamus aperiam fugiat totam optio enim?"

export const paperDataShortMock =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellat."

const paperComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Paper",
  description: `Papers group information into flexible containers with background and shadow to let users to browse a collection of related items.`,
  mantineLink: "https://mantine.dev/core/paper",
  examples: [
    {
      title: "Shadow",
      description: `The different size of the shadow changes the perception of the card: it is necessary to select it according to the overall composition and how important the information is. A large shadow will draw more attention.`,
      children: (
        <Stack>
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size} noWrap>
              <Text miw={40} color="dimmed">
                {size}
              </Text>
              <Paper withBorder={false} shadow={size}>
                {paperDataShortMock}
              </Paper>
            </Group>
          ))}
        </Stack>
      ),
    },
    {
      title: "With border",
      description: `withBorder prop will draw more attention to the paper. You can combine shadow and border if it fits your design.`,
      children: (
        <Group>
          {["With border", "Without border"].map((variant) => (
            <Stack key={variant}>
              <Text color="dimmed">{variant}</Text>
              <Paper withBorder={variant === "With border"} shadow="md">
                {paperDataShortMock}
              </Paper>
            </Stack>
          ))}
        </Group>
      ),
    },
  ],
}

const AtomPapers = () => {
  const theme = useMantineTheme()
  const paperConfigurator = getPaperConfigurator(theme)

  return (
    <ComponentDocs
      {...paperComponentDocsProps}
      preview={{
        configurator: paperConfigurator,
        children: <PaperPreview />,
      }}
    />
  )
}

export default AtomPapers
