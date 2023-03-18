import { Tabs, rem, useMantineTheme } from "@mantine/core"
import ViewTabsTokens from "./ViewTabsTokens"
import ViewTabsAtoms from "./ViewTabsAtoms"
import ViewTabsMolecules from "./ViewTabsMolecules"
import { ModalsProvider } from "@mantine/modals"
import TestModal from "../TestModal"

const ViewTabsComponents = () => {
  const theme = useMantineTheme()
  return (
    <Tabs.Panel value="components">
      <Tabs defaultValue="tokens">
        <Tabs.List
          mb={40}
          pos="sticky"
          sx={{ zIndex: 100 }}
          pb="md"
          top={`calc(${rem(32)} + 2 * ${theme.spacing.md})`}
          bg={theme.white}
        >
          <Tabs.Tab value="tokens">Токены</Tabs.Tab>
          <Tabs.Tab value="atoms">Атомы</Tabs.Tab>
          <Tabs.Tab value="molecules">Молекулы</Tabs.Tab>
        </Tabs.List>
        <ModalsProvider modals={{ test: TestModal }}>
          <ViewTabsTokens />
          <ViewTabsAtoms />
          <ViewTabsMolecules />
        </ModalsProvider>
      </Tabs>
    </Tabs.Panel>
  )
}

export default ViewTabsComponents
