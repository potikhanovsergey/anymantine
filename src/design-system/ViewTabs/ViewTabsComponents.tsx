import { Tabs as Tabs, MantineProvider } from "@mantine/core"
import GeistTheme from "src/themes/GeistTheme"
import ViewTabsTokens from "./ViewTabsTokens"
import ViewTabsAtoms from "./ViewTabsAtoms"
import ViewTabsMolecules from "./ViewTabsMolecules"
import { ModalsProvider } from "@mantine/modals"
import TestModal from "../TestModal"

const ViewTabsComponents = () => {
  return (
    <Tabs.Panel value="components" mt="md">
      <Tabs>
        <Tabs.List mb="xl">
          <Tabs.Tab value="tokens">Токены</Tabs.Tab>
          <Tabs.Tab value="atoms">Атомы</Tabs.Tab>
          <Tabs.Tab value="molecules">Молекулы</Tabs.Tab>
        </Tabs.List>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={GeistTheme}>
          <ModalsProvider modals={{ test: TestModal }}>
            <ViewTabsTokens />
            <ViewTabsAtoms />
            <ViewTabsMolecules />
          </ModalsProvider>
        </MantineProvider>
      </Tabs>
    </Tabs.Panel>
  )
}

export default ViewTabsComponents
