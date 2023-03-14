import { Paper, Stack, Tabs, Title } from "@mantine/core"
import ThemeColors from "../ThemeColors/ThemeColors"

const ViewTabsTokens = () => {
  return (
    <Tabs.Panel value="tokens" mt="md">
      <Stack>
        <Stack spacing="xs">
          <Title order={2}>Цвета</Title>
          <ThemeColors />
        </Stack>
        <Stack spacing="xs">
          <Title order={2}>Границы и тени</Title>
          <Paper withBorder>Йоо</Paper>
        </Stack>
      </Stack>
    </Tabs.Panel>
  )
}

export default ViewTabsTokens
