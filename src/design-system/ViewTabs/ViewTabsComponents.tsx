import { Tabs } from "@mantine/core"
import ViewTabsTokens from "./ViewTabsTokens"
import ViewTabsAtoms from "./ViewTabsAtoms"
import ViewTabsMolecules from "./ViewTabsMolecules"
import { ModalsProvider } from "@mantine/modals"
import TestModal from "../TestModal"

const ViewTabsComponents = () => {
  return (
    <Tabs.Panel value="components" mt="md">
      <Tabs defaultValue="tokens">
        <Tabs.List mb={40}>
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
