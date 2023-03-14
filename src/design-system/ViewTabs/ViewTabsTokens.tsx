import { Tabs, Title } from "@mantine/core"
import ThemeColors from "../ThemeColors/ThemeColors"

const ViewTabsTokens = () => {
  return (
    <Tabs.Panel value="tokens" mt="md">
      <Title order={2} mb="md">
        Цвета
      </Title>
      <ThemeColors />
    </Tabs.Panel>
  )
}

export default ViewTabsTokens
